import { c as create_ssr_component, v as validate_component, b as add_attribute, d as escape, e as each } from './index2-ac850178.js';
import { F as Footer } from './footer-be8a594c.js';
import 'moment';

const css = {
  code: `.mt.svelte-ahopnu.svelte-ahopnu{margin-top:5px}.form-div.svelte-ahopnu.svelte-ahopnu{background-image:url("../images/theme2.jpg");padding-top:1rem}form.svelte-ahopnu.svelte-ahopnu{max-width:600px;margin:0px auto;padding:25px;background:rgba(255, 255, 255, 0.8);border-radius:10px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.5);font-family:'opan sans';font-size:15px}h2.svelte-ahopnu.svelte-ahopnu{text-align:center;color:#4b0082;font-family:'opan sans'}label.svelte-ahopnu.svelte-ahopnu{font-weight:bold;display:block;margin-top:10px}input[type="text"].svelte-ahopnu.svelte-ahopnu,input[type="email"].svelte-ahopnu.svelte-ahopnu,input[type="date"].svelte-ahopnu.svelte-ahopnu,select.svelte-ahopnu.svelte-ahopnu,textarea.svelte-ahopnu.svelte-ahopnu{width:100%;padding:8px;margin-top:5px;border:1px solid #ccc;border-radius:4px}.row.svelte-ahopnu.svelte-ahopnu{display:flex;justify-content:space-between;margin-bottom:15px}.row.svelte-ahopnu span.svelte-ahopnu{flex:1;margin-right:10px}.row.svelte-ahopnu span.svelte-ahopnu:last-child{margin-right:0}.required.svelte-ahopnu.svelte-ahopnu:after{content:"*";color:red}.t-condition.svelte-ahopnu.svelte-ahopnu{margin:10px 0}.submit-btn.svelte-ahopnu.svelte-ahopnu{background-color:#4CAF50;color:white;border:none;padding:10px 15px;cursor:pointer;font-size:16px;border-radius:5px;margin-top:10px}.submit-btn.svelte-ahopnu.svelte-ahopnu:hover{background-color:#45a049}.check.svelte-ahopnu.svelte-ahopnu{margin-right:5px}`,
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member_id = "";
  let first_name = "";
  let middle_name = "";
  let last_name = "";
  let country = "";
  let pincode = "";
  let bod = "";
  let occupation = "";
  let income = "";
  let family_members = [];
  let nominee_name = "";
  let nominee_relation = "";
  let phone1 = "";
  let phone2 = "";
  let email_id = "";
  const states = [
    {
      name: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"]
    },
    {
      name: "Karnataka",
      cities: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Dharwad"]
    },
    {
      name: "Gujarat",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Rajkot"]
    }
  ];
  $$result.css.add(css);
  return `<div class="form-div svelte-ahopnu"><form class="svelte-ahopnu"><h2 class="svelte-ahopnu">Registration Form</h2>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="first-name" class="required svelte-ahopnu">First Name:</label>
                <input type="text" id="first-name" required class="svelte-ahopnu"${add_attribute("value", first_name, 0)}></span>
            <span class="svelte-ahopnu"><label for="middle-name" class="svelte-ahopnu">Middle Name:</label>
                <input type="text" id="middle-name" class="svelte-ahopnu"${add_attribute("value", middle_name, 0)}></span>
            <span class="svelte-ahopnu"><label for="last-name" class="required svelte-ahopnu">Last Name:</label>
                <input type="text" id="last-name" required class="svelte-ahopnu"${add_attribute("value", last_name, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="member-id" class="required svelte-ahopnu">Member ID:</label>
                <input type="text" id="member-id" required class="svelte-ahopnu"${add_attribute("value", member_id, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="address" class="required svelte-ahopnu">Complete Address:</label>
                <textarea id="address" required class="svelte-ahopnu">${escape("")}</textarea></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="state" class="required svelte-ahopnu">State:</label>
                <select id="state" required class="svelte-ahopnu"><option value="">Select State</option>${each(states, ({ name }) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
  })}</select></span>
            <span class="svelte-ahopnu"><label for="city" class="required svelte-ahopnu">City:</label>
                <select id="city" required class="svelte-ahopnu"><option value="">Select City</option>${``}</select></span></div>

        <div class="row svelte-ahopnu"><label for="file1" class="required svelte-ahopnu">Upload document:</label>
            <input class="mt svelte-ahopnu" type="file" id="file1" required></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="country" class="required svelte-ahopnu">Country:</label>
                <input type="text" id="country" required class="svelte-ahopnu"${add_attribute("value", country, 0)}></span>
            <span class="svelte-ahopnu"><label for="pincode" class="required svelte-ahopnu">Pincode:</label>
                <input type="text" id="pincode" required class="svelte-ahopnu"${add_attribute("value", pincode, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="bod" class="required svelte-ahopnu">Date of Birth:</label>
                <input type="date" id="bod" required class="svelte-ahopnu"${add_attribute("value", bod, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="occupation" class="svelte-ahopnu">Occupation:</label>
                <input type="text" id="occupation" class="svelte-ahopnu"${add_attribute("value", occupation, 0)}></span>
            <span class="svelte-ahopnu"><label for="income" class="svelte-ahopnu">Income:</label>
                <input type="text" id="income" class="svelte-ahopnu"${add_attribute("value", income, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="phone1" class="required svelte-ahopnu">Phone 1:</label>
                <input type="text" id="phone1" required class="svelte-ahopnu"${add_attribute("value", phone1, 0)}></span>
            <span class="svelte-ahopnu"><label for="phone2" class="svelte-ahopnu">Phone 2:</label>
                <input type="text" id="phone2" class="svelte-ahopnu"${add_attribute("value", phone2, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="email" class="required svelte-ahopnu">Email ID:</label>
                <input type="email" id="email" required class="svelte-ahopnu"${add_attribute("value", email_id, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label for="nominee-name" class="required svelte-ahopnu">Nominee Name:</label>
                <input type="text" id="nominee-name" required class="svelte-ahopnu"${add_attribute("value", nominee_name, 0)}></span>
            <span class="svelte-ahopnu"><label for="nominee-relation" class="required svelte-ahopnu">Nominee Relation:</label>
                <input type="text" id="nominee-relation" required class="svelte-ahopnu"${add_attribute("value", nominee_relation, 0)}></span></div>

        <div class="row svelte-ahopnu"><span class="svelte-ahopnu"><label class="svelte-ahopnu">Other Members of Family:</label>
                <div><label class="svelte-ahopnu"><input type="checkbox" value="spouse"${~family_members.indexOf("spouse") ? add_attribute("checked", true, 1) : ""}> Spouse</label>
                    <label class="svelte-ahopnu"><input type="checkbox" value="son"${~family_members.indexOf("son") ? add_attribute("checked", true, 1) : ""}> Son</label>
                    <label class="svelte-ahopnu"><input type="checkbox" value="daughter"${~family_members.indexOf("daughter") ? add_attribute("checked", true, 1) : ""}> Daughter</label>
                    <label class="svelte-ahopnu"><input type="checkbox" value="mother"${~family_members.indexOf("mother") ? add_attribute("checked", true, 1) : ""}> Mother</label>
                    <label class="svelte-ahopnu"><input type="checkbox" value="father"${~family_members.indexOf("father") ? add_attribute("checked", true, 1) : ""}> Father</label>
                    <label class="svelte-ahopnu"><input type="checkbox" value="in-laws"${~family_members.indexOf("in-laws") ? add_attribute("checked", true, 1) : ""}> In-laws</label></div></span></div>
        
        <p class="t-condition svelte-ahopnu"><span class="t-star">*</span> I have read the rules and regulations profile of the NGO as well as its Directors and with my satisfaction. I have decided to be a member of Sanjeevan Foundation to contribute/Donate my services as well as financial support.</p>
        
        <label class="svelte-ahopnu"><input type="checkbox" class="check svelte-ahopnu"> I agree</label>
        <button type="submit" class="submit-btn svelte-ahopnu">Submit</button></form>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-34ead998.js.map
