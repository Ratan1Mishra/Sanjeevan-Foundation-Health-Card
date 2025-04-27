<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Footer from "../components/footer.svelte";
  

  import { goto } from "$app/navigation";

  const carousel = [
    "/images/home3.jpg",
    "/images/home4.jpg",
    // "/images/home5.jpg",
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % carousel.length;
  }, 5000);

  onMount(() => {});

  function handleDonation(){
    goto("./donation")
  }
</script>

<div class="main-cont">
  <div id="carouselExampleAutoplaying" class="carousel slide hero-slide " data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../images/slider1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../images/slider5.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../images/slider3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Domation -->
  <div class="donation-cont gapx">
    <button  on:click={handleDonation} class="donation-btn"> <img class="donation-heart" src="../images/donationheart.jpg" alt="Donation Image"> </button>
  </div>

  <div class="about-cont gapx">
    <div class="content-wrapper">
      <!-- about -->
      <div class="about-right">
        <h2>About Us</h2>
        <h3>Sanjeevan Foundation</h3>
        <!-- Images -->
        
        <p>
          An ISO 9001:2015 Accredited, Sanjivan Foundation, Pune is a registered
          Non-Government Organization (NGO wide no. F-378/1960 under Societies
          Act 1860, and also U/S No. 551/2008 of the B.P.T. ACT 1950. It was
          established on 31st of March, 2008 at Pune, Maharashtra.
        </p>
        <p>
          Sanjivan Foundation is working in a wide spectrum of activities and
          sectors pertaining to Social Work, Medical and Integrated Healthcare,
          Holistic Health and AYUSH Modalities, Skills & Education, Trainings,
          Environment, Women Rights, Self Help Groups, Nutrition, National Human
          Rights Commission and National Consumer Protection. The organization
          is working hard on an Empowerment of Individual and Youth of the
          country since its establishment. Sanjivan Foundation is founded by
          Founder President Dr. Sunilkumar H. Thigale along with other
          founder trustees.
        </p>
        <div class="about-img">
          <div class="about-imgx">
            <img class="about-images" src="../images/fonder.jpg" alt="Founder Image">
            <h4 class="head3">Founder</h4>
            <p>Dr. Sunilkumar H. Thigale</p>
          </div>
          <div class="about-imgx">
            <img class="about-images" src="../images/trustee.jpg" alt="Trustee Image">
            <h4 class="head3">Trustee</h4>
            <p>Dr. Hema S. Thigale</p>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- SAAD Card -->
  <h2>Benefits of <span class="sad-card">SAAD</span> Card</h2>

  <div class="card">
    <div class="card-image">
      <img src="../images/saad3.jpg" alt="Card Image" />
    </div>
    <div class="card-details">
      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Domiciliary hospitalization is a health insurance benefit that allows
          a patient to receive medical treatment at home, rather than in a
          hospital: .</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >AYUSH treatment refers to alternative medicine systems such as
          Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy. Trusted
          by thousands of people around the world, these traditional health and
          wellness treatments are cost-effective and have negligible side
          effects. .</span>
      </div>
      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">12 A & 80 G Benefit for Income Tax.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">15 -20% Discount on Ayurvedic & Other medicines.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Road Ambulance - 5000 Ayush upto Sum insured..</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Annual health checkups can help you monitor your overall health and
          well-being, establish a baseline for various parameters, and reduce
          future healthcare costs. We offer you this facility once a year.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">Free Immunity Boosting " Kadha" For One time.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >OPD coverage can include a variety of services, such as preventive
          health check-ups, minor procedures, physiotherapy, and alternative
          therapies. The OPD benefit ranges upto an amount of Rs 2500 anually.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">5 Lakhs Accidental Coverage.
        </span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">1 Night stay at Resorts.</span>
      </div>
    </div>
  </div>
  <!-- Gallery Section -->
  <section class="event-section">
    <div class="container">
        <h1 class="section-title">Our Gallery</h1>

        <div class="event-block">
            <h2 class="event-title">
                Various images of Sanjeevan Foundation
            </h2>
            <div class="event-gallery">
                <div class="image-wrapper">
                    <img
                        src="../images/cov2.jpg"
                        alt="Workshop Image 1"
                        class="event-image"
                    />
                </div>
                <div class="image-wrapper">
                    <img
                        src="../images/cov4.jpg"
                        alt="Workshop Image 2"
                        class="event-image"
                    />
                </div>
                <div class="image-wrapper">
                    <img
                        src="../images/cov5.jpg"
                        alt="Workshop Image 3"
                        class="event-image"
                    />
                </div>
            </div>
        </div>
        <div class="event-block">
            <div class="event-gallery">
                <div class="image-wrapper">
                    <img
                        src="../images/Work1.jpg"
                        alt="Meeting Image 1"
                        class="event-image"
                    />
                </div>
                <div class="image-wrapper">
                    <img
                        src="../images/work2.jpg"
                        alt="Meeting Image 2"
                        class="event-image"
                    />
                </div>
                <div class="image-wrapper">
                    <img
                        src="../images/work4.jpg"
                        alt="Meeting Image 3"
                        class="event-image"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Contect Section -->
<main>
  <section class="contact-section">
      <div class="container">
          <h2>Contact Us</h2>
          <div class="contact-content">
              <div class="contact-info">
                  <h3>Get in Touch</h3>
                  <p><strong>Address:</strong> 5,Tarangan Society,MIT College Squre,Paud Road,Pune-411038,Maharastra</p>
                  <p><strong>Phone:</strong> +91 93075 49921</p>
                  <p><strong>Email:</strong> cardsaad@gmail.com</p>
                  <p><strong>Follow Us:</strong></p>
                  <div class="social-links">
                      <a href="#" aria-label="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" aria-label="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
                      <a href="#" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                      <a href="#" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div class="contact-form">
                  <form action="#" method="post">
                      <div class="form-group">
                          <label for="name">Name<span>*</span></label>
                          <input type="text" id="name" name="name" required placeholder="Your Name">
                      </div>
                      <div class="form-group">
                          <label for="email">Email<span>*</span></label>
                          <input type="email" id="email" name="email" required placeholder="Your Email">
                      </div>
                      <div class="form-group">
                          <label for="subject">Subject</label>
                          <input type="text" id="subject" name="subject" placeholder="Subject">
                      </div>
                      <div class="form-group">
                          <label for="message">Message<span>*</span></label>
                          <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
                      </div>
                      <button type="submit" class="btn btn-success">Send Message</button>
                  </form>
              </div>
          </div>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4127028366665!2d73.81271137496265!3d18.51024318258136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbc7bab0ec7%3A0xfd338fe9e3cc29ca!2z4Kqw4Kq-4KqcIOCqruCri-Cqn-CqsOCrjeCquA!5e0!3m2!1sgu!2sin!4v1728295641408!5m2!1sgu!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
  </section>
</main>
  <h1 style="text-align: center; color: #1F618D; margin-top: 40px;">Find Us Here</h1>
  <div class="contact-container">
      <div class="contact-box">
          <div class="icon">📞</div>
          <h3>Phone</h3>
          <p>+91 93075 49921</p>
      </div>
      <div class="contact-box">
          <div class="icon">✉️</div>
          <h3>Email</h3>
          <p>cardsaad@gmail.com</p>
      </div>
      <div class="contact-box">
          <div class="icon">📍</div>
          <h3>Location</h3>
          <p>5,Tarangan Society,MIT College Squre,Paud Road,Pune-411038,Maharastra</p>
      </div>
  </div>
  <Footer/>
</div>

<style>
  .sad-card{
    color: brown;
    font-weight: bold;
  }
.donation-cont {
    background-color: transparent; /* Makes the background of the container transparent */
    display: flex;
    justify-content: center;
    margin: 6rem 0;
  }

  .donation-btn {
    border: none;
    background-color: transparent; /* Makes the button background transparent */
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.8s;
  }
  .donation-btn:hover{
    transform:  scale(1.1);
  }

  .donation-heart {
    width: 240px; /* Adjust the size as needed */
    height: auto;
    border-radius: 50%;
  }

  /* Optional: You can add hover effects if needed */
  .donation-btn:hover .donation-heart {
    opacity: 0.8; /* Adds a slight hover effect */
  }
.main-cont {
    /* border:1px solid red; */
    width: 100%;
    background-image: url("../images/theme2.jpg");

    /* padding: 2rem; */
  }

.about-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px; /* Reduced gap between images and text */
  }

  .about-img img {
    max-width: 40%;
    margin-top: 3rem;
    margin-left: 10rem;
    height: auto;
    border: 2px solid #ddd; /* Optional: Adds a border around images */
  }

  .about-img p, .about-img h4 {
    margin-top: 20px; /* Reduced space between image and text */
    text-align: center;
   
  }

  .head3{
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
}

  /* Responsive Design */
  @media (min-width: 768px) {
    .about-img {
      flex-direction: row;
      justify-content: space-around;
      gap: 10px; /* A little more gap for larger screens */
    }
    /* .about-img > div {
      flex: 1;
      text-align: center;
    } */
  }
  .hero-slide{
    /* border: 2px solid red; */
    /* margin-top: 1.2rem; */
    border-radius: 15px;
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.432); */
  }

