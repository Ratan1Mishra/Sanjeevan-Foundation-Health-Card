<script>
  // Optional JavaScript can go here if needed
</script>

<div>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Mission Statement -->
        <div class="footer-mission">
          <h2>Sanjeevan Foundation</h2>
          <p>
            Empowering communities through healthcare, education, and
            sustainable development. Join us in making a difference.
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <h3>Quick Links</h3>
          <ul class="ul-footer">
            <li><a class="a-footer" href="/">Home</a></li>
            <li><a class="a-footer" href="#about-us">About Us</a></li>
            <li><a class="a-footer" href="#health-card">Health Card</a></li>
            <li><a class="a-footer" href="#contact-us">Contact Us</a></li>
            <li><a class="a-footer" href="#events">Events</a></li>
          </ul>
        </div>

        <!-- Social Media Icons -->
        <div class="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <p class="footer-para">&copy; 2024 Sanjeevan Foundation. All Rights Reserved.</p>
    </div>
  </footer>
</div>

<style>
  /* Footer Styling */
  .footer {
    background-color: #d0f0c0;
    padding: 4px 0;
    color: #ffffff;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    margin-top: 1rem;
  }

  /* Footer Top Section */
  .footer-top {
    display: flex;
    flex-wrap: nowrap; /* Keep horizontal layout on desktop */
    justify-content: space-around;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Mission Statement */
  .footer-mission {
    flex: 1 1 300px;
    margin-bottom: 30px;
  }

  .footer-mission h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    letter-spacing: 2px;
    color: #002d62;
    font-family: "Secular one";
  }

  .footer-mission p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #000;
  }

  /* Navigation Links */
  .footer-nav {
    flex: 1 1 200px;
    margin-bottom: 30px;
  }

  .footer-nav h3 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #002d62;
    font-family: "Secular one";
  }

  .footer-nav ul {
    list-style: none;
    padding: 0;
  }

  .footer-nav ul li {
    margin: 10px 0;
  }

  .footer-nav ul li a {
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    transition: color 0.3s ease-in-out;
  }

  .footer-nav ul li a:hover {
    color: #ffff;
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
  }

  /* Social Media Icons */
  .footer-social {
    flex: 1 1 200px;
    margin-bottom: 30px;
  }

  .footer-social h3 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #002d62;
    font-family: "Secular one";
  }

  .footer-social ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-social ul li {
    display: inline-block;
    margin: 0 10px;
  }

  .footer-social ul li a {
    color: #000;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;
  }

  .footer-social ul li a:hover {
    color: #ffd700;
    transform: scale(1.2);
  }

  /* Footer Bottom Section */
  .footer-bottom {
    background-color: #d0f0c0;
    margin-bottom: 0rem;
    border: 1px solid red;
  }

  .footer-bottom p {
    color: #000;
    font-size: 14px;
  }

  .footer-para {
    color: black;
    margin-left: 7rem;
  }

  /* Mobile Responsive Design */
  @media (max-width: 768px) {
    /* Footer Top */
    .footer-top {
      flex-direction: column; /* Stack sections vertically on mobile */
      align-items: center; /* Center-align items */
      text-align: center;
    }

    .footer-mission,
    .footer-nav,
    .footer-social {
      flex: 1 1 100%; /* Full width for each section */
      margin-bottom: 20px; /* Ensure spacing between sections */
    }

    .footer-mission h2,
    .footer-nav h3,
    .footer-social h3 {
      font-size: 1.8rem; /* Smaller font size for mobile */
    }

    .footer-mission p,
    .footer-nav ul li a {
      font-size: 1rem; /* Adjust paragraph and link sizes */
    }

    /* Adjust the padding for mobile */
    .footer {
      padding: 20px 10px;
    }

    /* Social Icons */
    .footer-social ul li {
      margin: 5px; /* Add spacing between social icons */
    }

    .footer-para {
      margin-left: 0; /* Center align footer text */
      font-size: 10px; /* Smaller text size for mobile */
    }
  }
</style>
