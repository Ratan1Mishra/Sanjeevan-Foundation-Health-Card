import { c as create_ssr_component, a as subscribe, o as onDestroy, e as each, b as add_attribute, d as escape, n as null_to_empty } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import "moment";
let menus = [
  { id: 2, label: "Administrator", url: "/admin", icon: "../images/admin.png", submenus: [
    { id: 2.2, label: "Platform configurations", url: "/plat-conf", icon: "../images/config.png", submenus: [] },
    { id: 2.5, label: "Registration", url: "/registration", icon: "../images/register.png", submenus: [] },
    { id: 2.7, label: "Back", url: "#", icon: "../images/back.png", submenus: [] }
  ] },
  {
    id: 3,
    label: "Facility management",
    url: "/admin",
    icon: "../images/building.png",
    submenus: [
      { id: 3, label: "Building & premises", url: "/bldgs", icon: "../images/floor.png", submenus: [] },
      { id: 3.1, label: "Floors / levels", url: "/floors", icon: "../images/floor.png", submenus: [] },
      { id: 3.2, label: "Wards / rooms", url: "/wards", icon: "../images/ward.png", submenus: [] },
      { id: 3.3, label: "Cabins", url: "/cabins", icon: "../images/cabin.png", submenus: [] },
      { id: 3.8, label: "Back", url: "/", icon: "../images/back.png", submenus: [] }
    ]
  },
  { id: 4, label: "Human resource management", url: "/admin", icon: "../images/people.png", submenus: [
    { id: 4.1, label: "Employees", url: "/emp-reg", icon: "../images/admin.png", submenus: [] },
    { id: 4.2, label: "Departments", url: "/dept", icon: "../images/dept.png", submenus: [] },
    { id: 4.3, label: "Roles & responsibilities", url: "/roles", icon: "../images/roles.png", submenus: [] },
    { id: 4.4, label: "Job descriptions", url: "/job-desc", icon: "../images/jobs.png", submenus: [] },
    { id: 4.41, label: "Common masters", url: "/common-masters", icon: "../images/jobs.png", submenus: [] },
    { id: 4.5, label: "Profiles", url: "/emp-profiles", icon: "../images/profile.png", submenus: [] },
    { id: 4.7, label: "Shift master", url: "/shift-master", icon: "../images/shifts.png", submenus: [] },
    { id: 4.8, label: "Employee roster", url: "/roster", icon: "../images/roster.png", submenus: [] },
    { id: 4.9, label: "Attendance management", url: "/att-mgmt", icon: "../images/att.png", submenus: [] },
    { id: 4.1, label: "Holidays", url: "/holidays", icon: "../images/holiday.png", submenus: [] },
    { id: 4.11, label: "Employee separation", url: "/emp-sep", icon: "../images/separate.png", submenus: [] },
    { id: 4.16, label: "Back", url: "#", icon: "../images/back.png", submenus: [] }
  ] },
  { id: 7, label: "Patients management", url: "/admin", icon: "../images/patient.png", submenus: [
    { id: 7.1, label: "Patients registration", url: "/patient-reg", submenus: [] }
  ] }
];
let userInfo = writable({});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.font1.svelte-1ip5hpr.svelte-1ip5hpr{font-family:"Open sans";font-size:14px;font-weight:800}.offcanvas.svelte-1ip5hpr i.svelte-1ip5hpr{font-size:20px}.offcanvas-body.svelte-1ip5hpr img.svelte-1ip5hpr{width:22px}.offcanvas.svelte-1ip5hpr.svelte-1ip5hpr{font-family:"Open sans";font-weight:600}.vrow.svelte-1ip5hpr.svelte-1ip5hpr:hover{cursor:pointer;background-color:#d5f5e3}.header1.svelte-1ip5hpr.svelte-1ip5hpr{font-family:"Open sans";font-size:40px;font-weight:300}.logo1.svelte-1ip5hpr.svelte-1ip5hpr{font-family:"Secular one";font-size:24px;color:#1f618d}.nav2.svelte-1ip5hpr.svelte-1ip5hpr{justify-content:space-around;display:flex;width:560px;margin-left:10rem}.nav2.svelte-1ip5hpr li a.svelte-1ip5hpr{font-size:16px;color:#1267a0;font-family:"Open sans";font-weight:500;transition:all 0.3s}.nav2.svelte-1ip5hpr li a.svelte-1ip5hpr:hover{color:lightgreen;scale:1.1}.logox-img.svelte-1ip5hpr.svelte-1ip5hpr{width:64px}.nav-main.svelte-1ip5hpr.svelte-1ip5hpr{margin:0 2rem}.log-btn.svelte-1ip5hpr.svelte-1ip5hpr{padding:6px 1.6rem;border-radius:20px;border:none;background-color:purple;color:white}.register-btn.svelte-1ip5hpr.svelte-1ip5hpr{padding:5px 1rem;border:none;background-color:#1f618d;border-radius:20px;color:white;margin-right:2rem}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userInfo, $$unsubscribe_userInfo;
  $$unsubscribe_userInfo = subscribe(userInfo, (value) => $userInfo = value);
  let current_menus = menus;
  let offcanvasVal = "";
  let hrEmployees = {};
  let status = "";
  let errorObj = {};
  onDestroy(() => {
  });
  $$result.css.add(css);
  {
    offcanvasVal = "";
  }
  $$unsubscribe_userInfo();
  return `<div class="container-fluid p-0 a"><script>import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap"; // Import Bootstrap JavaScript for components
  <\/script>

  <nav class="navbar nav-main navbar-expand-lg borderx svelte-1ip5hpr"><img class="logox-img svelte-1ip5hpr" src="../images/logox.png" alt="logo">
    <a class="navbar-brand" href="#"><h1 class="logo1 svelte-1ip5hpr">Sanjeevan Foundation</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse " id="navbarNav"><ul class="navbar-nav nav2  svelte-1ip5hpr"><li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">Home</a></li>
        
        <li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">SAAD Card</a></li>
        <li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">Events</a></li>
        <li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">Members</a></li>
        <li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">T &amp; C</a></li>
        <li class="nav-item"><a class="nav-link svelte-1ip5hpr" href="#">Contact</a></li></ul></div>
    <button class="register-btn svelte-1ip5hpr">Register</button>
    

    <div>${Object.keys($userInfo).length > 0 ? `<button class="btn btn-clear btn-lg" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"><i class="bi bi-list"></i></button>` : ``}</div>
    <div class="log-2">${Object.keys($userInfo).length === 0 ? `<div class="right"><button class="log-btn btn btn-secondary svelte-1ip5hpr" data-bs-toggle="modal" data-bs-target="#d1">
            Login
          </button></div>` : ``}
      ${Object.keys($userInfo).length > 0 ? `<div class="right"><label class="me-3 user">Hi, Manish </label>
          <button class="btn btn-outline-primary"><i class="bi bi-box-arrow-left"></i>
            Logout
          </button></div>` : ``}</div></nav>
  ${slots.default ? slots.default({}) : ``}
  <div class="offcanvas offcanvas-start svelte-1ip5hpr" tabindex="-1" id="offcanvas"><div class="offcanvas-header"><img style="height: 30px" src="../images/logo.png" alt="img">
      <button class="btn-close" aria-label="Close" data-bs-dismiss="offcanvas"></button></div>
    <div class="offcanvas-body svelte-1ip5hpr">${each(current_menus, (menu) => {
    return `<div><div class="row vrow py-1 px-3 svelte-1ip5hpr"${add_attribute("data-bs-dismiss", offcanvasVal, 0)}><div class="col-1">${menu.icon ? `<div>${menu.icon.startsWith("../images") ? `<img${add_attribute("src", menu.icon, 0)} class="svelte-1ip5hpr">` : ``}
                  ${!menu.icon.startsWith("../images") ? `<i class="${escape(null_to_empty(menu.icon), true) + " svelte-1ip5hpr"}"></i>` : ``}
                </div>` : ``}</div>
            <div class="col-10"><label>${escape(menu.label)}</label>
            </div></div>
        </div>`;
  })}</div></div>
  <div class="modal fade" id="d1" tabindex="-1"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body p-0"><div class="row"><div class="col-6"><img style="width: 100%" src="images/login.jpeg" alt="img"></div>
            <div class="p-5 col-6"><h1 class="header1 svelte-1ip5hpr">Start your journey</h1>
              <h4>Connect to most powerful platform</h4>
              <div class="row mt-5"><div class="col-12"><label class="form-label">Username<span class="ms-1">*</span></label>
                  <input class="form-control" name="username" type="text"${add_attribute("value", hrEmployees.username, 0)}>
                  ${Object.keys(errorObj).includes("username") ? `<label style="color: red">${escape(errorObj["username"])}</label>` : ``}</div>
                <div class="col-12"><label class="form-label">Password<span class="ms-1">*</span></label>
                  <input class="mb-4 form-control" name="password" type="password"${add_attribute("value", hrEmployees.password, 0)}>
                  ${Object.keys(errorObj).includes("password") ? `<label style="color: red">${escape(errorObj["password"])}</label>` : ``}</div>
                <div class="col-12"><a class="mt-4" data-bs-dismiss="modal"${add_attribute("href", "#", 0)}>Forgot password?
                  </a></div>
                <div class="col-12"><div class="center mt-4"><button class="btn btn-secondary" style="border-radius: 30px; width: 150px; background-color: #000; opacity: 0.7" data-bs-dismiss="modal">Close
                    </button>
                    <button class="btn btn-primary" style="border-radius: 30px; width: 150px;" id="btnLogin">Login
                    </button></div></div></div>
              <label class="mt-3" style="color: red">${escape(status)}</label>
              <div class="d-flex" style="align-items: flex-end; height: 30%"><label>Trouble in login or need support? </label>
                <a class="ms-3"${add_attribute("href", "#", 0)}><i class="bi bi-telephone"></i>
                  +91 9356007569
                </a></div></div></div></div></div></div></div>
</div>`;
});
export {
  Layout as default
};
