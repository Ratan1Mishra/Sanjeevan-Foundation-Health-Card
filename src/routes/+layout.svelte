<script>
  import { goto } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";
  import { menus, sa_menus } from "../services/Data";
  import { userInfo } from "../store/Users";
  import { callServerApi } from "../services/DataService";

  let current_menus = menus;
  let offcanvasVal = "";
  let menuLevel = "0";
  let bsOffcanvas;
  let btnLogin;
  let hrEmployees = {};
  let canHide = "";
  let status = "";
  let showModal = false;
  let errorObj = {};

  $: menuLevel === "0" ? (offcanvasVal = "") : (offcanvasVal = "offcanvas");

  function closeOffcanvas() {
    bsOffcanvas.hide();
  }

  function showDlg() {
    showModal = true;
  }

  function hideDlg() {
    showModal = false;
  }

  function forgotPassword() {
    goto("/forgot-password");
  }

  function onMenuClick(menuname) {
    console.log(menuname);
    if (menuname.submenus.length > 0) {
      current_menus = menuname.submenus;
      menuLevel = "1";
      // offcanvasVal = "offcanvas"
    } else if (menuname.label === "Back") {
      console.log("Backing..");
      menuLevel = "0";
      if ($userInfo["username"] === "manish.bhavsar") current_menus = sa_menus;
      else current_menus = menus;
    } else {
      goto(menuname.url);
      menuLevel = "0";
      closeOffcanvas();
    }
  }

  onMount(() => {
    const offcanvasElement = document.querySelector(".offcanvas");

    bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const modalElement = document.querySelector(".modal");
    btnLogin = new bootstrap.Modal(modalElement);
    console.log("btnLogin...", btnLogin);
  });

  onDestroy(() => {});

  async function getHrEmployees() {
    if (
      !hrEmployees.username ||
      !hrEmployees.password ||
      hrEmployees.username.trim().length === 0 ||
      hrEmployees.password.trim().length === 0
    ) {
      status = "Invalid username or password";
      setTimeout(() => {
        status = "";
      }, 5000);
      return;
    }
    const result = await callServerApi(
      "getHrEmployees",
      {},
      { username: hrEmployees.username, password: hrEmployees.password }
    );
    if (result.flag === "success") {
      if (result.data.length === 0) {
        status = "Invalid username or password";
        canHide = "";
        setTimeout(() => {
          status = "";
        }, 5000);
      } else {
        btnLogin.hide();
        userInfo.set(result.data[0]);
        if (result.data[0]["username"] === "manish.bhavsar")
          current_menus = sa_menus;
        goto("/dashboard");
      }
    } else {
      status = "Invalid username or password";
      canHide = "";
      setTimeout(() => {
        status = "";
      }, 5000);
    }
  }

  function logout() {
    goto("/");
    userInfo.set({});
  }

  // Register
  function navigateToRegister() {
      goto("/register");
    }
</script>