.carousel-item img {
    height: 90vh; 
    object-fit: cover; 
    border-radius: 13px;
   
   
  }
 

  .hero-img {
    display: flex;
    justify-content: center;
    width: 100%;
    
  }

  .side-img {
    width: 100%;

    border-radius: 10px;
  }

  .fade-in-image {
    transition: all 1s;
  }
  .fade-in-image:hover {
    opacity: 100%;
    transition: opacity 1s;
  }

  /* Donation-css */
  /* .donation-cont {
   
    margin-top: 6rem;
    margin-bottom: 6rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .donation-heart{
  width:14%;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.426);
} */



  /* About */

  .about-cont {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 6rem;
  }

  .about-us {
    padding: 40px 20px;
    background-color: #e0f2fe;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-wrapper {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
    gap: 40px;
    max-width: 1150px;
    background-color: rgb(237, 255, 237);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    padding: 20px;
    position: relative;
    /* border: 1px solid red; */
  }

  .about-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about-right h2 {
    font-size: 1.8rem;
    text-align: center;
    color: #003c8f;

    margin-bottom: 10px;
    animation: fadeInRight 1.2s ease-in-out;
    font-family: "Open sans";
  }

  .about-right h3 {
    font-size: 1.6rem;
    text-align: center;
    color: #0074ff;
    margin-bottom: 20px;
    animation: fadeInRight 1.4s ease-in-out;
    font-family: "Open sans";
    margin-bottom: 2rem;
  }

  .about-right p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
    animation: fadeInUp 1.6s ease-in-out;
    font-family: "Open sans";
  }

  /* .badge-container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    } */

  /* .badge {
        background-color: #e0f2fe;
        padding: 10px 20px;
        border-radius: 30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-size: 1rem;
        color: #003c8f;
        animation: fadeInUp 1.8s ease-in-out;
    } */

  .doctor-overlay {
    position: absolute;
    right: 5%;
    bottom: -10%;
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    animation: fadeInScale 2s ease-in-out;
  }

  .doctor-img-sm {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1024px) {
    .content-wrapper {
      grid-template-columns: 1fr;
    }

    .doctor-overlay {
      bottom: -5%;
      right: 50%;
      transform: translateX(50%);
    }

    .doctor-img {
      max-width: 350px;
    }

    .about-right h2 {
      font-size: 2rem;
    }

    .about-right h3 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 768px) {
    .content-wrapper {
      padding: 20px;
    }

    .doctor-img {
      max-width: 300px;
    }

    .about-right h2 {
      font-size: 1.8rem;
    }

    .about-right h3 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .doctor-overlay {
      width: 100px;
      height: 100px;
    }

    .doctor-img-sm {
      width: 80px;
      height: 80px;
    }

    .about-right h2 {
      font-size: 1.5rem;
    }

    .about-right h3 {
      font-size: 1.1rem;
    }
  }
  /* SAAD Css */
  h2 {
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  color: #1f618d;
}

