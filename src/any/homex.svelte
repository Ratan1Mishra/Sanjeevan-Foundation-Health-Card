<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Footer from "../components/footer.svelte";
  
    import { goto } from "$app/navigation";
  
    const carousel = [
      "/images/home3.jpg",
      "/images/home4.jpg",
      "/images/home5.jpg",
    ];
  
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % carousel.length;
    }, 5000);
  
    onMount(() => {});
  
    // register function
  
    function navigateToRegister() {
      goto("/register");
    }
  </script>
  
  <div class="p-0">
    <div class="row white-bg p-5">
      <div class="col-5">
        <h1 class="title mt-5" style="color: #2E86C1">
          <span style="font-weight: 700">Health</span> For You And Your Loved Ones
        </h1>
        <h1 class="font-14">
          Live your life with atmost protection, while knowing that you and your
          loved ones are protected by us.
        </h1>
        <div class="d-flex mt-5 features-container">
          <i class="bi bi-capsule-pill features">
            <p>Best medical facilities</p>
          </i>
          <i class="bi bi-envelope features">
            <p>Real-time notifications</p>
          </i>
          <i class="bi bi-diagram-3 features">
            <p>Process automations</p>
          </i>
          <i class="bi bi-cpu features">
            <p>Research & Analytics</p>
          </i>
          <i class="bi bi-people features">
            <p>Greater user experience</p>
          </i>
        </div>
        <div class="mt-3 flexbox-center">
          <button class="btn btn1" on:click={navigateToRegister}>
            Register
          </button>
          <button class="btn btn2"> Book an appointment </button>
        </div>
      </div>
      <div class="right col-7 hero-im">
        {#each [carousel[index]] as x, indx}
          <img
            class="side-img"
            style=" border-radius: 10px; margin-top: 3rem"
            transition:fade
            src={x}
          />
        {/each}
      </div>
    </div>
  
    <!-- <div class='p-0'>
              <img style='width: 100%; height: 650px' src='../images/home2.png' alt='img'>
          </div>  -->
    <section class="features2">
      <div class="feature-card">
        <!-- <img src="./public/assets/donation.jpg" alt="Donation">   -->
        <img class="card-img" src="../images/donation.jpg" alt="Donation Image" />
  
        <h3>Make Donation</h3>
        <p>Help today because tomorrow you may be the one who needs helping!</p>
        <a href="#" class="read-more">Read More</a>
      </div>
      <div class="feature-card">
        <img class="card-img" src="../images/Fundraising.jpg" alt="Fundraising" />
        <h3>Fundraising</h3>
        <p>Help today because tomorrow you may be the one who needs helping!</p>
        <a href="#" class="read-more">Read More</a>
      </div>
      <div class="feature-card">
        <img class="card-img" src="../images/Volunteer.jpg" alt="Volunteer" />
        <h3>Become A Volunteer</h3>
        <p>Help today because tomorrow you may be the one who needs helping!</p>
        <a href="#" class="read-more">Read More</a>
      </div>
    </section>
    <!-- plans -->
    <div class="container">
      <div class="row">
        <div class="plans-container">
          <h1>Get Star Health Card plans for you and your loved ones</h1>
          <p>
            Health plans crafted to help you avoid medical debt and lead a healthy
            lifestyle
          </p>
          <div class="plan-cards">
            <div class="card">
              <h3>Health Card for Individuals</h3>
              <p><strong>IRDAI UIN : SHAHLIP22028V072122</strong></p>
              <ul>
                <li>Coverage for unexpected medical expenses</li>
                <li>
                  Tax deduction benefits Coverage for pre-and post-hospitalisation
                  costs
                </li>
                <li>
                  Holistic product with holistic benefits - Star Comprehensive
                  Health Card Policy
                </li>
                <li>Stress-free retirement</li>
              </ul>
              <div class="image-container">
                <img src="../images/indvi.jpg" alt="Individual Insurance" />
              </div>
            </div>
            <div class="card">
              <h3>Health Card for Your Family Member</h3>
              <p><strong>IRDAI UIN : SHAHLIP22199V062122</strong></p>
              <ul>
                <li>Coverage for entire family</li>
                <li>
                  Affordable premiums that don’t break the bank Maternity and New
                  Born coverage
                </li>
                <li>Well-being and financial safety ensured</li>
                <li>Wealth of benefits to make those golden years count.</li>
                <li>Stress-free retirement</li>
              </ul>
              <div class="image-container">
                <img src="../images/family.jpg" alt="Family Insurance" />
              </div>
            </div>
            <div class="card">
              <h3>Health Card for Senior Citizens</h3>
              <p><strong>IRDAI UIN : SHAHLIP22199V062122</strong></p>
              <ul>
                <li>Well-being and financial safety ensured</li>
                <li>Stress-free retirement</li>
                <li>Coverage for pre-existing diseases</li>
                <li>Stress-free retirement</li>
                <li>
                  Wealth of benefits to make those golden years count - Senior
                  Citizens Red Carpet Health Card Policy
                </li>
              </ul>
              <div class="image-container">
                <img src="../images/oldp.avif" alt="Senior Insurance" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Review Section  -->
    <div class="review-container">
      <header class="review-header">
        <h2>Some Reviews</h2>
        <p>Of Our Members</p>
      </header>
      <div class="reviews">
        <div class="review">
          <img src="../images/own1.jpg" alt="Paulo Hubert" />
          <div class="review-info">
            <p class="name">Manish Bhavasar</p>
            <p class="location">Pune, India</p>
          </div>
        </div>
        <div class="review">
          <img src="../images/own2.jpg" alt="Laurence Vendetta" />
          <div class="review-info">
            <p class="name">Ratan Mishra</p>
            <p class="location">Bihar, India</p>
          </div>
        </div>
        <div class="review">
          <img src="../images/own3.jpg" alt="Cassandra Raul" />
          <div class="review-info">
            <p class="name">Nilesh Bhavasar</p>
            <p class="location">Nasik, India</p>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <p class="quote">
          I recently had to bring my child to ProHealth for a minor injury, and I
          was so impressed with the care he received. The pediatrician was great
          with him and made him feel at ease, and the entire staff was kind and
          attentive.
        </p>
        <div class="stars">★★★★★</div>
      </div>
    </div>

    <!-- extra -->
    <div class="hero-img">
      {#each [carousel[index]] as x, indx}
        <img class="side-img" transition:fade src={x} />
      {/each}
    </div>
    <Footer />
  </div>
  
  <style>
    /* start */
    /* General Styles */
    .xpedio-box {
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
  
    .title {
      font-size: 50px;
      font-family: "Open Sans";
      font-weight: 300;
    }
  
    .side-img {
      width: 60%;
    }
  
    .title2 {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 300;
    }
  
    .features {
      font-size: 34px;
      text-align: center;
      max-width: 90px;
    }
  
    .features p {
      font-size: 12px;
      font-style: normal;
    }
  
    .fade-in-image {
      transition: all 1s;
    }
  
    .fade-in-image:hover {
      opacity: 100%;
      transition: opacity 1s;
    }
  
    .btn1 {
      padding: 4px 15px;
      width: 200px;
      background-color: #8e44ad;
      color: #fff;
      border-radius: 20px;
      font-size: 16px;
    }
  
    .btn2 {
      background-color: #1f618d;
      padding: 4px 15px;
      width: 200px;
      color: #fff;
      border-radius: 20px;
      font-size: 16px;
    }
  
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .row {
        flex-direction: column;
        padding: 20px;
      }
  
      .col-7 {
        width: 100%;
        /* border: 1px solid blue; */
        margin-top: 2rem;
        margin-left: 1rem;
      }
  
      .col-5 {
        width: 100%;
      }
  
      .title {
        font-size: 32px;
        text-align: center;
      }
  
      .font-14 {
        font-size: 14px;
        text-align: center;
      }
  
      .features-container {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }
  
      .features {
        font-size: 28px;
        max-width: 70px;
      }
  
      .features p {
        font-size: 10px;
      }
  
      .right img {
        width: 100%;
        /* border: 1px solid red; */
        padding: 0;
  
        margin-top: 2rem;
        margin-right: 2.8rem;
      }
  
      .btn1,
      .btn2 {
        width: 100%;
        margin-bottom: 10px;
      }
  
      .flexbox-center {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  
    /* end */
  
    /* cards */
  
    .features2 {
      display: flex;
      justify-content: space-around;
      padding: 50px 20px;
      background-color: #fff;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      font-family: "Open sans";
  
      margin: 10rem 4rem;
    }
  
    .feature-card {
      text-align: center;
      padding: 20px;
      max-width: 300px;
      background-color: #fafafa;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;
    }
  
    .feature-card img {
      max-width: 100px;
      margin-bottom: 20px;
    }
  
    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #1f618d;
    }
  
    .feature-card p {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  
    .feature-card:hover {
      transform: translateY(-10px);
    }
  
    .read-more {
      text-decoration: none;
      color: purple;
      font-weight: bold;
    }
  
    .card-img {
      border-radius: 10%;
    }
  
    @media (max-width: 768px) {
      .features2 {
        flex-direction: column;
        align-items: center;
      }
  
      .feature-card {
        margin-bottom: 20px;
      }
    }
  
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* Review css */
    .review-container {
      max-width: 1200px;
      margin: 50px auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      font-family: "Open sans";
    }
  
    .review-header {
      background-color: #1f618d;
    }
  
    header h2 {
      font-size: 1.8rem;
      color: #fff;
      text-align: center;
      font-family: "Open sans";
    }
  
    header p {
      font-size: 1.2rem;
      color: #fff;
      text-align: center;
      margin-bottom: 30px;
      font-family: "Open sans";
    }
  
    .reviews {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      flex-wrap: wrap;
      padding: 20px;
    }
  
    .review {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 10px;
      text-align: center;
      flex-basis: 30%;
      transition: background-color 0.3s ease-in-out;
      min-width: 200px;
      max-width: 300px;
    }
    .review:hover {
      transform: translateY(-10px);
    }
  
    .review img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .review-info .name {
      font-weight: bold;
      color: #333;
      margin-top: 10px;
    }
  
    .review-info .location {
      color: #777;
      font-size: 0.9rem;
      margin-top: 5px;
    }
  
    .testimonial {
      margin-top: 30px;
      text-align: center;
      font-style: italic;
      padding: 20px;
    }
  
    .testimonial .quote {
      font-size: 1.2rem;
      color: #555;
      margin-bottom: 10px;
    }
  
    .stars {
      color: rgb(255, 217, 0);
      font-size: 1.5rem;
    }
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .reviews {
        flex-direction: column;
        align-items: center;
      }
  
      .review {
        width: 80%;
        margin-bottom: 20px;
      }
  
      header h2 {
        font-size: 1.8rem;
      }
  
      header p {
        font-size: 1rem;
      }
  
      .testimonial .quote {
        font-size: 1.1rem;
      }
    }
  
    @media (max-width: 576px) {
      .review {
        flex-basis: 100%;
      }
  
      .review img {
        width: 80px;
        height: 80px;
      }
  
      header h2 {
        font-size: 1.5rem;
      }
  
      header p {
        font-size: 0.9rem;
      }
  
      .testimonial .quote {
        font-size: 1rem;
      }
    }
    /* Plans css */
  
    .plans-container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 20px;
      text-align: center;
      font-family: "Open sans";
    }
  
    .plans-container h1 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #1f618d;
      animation: fadeInDown 1s ease-in-out;
    }
  
    .plans-container p {
      font-size: 18px;
      color: #666;
      margin-bottom: 40px;
      animation: fadeInUp 1s ease-in-out;
    }
  
    .plan-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
    }
  
    .card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 30%;
      text-align: left;
      transition: transform 0.3s ease;
      animation: fadeIn 1.5s ease-in-out;
    }
  
    .card:hover {
      transform: translateY(-10px);
    }
  
    .card h3 {
      font-size: 22px;
      color: #0056b3;
      margin-bottom: 15px;
    }
  
    .card p {
      font-size: 16px;
      color: #333;
      margin-bottom: 15px;
    }
  
    .card ul {
      list-style: none;
    }
  
    .card ul li {
      font-size: 16px;
      margin-bottom: 10px;
      position: relative;
      padding-left: 25px;
    }
  
    .card ul li::before {
      content: "\2713";
      color: #0056b3;
      position: absolute;
      left: 0;
      top: 0;
    }
  
    .image-container {
      text-align: center;
      margin-top: 20px;
      animation: fadeIn 2s ease-in-out;
    }
  
    .image-container img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      transition: transform 0.5s ease;
    }
  
    .image-container img:hover {
      transform: scale(1.05);
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @media (max-width: 992px) {
      .card {
        width: 45%;
      }
    }
  
    @media (max-width: 768px) {
      .plan-cards {
        flex-direction: column;
      }
  
      .card {
        width: 100%;
      }
    }
  </style>
  