<div class="container-fluid p-0 a">
  <script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap"; // Import Bootstrap JavaScript for components
  </script>

  <nav class="navbar nav-main navbar-expand-lg borderx">
    <img class="logox-img" src="../images/logox.png" alt="logo" />
    <a class="navbar-brand" href="#" on:click={() => goto("/")}>
      <h1 class="logo1">Sanjeevan Foundation</h1></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav nav2 ">
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/")}>Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/health")}
            >SAAD Card</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/events")}
            >Events</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/members")}
            >Members</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/terms")}
            >T & C</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" on:click={() => goto("/contacts")}
            >Contact</a
          >
        </li>
      </ul>
    </div>
    <button class="register-btn" on:click={navigateToRegister}>Register</button>
    <!-- login -->

    <div >
      {#if Object.keys($userInfo).length > 0}
        <button
          class="btn btn-clear btn-lg"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
        >
          <i class="bi bi-list"></i>
        </button>
      {/if}
    </div>
    <div class="log-2">
      {#if Object.keys($userInfo).length === 0}
        <div class="right">
          <button
            class="log-btn btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#d1"
            on:click={showDlg}
          >
            <!-- <i class="bi bi-box-arrow-left"></i> -->
            Login
          </button>
        </div>
      {/if}
      {#if Object.keys($userInfo).length > 0}
        <div class="right">
          <label class="me-3 user"> Hi, Manish </label>
          <button class="btn btn-outline-primary" on:click={logout}>
            <i class="bi bi-box-arrow-left"></i>
            Logout
          </button>
        </div>
      {/if}
    </div>
  </nav>
  <slot></slot>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas">
    <div class="offcanvas-header">
      <img style="height: 30px" src="../images/logo.png" alt="img" />
      <button class="btn-close" aria-label="Close" data-bs-dismiss="offcanvas">
      </button>
    </div>
    <div class="offcanvas-body">
      {#each current_menus as menu}
        <div>
          <div
            class="row vrow py-1 px-3"
            data-bs-dismiss={offcanvasVal}
            on:keypress
            on:click={() => onMenuClick(menu)}
          >
            <div class="col-1">
              {#if menu.icon}
                <div>
                  {#if menu.icon.startsWith("../images")}
                    <img src={menu.icon} />
                  {/if}
                  {#if !menu.icon.startsWith("../images")}
                    <i class={menu.icon}> </i>
                  {/if}
                </div>
              {/if}
            </div>
            <div class="col-10">
              <label>
                {menu.label}
              </label>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="modal fade" id="d1" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="row">
            <div class="col-6">
              <img style="width: 100%" src="images/login.jpeg" alt="img" />
            </div>
            <div class="p-5 col-6">
              <h1 class="header1">Start your journey</h1>
              <h4>Connect to most powerful platform</h4>
              <div class="row mt-5">
                <div class="col-12">
                  <label class="form-label"
                    >Username<span class="ms-1">*</span></label
                  >
                  <input
                    class="form-control"
                    name="username"
                    bind:value={hrEmployees.username}
                    type="text"
                  />
                  {#if Object.keys(errorObj).includes("username")}
                    <label style="color: red">
                      {errorObj["username"]}
                    </label>
                  {/if}
                </div>
                <div class="col-12">
                  <label class="form-label"
                    >Password<span class="ms-1">*</span></label
                  >
                  <input
                    class="mb-4 form-control"
                    name="password"
                    bind:value={hrEmployees.password}
                    type="password"
                  />
                  {#if Object.keys(errorObj).includes("password")}
                    <label style="color: red">
                      {errorObj["password"]}
                    </label>
                  {/if}
                </div>
                <div class="col-12">
                  <a
                    class="mt-4"
                    data-bs-dismiss="modal"
                    on:click={forgotPassword}
                    href={"#"}
                  >
                    Forgot password?
                  </a>
                </div>
                <div class="col-12">
                  <div class="center mt-4">
                    <button
                      class="btn btn-secondary"
                      style="border-radius: 30px; width: 150px; background-color: #000; opacity: 0.7"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      class="btn btn-primary"
                      style="border-radius: 30px; width: 150px;"
                      id="btnLogin"
                      on:click={getHrEmployees}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <label class="mt-3" style="color: red">
                {status}
              </label>
              <div class="d-flex" style="align-items: flex-end; height: 30%">
                <label> Trouble in login or need support? </label>
                <a class="ms-3" href={"#"}>
                  <i class="bi bi-telephone"></i>
                  +91 9356007569
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .navbar {
    /* background-color: #fff; */
    /* padding: 0 15px; */
    /* border: 1px solid red; */
  }

  .font1 {
    font-family: "Open sans";
    font-size: 14px;
    font-weight: 800;
  }

  .offcanvas i {
    font-size: 20px;
  }

  .offcanvas-body img {
    width: 22px;
  }

  .offcanvas {
    font-family: "Open sans";
    font-weight: 600;
  }

  .vrow:hover {
    cursor: pointer;
    background-color: #d5f5e3;
  }

  .header1 {
    font-family: "Open sans";
    font-size: 40px;
    font-weight: 300;
  }

  .logo1 {
    font-family: "Secular one";
    font-size: 24px;
    color: #1f618d;
  }

  .nav2 {
    justify-content: space-around;
    display: flex;
    width: 560px;
    margin-left: 10rem;
    /* border:1px solid red;
    border-radius: 20px;
    background-color: rgba(212, 202, 202, 0.674); */
    
  }
  .nav2 li a {
    font-size: 16px;
    color: #1267a0;
    font-family: "Open sans";
    font-weight: 500;
    transition: all 0.3s;
  }

  .nav2 li a:hover {
    color: lightgreen;
    scale: 1.1;
  }

  .logox-img {
    width: 64px;
  }

  /* .borderx{
    border: 1px solid red;
  } */

  .nav-main{
    margin: 0 2rem;
    /* border-radius: 15px; */
  }

  /* btn */
  .log-btn{
    padding:  6px 1.6rem;
    border-radius: 20px;
    border: none;
    background-color: purple;
    color: white;
  }

  .register-btn{
    padding:  5px 1rem;
    border: none;
    background-color: #1f618d;
    border-radius: 20px;
    color: white;
    margin-right: 2rem;
  }
</style>
