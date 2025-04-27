<script>
    import Footer from "../components/footer.svelte";
</script>
<div class="terms">
<div class="terms-container">
    <h2>Terms and Conditions of <span class="sad-card">SAAD</span> Card</h2>
    <ol>
        <li>It is a gift card for the Donors only, not for sale.</li>
        <li>Non-Transferable - only the member/Donor can use this gift card.</li>
        <li>Your ID is important while availing any services gifted to you.</li>
        <li>You should inform the office before you avail the facility of SAAD.</li>
        <li>This card is valid for one year from the issue date.</li>
        <li>Medical treatments are subject to your disease requirement and advice from the attached Doctor. If the hospital does not justify, the services may get rejected. You will get Ayush treatments and modern treatments up to ₹3 lakhs.</li>
        <li>Miscommunication from your side and incomplete information may cause rejection.</li>
        <li>Notifications will be sent to your registered mobile number or email address.</li>
        <li>You must send a booking request to registered resorts. Resort management will confirm your booking upon availability.</li>
        <li>Resort facilities are available on weekdays only. Weekends may incur 25% to 40% extra charges.</li>
        <li>A one-night stay is provided to you, and other charges are payable.</li>
        <li>Any extra person accompanying the member will be fully charged.</li>
        <li>You can avail all the services of the gift card on or before 10 days from the validity date.</li>
        <li>Your donation will be used to generate awareness and promote Ayush modalities. You should use this card more for Ayush treatments, even though you have the facility for modern medical treatments as well.</li>
    </ol>
</div>
<Footer/>
</div>
<style>
    .sad-card{
        color: red;
        font-weight: bold;
    }
    .terms{
        background-image: url("../images/theme2.jpg");
        padding-top: 1rem;
    }
    .terms-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 4rem;
        background-color: rgb(237, 255, 237);
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        font-family: 'opan sans';
    }

    h2 {
        text-align: center;
        font-size: 24px;
        color: #1f618d;
        margin-bottom: 20px;
    }

    ol {
        list-style-type: decimal;
        padding-left: 20px;
    }

    li {
        font-size: 16px;
        color: #333;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        .terms-container {
            padding: 1rem;
        }

        h2 {
            font-size: 20px;
        }

        li {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        .terms-container {
            padding: 0.5rem;
        }

        h2 {
            font-size: 18px;
        }

        li {
            font-size: 12px;
        }
    }
</style>
