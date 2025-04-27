<script>
  let state = "";
  let city = "";
  let pincode = "";
  let hospitalName = "";

  const hospitalsInPune = [
    "Saveera Insititute of Medical Sciences Pvt LtdAnantapur",
    "MEDICOVER HOSPITAL (A UNIT OF ABHAYANJANEYA HEALTHCARE PVT LTD) - NELLORE",
    "KIMS ICON HOSPITAL",
    "GOWRI GOPAL HOSPITALS PVT. LTD. - Kurnool",
    "MEDICOVER HOSPITALS (UNIT OF SAHRUDAYA HEALTH CARE PRIVATE LIMITED) - KAKINADA",
    "KIMS HOSPITAL KURNOOL PRIVATE LIMITED - KURNOOL",
    "Noble Hospital",
    "Poona Hospital and Research Centre",
    "Sancheti Hospital",
    "Inamdar Multispeciality Hospital",
    "KEM Hospital",
    "Joshi Hospital",
    "Shashwat Hospital",
    "Apollo Spectra Hospitals",
    "Lokmanya Hospital",
  ];

  const resetForm = () => {
    state = "";
    city = "";
    pincode = "";
    hospitalName = "";
  };

  const submitForm = () => {
    alert("Form submitted!");
  };
  import Footer from "../components/footer.svelte";
</script>