.detail-line {
  font-size: 15px;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  background-color: rgb(237, 255, 237);
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin: auto;
  margin-top: 2rem;
}

.card-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
}

.card-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.card-details {
  flex: 2;
  padding-left: 20px;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.star {
  margin-right: 10px;
  font-size: 1.5rem;
}

/* Mobile View - Only changes for mobile screens */
@media screen and (max-width: 768px) {
  .card {
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    padding: 15px; 
    margin: 15px; 
    text-align: left; 
  }

  .card-image {
    padding: 0;
    margin-bottom: 15px; /* Add space between image and details */
    width: 100%;
  }

  .card-image img {
    max-width: 80%; /* Adjust size for mobile */
    margin: 0 auto;
  }

  .card-details {
    padding: 0;
    width: 100%;
  }

  .detail-row {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
  }

  .detail-line {
    font-size: 14px; 
    line-height: 1.5em; 
  }

  .star {
    font-size: 1.3rem;
  }
}

  /* Gallery Css */
  .container {
        max-width: 1200px;
        margin: 40px auto;
        padding: 20px;
        margin-top: 6rem;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 50px;
        color: #003366;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: "Secular one";
        margin-top: 7rem;
    }

    .event-block {
        margin-bottom: 50px;
    }

    .event-title {
        text-align: center;
        font-size: 2rem;
        color: #006699;
        margin-bottom: 20px;
        font-family: "Open sans";
    }

    .event-gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .image-wrapper {
        position: relative;
        overflow: hidden;
        width: calc(33.333% - 20px);
        max-width: 300px;
        border-radius: 15px;
        perspective: 1000px;
        transition: transform 0.5s ease-in-out;
    }

    .event-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        transition:
            transform 0.6s ease,
            box-shadow 0.6s ease;
        border-radius: 15px;
    }

    .image-wrapper:hover .event-image {
        transform: translateY(-20px) rotateX(10deg);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .image-wrapper:hover {
        transform: scale(1.05);
    }

    @media (max-width: 992px) {
        .image-wrapper {
            width: calc(50% - 20px);
        }
    }

    @media (max-width: 768px) {
        .image-wrapper {
            width: 100%;
        }

        .event-image {
            height: 200px;
        }
    }

    @media (max-width: 576px) {
        .section-title {
            font-size: 1.8rem;
        }

        .event-title {
            font-size: 1.5rem;
        }

        .event-image {
            height: 180px;
        }
    }
    /* Contect US Css */
    .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 2rem 0;
    /* font-family: "Open sans"; */
}
.contact-section {
    padding: 4rem 0;
    /* background-color: #fff; */
    animation: fadeIn 1.5s ease-out;
}

