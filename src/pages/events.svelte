<script>
  import Footer from "../components/footer.svelte";
</script>
<div class="event-div">
    <section class="event-section">
        <div class="container">
            <h1 class="section-title">Foundation Activities – At a Glance</h1>

            <div class="event-block">
                <h2 class="event-title">Consumer Protection Workshop</h2>
                <div class="event-gallery">
                    <div class="image-wrapper">
                        <img src="../images/Work1.jpg" alt="Workshop Image 1" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/work2.jpg" alt="Workshop Image 2" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/work3.jpg" alt="Workshop Image 3" class="event-image">
                    </div>
                </div>
            </div>

            <div class="event-block">
                <div class="event-gallery">
                    <div class="image-wrapper">
                        <img src="../images/work4.jpg" alt="Meeting Image 1" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/work5.jpg" alt="Meeting Image 2" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/work6.jpg" alt="Meeting Image 3" class="event-image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="event-section">
        <div class="container">
            <h1 class="section-title">Some other Activities of Sanjeevan Foundation </h1>

            <div class="event-block">
                <h2 class="event-title">Distribution actives for Police Personnel During covid-19</h2>
                <div class="event-gallery">
                    <div class="image-wrapper">
                        <img src="../images/cov1.jpg" alt="Workshop Image 1" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/cov2.jpg" alt="Workshop Image 2" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/cov3.jpg" alt="Workshop Image 3" class="event-image">
                    </div>
                </div>
            </div>

            <div class="event-block">
                <div class="event-gallery">
                    <div class="image-wrapper">
                        <img src="../images/cov4.jpg" alt="Meeting Image 1" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/cov5.jpg" alt="Meeting Image 2" class="event-image">
                    </div>
                    <div class="image-wrapper">
                        <img src="../images/cov6.jpg" alt="Meeting Image 3" class="event-image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</div>
<style>
    .event-div{
        background-image: url("../images/theme2.jpg");
    }
    .container {
    max-width: 1200px;
    /* margin: 40px auto; */
    padding: 20px;
    /* background: #FFF; */
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #003366;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.event-block {
    margin-bottom: 50px;
    /* background: #FFF; */
}

.event-title {
    text-align: center;
    font-size: 2rem;
    color: #006699;
    margin-bottom: 20px;
    /* background: #FFF; */
}

.event-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    /* background: #FFF; */
}

.image-wrapper {
    position: relative;
    overflow: hidden;
    width: calc(33.333% - 20px);
    max-width: 300px;
    border-radius: 15px;
    perspective: 1000px; 
    transition: transform 0.5s ease-in-out;
    /* background: #FFF; */
}

.event-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
    border-radius: 15px;
    /* background: #FFF; */
}
.image-wrapper:hover .event-image {
    transform: translateY(-20px) rotateX(10deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); 
    /* background: #FFF; */
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

</style>