<div class="saad-card">
  <div class="container">
    <div class="row">
      <div class="text-section">
        <h5><span class="sad-card">SAAD</span> CARD</h5>
        <h1>What is <span class="sad-card">SAAD</span> Card?</h1>
        <p>
          The SAAD Card typically refers to a government or non-government
          initiative that provides specific benefits to cardholders. These can
          include discounts, health care services, or welfare programs,
          depending on the region and organization offering the card. The SAAD
          card might focus on assisting underprivileged or special groups such
          as senior citizens, low-income families, or people with disabilities,
          aiming to give them easier access to services like healthcare,
          financial aid, or food assistance.
        </p>
        <p>
          If you're referring to a specific "SAAD Card" article related to a
          particular region, organization, or program, it would be best to
          provide more context so I can help you with precise information.
        </p>
        <a href="#" class="buy-button">Buy Online</a>
      </div>
      <div class="image-section">
        <img src="../images/saad3.jpg" alt="saad Image" />
      </div>
    </div>
  </div>
  <!-- SAAD CARD -->
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
          hospital: .</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >AYUSH treatment refers to alternative medicine systems such as
          Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy. Trusted
          by thousands of people around the world, these traditional health and
          wellness treatments are cost-effective and have negligible side
          effects. .</span
        >
      </div>
      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">12 A & 80 G Benefit for Income Tax.</span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >15 -20% Discount on Ayurvedic & Other medicines.</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Road Ambulance - 5000 Ayush upto Sum insured..</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Annual health checkups can help you monitor your overall health and
          well-being, establish a baseline for various parameters, and reduce
          future healthcare costs. We offer you this facility once a year.</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >Free Immunity Boosting " Kadha" For One time.</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line"
          >OPD coverage can include a variety of services, such as preventive
          health check-ups, minor procedures, physiotherapy, and alternative
          therapies. The OPD benefit ranges upto an amount of Rs 2500 anually.</span
        >
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">5 Lakhs Accidental Coverage. </span>
      </div>

      <div class="detail-row">
        <span class="star">★</span>
        <span class="detail-line">1 Night stay at Resorts.</span>
      </div>
    </div>
  </div>
  <h2 class="hos-list">Hospital List</h2>
  <div class="form-container">
    <div class="form-group">
      <label for="state">State</label>
      <select bind:value={state} id="state">
        <option value="" disabled selected>-- Select --</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="West Bangal">West Bangal</option>
        <option value="Bihar">Bihar</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Utter Pradesh">Utter Pradesh</option>
        <option value="Hariyana">Hariyana</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Hydrabad">Hydrabad</option>
        <option value="Punjab">Punjab</option>
        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
        <!-- Add other states if needed -->
      </select>
    </div>

    <div class="form-group">
      <label for="city">City</label>
      <select bind:value={city} id="city">
        <option value="" disabled selected>-- Select --</option>
        <option value="Pune">Pune</option>
        <option value="Nasik">Nasik</option>
        <option value="Lonawala">Lonawala</option>
        <option value="Khandala">khandala</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Lakhnaow">Lakhnaow</option>
        <option value="Nagpur">Nagpur</option>
        <!-- Add other cities if needed -->
      </select>
    </div>

    <div class="form-group">
      <label for="pincode">Pincode</label>
      <input
        bind:value={pincode}
        type="text"
        id="pincode"
        placeholder="Pincode"
      />
    </div>

    <div class="form-group">
      <label for="hospitalName">Hospital Name</label>
      <select bind:value={hospitalName} id="hospitalName">
        <option value="" disabled selected>Search by Hospital Name</option>
        {#each hospitalsInPune as hospital}
          <option value={hospital}>{hospital}</option>
        {/each}
      </select>
    </div>

    <div class="buttons">
      <button on:click={submitForm}>Submit</button>
      <button class="reset-btn" on:click={resetForm}>Reset</button>
    </div>
  </div>
  <Footer />
</div>

<style>
  .sad-card {
    color: brown;
    font-weight: bold;
  }
  .saad-card {
    background-image: url("../images/theme2.jpg");
    padding: 3px 0;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 40px auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: fadeIn 1.5s ease-in-out;
  }

  .image-section {
    flex: 1;
    min-width: 300px;
    overflow: hidden;
    animation: slideInLeft 1s ease-in-out;
  }

  .image-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .image-section img:hover {
    transform: scale(1.05);
  }

  .text-section {
    flex: 2;
    padding: 30px;
    max-width: 600px;
    animation: slideInRight 1s ease-in-out;
  }

  .text-section h5 {
    color: #0056b3;
    margin-bottom: 10px;
    font-size: 18px;
    animation: textFadeIn 2s ease-in-out;
    font-family: "Secular one";
    color: #1f618d;
  }

  .text-section h1 {
    font-size: 28px;
    margin-bottom: 20px;
    animation: textFadeIn 2.5s ease-in-out;
    font-family: "opan sans";
    color: #1f618d;
  }

  .text-section p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
    animation: textFadeIn 3s ease-in-out;
    font-family: "opan sans";
  }

  .buy-button {
    display: inline-block;
    background-color: #0056b3;
    color: white;
    padding: 12px 24px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    animation: buttonPulse 2s infinite;
  }

  .buy-button:hover {
    transform: scale(1.1);
    background-color: #003d80;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes textFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes buttonPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .text-section {
      padding: 20px;
    }

    .image-section img {
      width: 100%;
      height: auto;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    /* margin: 40px auto; */
    background-color: rgb(237, 255, 237);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    overflow: hidden;
    animation: fadeIn 1.5s ease-in-out;
  }

  .image-section {
    flex: 1;
    min-width: 300px;
    overflow: hidden;
    animation: slideInLeft 1s ease-in-out;
  }

  .image-section img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
  }

  .image-section img:hover {
    transform: scale(1.05);
  }

  .text-section {
    flex: 2;
    padding: 30px;
    max-width: 600px;
    animation: slideInRight 1s ease-in-out;
  }

  .text-section h5 {
    color: #0056b3;
    margin-bottom: 10px;
    font-size: 18px;
    animation: textFadeIn 2s ease-in-out;
  }

  .text-section h1 {
    font-size: 28px;
    margin-bottom: 20px;
    animation: textFadeIn 2.5s ease-in-out;
  }

  .text-section p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    animation: textFadeIn 3s ease-in-out;
  }

  .buy-button {
    display: inline-block;
    background-color: #0056b3;
    color: white;
    padding: 12px 24px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    animation: buttonPulse 2s infinite;
  }

  .buy-button:hover {
    transform: scale(1.1);
    background-color: #003d80;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes textFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes buttonPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .text-section {
      padding: 20px;
    }

    .image-section img {
      width: 100%;
      height: auto;
    }
  }
  /* Benefit Card Styles */
  /* General Styles - Desktop view remains unchanged */
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

  /* hospital */
  .form-container {
    background-color: rgb(237, 255, 237);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: "opan sans";
  }
  .hos-list {
    font-family: "opan sans";
    letter-spacing: 3px;
    font-weight: 500;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background-color: #6a1b9a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #4a148c;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .reset-btn {
    background-color: #f44336;
  }

  .reset-btn:hover {
    background-color: #d32f2f;
  }

  h2 {
    text-align: center;
    color: #4a148c;
  }
</style>