.contact-section h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: #1F618D;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideIn 1s forwards;
    animation-delay: 0.5s;
    font-family: "Open sans";
}

.contact-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 1s forwards;
    animation-delay: 1s;
}

.contact-info, .contact-form {
    flex: 1 1 400px;
    background-color: rgb(237, 255, 237);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: "Open sans";
}

.contact-info:hover, .contact-form:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.contact-info h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 30px;
}

.contact-info p {
    margin-bottom: 0.75rem;
    font-size: 15px;
}

.social-links {
    margin-top: 1rem;
}

.social-links a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
    color: #18bc9c;
    transform: scale(1.2);
}

.contact-form form .form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.contact-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
}

.contact-form label span {
    color: red;
}

.contact-form input, 
.contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form input:focus, 
.contact-form textarea:focus {
    border-color: #18bc9c;
    outline: none;
    box-shadow: 0 0 5px rgba(24, 188, 156, 0.5);
}

.btn {
    display: inline-block;
    background-color: #18bc9c;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 1rem;
}

.btn:hover {
    background-color: #149b7e;
    transform: translateY(-3px);
}

.map {
    margin-top: 2rem;
    opacity: 0;
    transform: scale(0.95);
    animation: zoomIn 1s forwards;
    animation-delay: 1.5s;
}

.map iframe {
    width: 100%;
    height: 450px;
    border: 0;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.map iframe:hover {
    transform: scale(1.02);
}
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}
@media (max-width: 992px) {
    .contact-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .contact-section {
        padding: 2rem 0;
    }

    .contact-section h2 {
        font-size: 2rem;
    }

    .map iframe {
        height: 300px;
    }
}

@media (max-width: 480px) {
    .contact-section h2 {
        font-size: 1.8rem;
    }

    .btn {
        width: 100%;
        text-align: center;
    }

    .social-links a {
        font-size: 1.2rem;
        margin-right: 0.3rem;
    }
}

.contact-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    padding: 20px;
    flex-wrap: wrap; /* Ensures items wrap in small screens */
    max-width: 1200px;
}

.contact-box {
    flex: 1 1 300px; /* Flex to be responsive, minimum 300px wide */
    background-color: rgb(237, 255, 237);
    margin: 15px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-box:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.contact-box .icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #2a4365;
}

.contact-box h3 {
    font-size: 1.5rem;
    color: #2a4365;
    margin-bottom: 10px;
    font-family: "Open sans";
}

.contact-box p {
    font-size: 1rem;
    color: #4a5568;
    font-family: "Open sans";
}

/* Mobile View */
@media (max-width: 768px) {
    .contact-container {
        flex-direction: column;
        align-items: stretch;
    }

    .contact-box {
        margin: 10px auto;
        width: 90%; /* Makes the box full width on mobile */
    }

    .contact-box h3 {
        font-size: 1.25rem;
    }

    .contact-box p {
        font-size: 0.9rem;
    }

    .contact-box .icon {
        font-size: 36px;
    }
}
</style>
