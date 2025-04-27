<script>
    // Dummy QR code (use a base64 image for now)
    let qrCode = "../images/upi.jpg";
    import Footer from "../components/footer.svelte";
</script>

<style>
    .content-wrapper{
        background-image: url("../images/theme2.jpg");
    }
    /* Ensure the page container stretches to fill the viewport */
    .donation-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Full height of viewport */
        padding: 20px;
        text-align: center;
        font-family: 'opan sans';
    }
    .any{
        font-family:'opan sans';
        font-size: 20px;
    }
    .any1{
        color: #1f618d;
    }

    .qr-section {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .qr-image {
        max-width: 250px;
        width: 100%;
        height: auto;
    }

    .payment-methods {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 20px 0;
    }

    .payment-methods img {
        width: 50px;
        height: auto;
    }

    @media (max-width: 768px) {
        .qr-image {
            max-width: 200px;
        }

        .payment-methods img {
            width: 40px;
        }
    }

    /* This helps stick your custom footer right after the content */
    .content-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

<!-- Wrapper to ensure footer sticks right after content -->
<div class="content-wrapper">
    <div class="donation-container">
        <h1 class="any1">Donate for Sanjeevan Foundation</h1>

        <div class="qr-section">
            <img src={qrCode} alt="Dummy QR Code" class="qr-image" />
        </div>

        <p class="any">Scan the QR code to donate via UPI</p>

        <div class="payment-methods">
            <img src="../images/paytm.webp" alt="Paytm" />
            <img src="../images/pe.png" alt="PhonePe" />
            <img src="../images/Gpay.png" alt="Google Pay" />
        </div>
    </div>
    <Footer/>
</div>
