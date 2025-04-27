<script>
    import Footer from "../components/footer.svelte";
    import { onMount } from "svelte";
    import { callServerApi } from "../services/DataService";

    let member_id = "";
    let first_name = "";
    let middle_name = "";
    let last_name = "";
    let address = "";
    let city = "";
    let state = "";
    let file1 = "";
    let country = "";
    let pincode = "";
    let bod = "";
    let occupation = "";
    let income = "";
    let other_activities = "";
    let family_members = [];
    let nominee_name = "";
    let nominee_relation = "";
    let phone1 = "";
    let phone2 = "";
    let email_id = "";
    let audit_info = "";
    let status = "";

    // Arrays for states and cities
    const states = [
        { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane','Khandala', 'Amravati', 'Lonawala','Solapur', 'Kolhapur', 'Jalgaon'] },
        { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubli', 'Dharwad'] },
        { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Rajkot','Navsari','Vapi','Sachin','Balsadh'] },
        { name: 'West Bangal', cities: ['Kolkata', 'Liluhah', 'Srirampur', 'Konnagar', 'Bally'] },
        { name: 'Bihar', cities: ['Patna', 'Ara', 'Bhagalpur', 'Munger', 'Hazipur'] },
        { name: 'Utter Pradesh', cities: ['Lakhnaow', 'Khanpur', 'Ballia', 'Noida', 'Varansai'] },
        // Add more states and their cities here
    ];

    onMount(async () => {
        try {
            const result = await callServerApi("getCrmMembers", {});
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    });

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = {
                member_id,
                first_name,
                middle_name,
                last_name,
                address,
                city,
                state,
                file1,
                country,
                pincode,
                bod,
                occupation,
                income,
                other_activities,
                family_members,
                nominee_name,
                nominee_relation,
                phone1,
                phone2,
                email_id,
                audit_info,
                status
            };

            const result = await callServerApi("saveCrmMembers", formData);
            console.log(result);

            resetFormData();

        } catch (error) {
            console.log(error);
        }
    }

    function resetFormData() {
        member_id = "";
        first_name = "";
        middle_name = "";
        last_name = "";
        address = "";
        city = "";
        state = "";
        file1 = "";
        country = "";
        pincode = "";
        bod = "";
        occupation = "";
        income = "";
        other_activities = "";
        family_members = [];
        nominee_name = "";
        nominee_relation = "";
        phone1 = "";
        phone2 = "";
        email_id = "";
        audit_info = "";
        status = "";
    }
</script>

<div class="form-div">
    <form on:submit={handleSubmit}>
        <h2>Registration Form</h2>

        <div class="row">
            <span>
                <label for="first-name" class="required">First Name:</label>
                <input type="text" id="first-name" bind:value={first_name} required>
            </span>
            <span>
                <label for="middle-name">Middle Name:</label>
                <input type="text" id="middle-name" bind:value={middle_name}>
            </span>
            <span>
                <label for="last-name" class="required">Last Name:</label>
                <input type="text" id="last-name" bind:value={last_name} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="member-id" class="required">Member ID:</label>
                <input type="text" id="member-id" bind:value={member_id} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="address" class="required">Complete Address:</label>
                <textarea id="address" bind:value={address} required></textarea>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="state" class="required">State:</label>
                <select id="state" bind:value={state} required>
                    <option value="">Select State</option>
                    {#each states as { name }}
                        <option value={name}>{name}</option>
                    {/each}
                </select>
            </span>
            <span>
                <label for="city" class="required">City:</label>
                <select id="city" bind:value={city} required>
                    <option value="">Select City</option>
                    {#if state}
                        {#each states.find(s => s.name === state)?.cities as cityName}
                            <option value={cityName}>{cityName}</option>
                        {/each}
                    {/if}
                </select>
            </span>
        </div>

        <div class="row">
            <label for="file1" class="required">Upload document:</label>
            <input class="mt" type="file" id="file1" bind:value={file1} required>
        </div>

        <div class="row">
            <span>
                <label for="country" class="required">Country:</label>
                <input type="text" id="country" bind:value={country} required>
            </span>
            <span>
                <label for="pincode" class="required">Pincode:</label>
                <input type="text" id="pincode" bind:value={pincode} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="bod" class="required">Date of Birth:</label>
                <input type="date" id="bod" bind:value={bod} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="occupation">Occupation:</label>
                <input type="text" id="occupation" bind:value={occupation}>
            </span>
            <span>
                <label for="income">Income:</label>
                <input type="text" id="income" bind:value={income}>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="phone1" class="required">Phone 1:</label>
                <input type="text" id="phone1" bind:value={phone1} required>
            </span>
            <span>
                <label for="phone2">Phone 2:</label>
                <input type="text" id="phone2" bind:value={phone2}>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="email" class="required">Email ID:</label>
                <input type="email" id="email" bind:value={email_id} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label for="nominee-name" class="required">Nominee Name:</label>
                <input type="text" id="nominee-name" bind:value={nominee_name} required>
            </span>
            <span>
                <label for="nominee-relation" class="required">Nominee Relation:</label>
                <input type="text" id="nominee-relation" bind:value={nominee_relation} required>
            </span>
        </div>

        <div class="row">
            <span>
                <label>Other Members of Family:</label>
                <div>
                    <label><input type="checkbox" bind:group={family_members} value="spouse"> Spouse</label>
                    <label><input type="checkbox" bind:group={family_members} value="son"> Son</label>
                    <label><input type="checkbox" bind:group={family_members} value="daughter"> Daughter</label>
                    <label><input type="checkbox" bind:group={family_members} value="mother"> Mother</label>
                    <label><input type="checkbox" bind:group={family_members} value="father"> Father</label>
                    <label><input type="checkbox" bind:group={family_members} value="in-laws"> In-laws</label>
                </div>
            </span>
        </div>
        
        <p class="t-condition"><span class="t-star">*</span> I have read the rules and regulations profile of the NGO as well as its Directors and with my satisfaction. I have decided to be a member of Sanjeevan Foundation to contribute/Donate my services as well as financial support.</p>
        
        <label><input type="checkbox" class="check"> I agree</label>
        <button type="submit" class="submit-btn">Submit</button>
    </form>
    <Footer />
</div>

<style>
    .mt {
        margin-top: 5px;
    }
    .form-div {
        background-image: url("../images/theme2.jpg");
        padding-top: 1rem;
    }

    form {
        max-width: 600px;
        margin: 0px auto;
        padding: 25px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        font-family: 'opan sans';
        font-size: 15px;
    }

    h2 {
        text-align: center;
        color: #4b0082;
        font-family: 'opan sans';
    }

    label {
        font-weight: bold;
        display: block;
        margin-top: 10px;
    }

    input[type="text"],
    input[type="email"],
    input[type="date"],
    select,
    textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .row span {
        flex: 1;
        margin-right: 10px;
    }

    .row span:last-child {
        margin-right: 0;
    }

    .required:after {
        content: "*";
        color: red;
    }

    .t-condition {
        margin: 10px 0;
    }

    .submit-btn {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
        margin-top: 10px;
    }

    .submit-btn:hover {
        background-color: #45a049;
    }

    .check {
        margin-right: 5px;
    }
</style>
