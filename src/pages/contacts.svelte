<script>
   import Footer from "../components/footer.svelte";
</script>

<div class="contact-div">
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
            <p>sanjivanfoundation3@gmail.com</p>
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
    .contact-div{
        background-image: url("../images/theme2.jpg");
    }
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