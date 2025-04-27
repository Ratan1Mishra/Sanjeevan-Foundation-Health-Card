import { c as create_ssr_component, v as validate_component, b as add_attribute, e as each, d as escape } from './index2-ac850178.js';
import { F as Footer } from './footer-be8a594c.js';

const css = {
  code: `.sad-card.svelte-7n8kdd.svelte-7n8kdd{color:brown;font-weight:bold}.saad-card.svelte-7n8kdd.svelte-7n8kdd{background-image:url("../images/theme2.jpg");padding:3px 0}.container.svelte-7n8kdd.svelte-7n8kdd{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:1200px;margin:40px auto;background-color:white;border-radius:10px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.1);overflow:hidden;animation:svelte-7n8kdd-fadeIn 1.5s ease-in-out}.image-section.svelte-7n8kdd.svelte-7n8kdd{flex:1;min-width:300px;overflow:hidden;animation:svelte-7n8kdd-slideInLeft 1s ease-in-out}.image-section.svelte-7n8kdd img.svelte-7n8kdd{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease}.image-section.svelte-7n8kdd img.svelte-7n8kdd:hover{transform:scale(1.05)}.text-section.svelte-7n8kdd.svelte-7n8kdd{flex:2;padding:30px;max-width:600px;animation:svelte-7n8kdd-slideInRight 1s ease-in-out}.text-section.svelte-7n8kdd h5.svelte-7n8kdd{color:#0056b3;margin-bottom:10px;font-size:18px;animation:svelte-7n8kdd-textFadeIn 2s ease-in-out;font-family:"Secular one";color:#1F618D}.text-section.svelte-7n8kdd h1.svelte-7n8kdd{font-size:28px;margin-bottom:20px;animation:svelte-7n8kdd-textFadeIn 2.5s ease-in-out;font-family:'opan sans';color:#1F618D}.text-section.svelte-7n8kdd p.svelte-7n8kdd{font-size:20px;line-height:1.6;margin-bottom:20px;animation:svelte-7n8kdd-textFadeIn 3s ease-in-out;font-family:'opan sans'}.buy-button.svelte-7n8kdd.svelte-7n8kdd{display:inline-block;background-color:#0056b3;color:white;padding:12px 24px;border-radius:5px;text-decoration:none;font-weight:bold;transition:transform 0.3s ease, background-color 0.3s ease;animation:svelte-7n8kdd-buttonPulse 2s infinite}.buy-button.svelte-7n8kdd.svelte-7n8kdd:hover{transform:scale(1.1);background-color:#003d80}@keyframes svelte-7n8kdd-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-7n8kdd-slideInLeft{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-7n8kdd-slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-7n8kdd-textFadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-7n8kdd-buttonPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@media(max-width: 768px){.container.svelte-7n8kdd.svelte-7n8kdd{flex-direction:column;text-align:center}.text-section.svelte-7n8kdd.svelte-7n8kdd{padding:20px}.image-section.svelte-7n8kdd img.svelte-7n8kdd{width:100%;height:auto}}.container.svelte-7n8kdd.svelte-7n8kdd{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:1200px;background-color:rgb(237, 255, 237);border-radius:10px;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;overflow:hidden;animation:svelte-7n8kdd-fadeIn 1.5s ease-in-out}.image-section.svelte-7n8kdd.svelte-7n8kdd{flex:1;min-width:300px;overflow:hidden;animation:svelte-7n8kdd-slideInLeft 1s ease-in-out}.image-section.svelte-7n8kdd img.svelte-7n8kdd{width:100%;height:100%;object-fit:contain;transition:transform 0.5s ease}.image-section.svelte-7n8kdd img.svelte-7n8kdd:hover{transform:scale(1.05)}.text-section.svelte-7n8kdd.svelte-7n8kdd{flex:2;padding:30px;max-width:600px;animation:svelte-7n8kdd-slideInRight 1s ease-in-out}.text-section.svelte-7n8kdd h5.svelte-7n8kdd{color:#0056b3;margin-bottom:10px;font-size:18px;animation:svelte-7n8kdd-textFadeIn 2s ease-in-out}.text-section.svelte-7n8kdd h1.svelte-7n8kdd{font-size:28px;margin-bottom:20px;animation:svelte-7n8kdd-textFadeIn 2.5s ease-in-out}.text-section.svelte-7n8kdd p.svelte-7n8kdd{font-size:16px;line-height:1.6;margin-bottom:20px;animation:svelte-7n8kdd-textFadeIn 3s ease-in-out}.buy-button.svelte-7n8kdd.svelte-7n8kdd{display:inline-block;background-color:#0056b3;color:white;padding:12px 24px;border-radius:5px;text-decoration:none;font-weight:bold;transition:transform 0.3s ease, background-color 0.3s ease;animation:svelte-7n8kdd-buttonPulse 2s infinite}.buy-button.svelte-7n8kdd.svelte-7n8kdd:hover{transform:scale(1.1);background-color:#003d80}@keyframes svelte-7n8kdd-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-7n8kdd-slideInLeft{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-7n8kdd-slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-7n8kdd-textFadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-7n8kdd-buttonPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@media(max-width: 768px){.container.svelte-7n8kdd.svelte-7n8kdd{flex-direction:column;text-align:center}.text-section.svelte-7n8kdd.svelte-7n8kdd{padding:20px}.image-section.svelte-7n8kdd img.svelte-7n8kdd{width:100%;height:auto}}h2.svelte-7n8kdd.svelte-7n8kdd{margin-bottom:20px;margin-top:20px;text-align:center;font-size:2rem;font-family:"Open Sans", sans-serif;color:#1f618d}.detail-line.svelte-7n8kdd.svelte-7n8kdd{font-size:15px}.card.svelte-7n8kdd.svelte-7n8kdd{display:flex;flex-direction:row;align-items:center;justify-content:space-between;max-width:900px;background-color:rgb(237, 255, 237);border-radius:10px;padding:20px;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;margin:auto;margin-top:2rem}.card-image.svelte-7n8kdd.svelte-7n8kdd{flex:1;display:flex;justify-content:center;align-items:center;padding-right:20px}.card-image.svelte-7n8kdd img.svelte-7n8kdd{max-width:100%;height:auto;border-radius:10px}.card-details.svelte-7n8kdd.svelte-7n8kdd{flex:2;padding-left:20px}.detail-row.svelte-7n8kdd.svelte-7n8kdd{display:flex;align-items:center;margin-bottom:10px}.star.svelte-7n8kdd.svelte-7n8kdd{margin-right:10px;font-size:1.5rem}@media screen and (max-width: 768px){.card.svelte-7n8kdd.svelte-7n8kdd{flex-direction:column;justify-content:center;align-items:center;padding:15px;margin:15px;text-align:left}.card-image.svelte-7n8kdd.svelte-7n8kdd{padding:0;margin-bottom:15px;width:100%}.card-image.svelte-7n8kdd img.svelte-7n8kdd{max-width:80%;margin:0 auto}.card-details.svelte-7n8kdd.svelte-7n8kdd{padding:0;width:100%}.detail-row.svelte-7n8kdd.svelte-7n8kdd{flex-direction:row;justify-content:flex-start;margin-bottom:15px}.detail-line.svelte-7n8kdd.svelte-7n8kdd{font-size:14px;line-height:1.5em}.star.svelte-7n8kdd.svelte-7n8kdd{font-size:1.3rem}}.form-container.svelte-7n8kdd.svelte-7n8kdd{background-color:rgb(237, 255, 237);padding:20px;border-radius:10px;width:100%;max-width:400px;margin:auto;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);font-family:'opan sans'}.hos-list.svelte-7n8kdd.svelte-7n8kdd{font-family:'opan sans';letter-spacing:3px;font-weight:500}.form-group.svelte-7n8kdd.svelte-7n8kdd{margin-bottom:15px}label.svelte-7n8kdd.svelte-7n8kdd{font-weight:bold;display:block;margin-bottom:5px}select.svelte-7n8kdd.svelte-7n8kdd,input.svelte-7n8kdd.svelte-7n8kdd{width:100%;padding:10px;border-radius:5px;border:1px solid #ccc}button.svelte-7n8kdd.svelte-7n8kdd{padding:10px 20px;background-color:#6a1b9a;color:white;border:none;border-radius:5px;cursor:pointer}button.svelte-7n8kdd.svelte-7n8kdd:hover{background-color:#4a148c}.buttons.svelte-7n8kdd.svelte-7n8kdd{display:flex;justify-content:space-between}.reset-btn.svelte-7n8kdd.svelte-7n8kdd{background-color:#f44336}.reset-btn.svelte-7n8kdd.svelte-7n8kdd:hover{background-color:#d32f2f}h2.svelte-7n8kdd.svelte-7n8kdd{text-align:center;color:#4a148c}`,
  map: null
};
const HealthCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pincode = "";
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
    "Lokmanya Hospital"
  ];
  $$result.css.add(css);
  return `<div class="saad-card svelte-7n8kdd"><div class="container svelte-7n8kdd"><div class="row"><div class="text-section svelte-7n8kdd"><h5 class="svelte-7n8kdd"><span class="sad-card svelte-7n8kdd">SAAD</span> CARD</h5>
            <h1 class="svelte-7n8kdd">What is <span class="sad-card svelte-7n8kdd">SAAD</span> Card?</h1>
            <p class="svelte-7n8kdd">Health Card is a shield that protects you and your family from financial instability during health
              emergencies. Against the common misconception that only elderly or people with health risks need to be
              secured, it is essential for everyone. A good health policy offers peace of mind in times of hospitalization
              by taking care of your medical bills.
            </p>
            <p class="svelte-7n8kdd">Uncertainties like COVID-19 have taught us the critical need for health insurance. On the other hand, with the
              continuous spike in medical inflation, a good health insurance plan can protect your finances either by
              providing cashless treatments or reimbursements on the incurred medical expenses. The flexibility of our
              policies allow them to be availed either on an individual or floater basis to get wide coverage according to
              your needs.
            </p>
            <a href="#" class="buy-button svelte-7n8kdd">Buy Online</a></div>
          <div class="image-section svelte-7n8kdd"><img src="../images/saad3.jpg" alt="saad Image" class="svelte-7n8kdd"></div></div></div>

<h2 class="svelte-7n8kdd">Benefits of <span class="sad-card svelte-7n8kdd">SAAD</span> Card</h2>

<div class="card svelte-7n8kdd"><div class="card-image svelte-7n8kdd"><img src="../images/saad3.jpg" alt="Card Image" class="svelte-7n8kdd"></div>
  <div class="card-details svelte-7n8kdd"><div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">Domiciliary hospitalization is a health insurance benefit that allows
        a patient to receive medical treatment at home, rather than in a
        hospital: .</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">AYUSH treatment refers to alternative medicine systems such as
        Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy. Trusted
        by thousands of people around the world, these traditional health and
        wellness treatments are cost-effective and have negligible side
        effects. .</span></div>
    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">12 A &amp; 80 G Benefit for Income Tax.</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">15 -20% Discount on Ayurvedic &amp; Other medicines.</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">Road Ambulance - 5000 Ayush upto Sum insured..</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">Annual health checkups can help you monitor your overall health and
        well-being, establish a baseline for various parameters, and reduce
        future healthcare costs. We offer you this facility once a year.</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">Free Immunity Boosting &quot; Kadha&quot; For One time.</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">OPD coverage can include a variety of services, such as preventive
        health check-ups, minor procedures, physiotherapy, and alternative
        therapies. The OPD benefit ranges upto an amount of Rs 2500 anually.</span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">5 Lakhs Accidental Coverage.
      </span></div>

    <div class="detail-row svelte-7n8kdd"><span class="star svelte-7n8kdd">★</span>
      <span class="detail-line svelte-7n8kdd">1 Night stay at Resorts.</span></div></div></div>
<h2 class="hos-list svelte-7n8kdd">Hospital List</h2>
<div class="form-container svelte-7n8kdd"><div class="form-group svelte-7n8kdd"><label for="state" class="svelte-7n8kdd">State</label>
    <select id="state" class="svelte-7n8kdd"><option value="" disabled selected>-- Select --</option><option value="Maharashtra">Maharashtra</option><option value="West Bangal">West Bangal</option><option value="Bihar">Bihar</option><option value="New Delhi">New Delhi</option><option value="Utter Pradesh">Utter Pradesh</option><option value="Hariyana">Hariyana</option><option value="Gujrat">Gujrat</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Hydrabad">Hydrabad</option><option value="Punjab">Punjab</option><option value="Jammu & Kashmir">Jammu &amp; Kashmir</option></select></div>

  <div class="form-group svelte-7n8kdd"><label for="city" class="svelte-7n8kdd">City</label>
    <select id="city" class="svelte-7n8kdd"><option value="" disabled selected>-- Select --</option><option value="Pune">Pune</option><option value="Nasik">Nasik</option><option value="Lonawala">Lonawala</option><option value="Khandala">khandala</option><option value="Kolkata">Kolkata</option><option value="Lakhnaow">Lakhnaow</option><option value="Nagpur">Nagpur</option></select></div>

  <div class="form-group svelte-7n8kdd"><label for="pincode" class="svelte-7n8kdd">Pincode</label>
    <input type="text" id="pincode" placeholder="Pincode" class="svelte-7n8kdd"${add_attribute("value", pincode, 0)}></div>

  <div class="form-group svelte-7n8kdd"><label for="hospitalName" class="svelte-7n8kdd">Hospital Name</label>
    <select id="hospitalName" class="svelte-7n8kdd"><option value="" disabled selected>Search by Hospital Name</option>${each(hospitalsInPune, (hospital) => {
    return `<option${add_attribute("value", hospital, 0)}>${escape(hospital)}</option>`;
  })}</select></div>

  <div class="buttons svelte-7n8kdd"><button class="svelte-7n8kdd">Submit</button>
    <button class="reset-btn svelte-7n8kdd">Reset</button></div></div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HealthCard, "HealthCard").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-370a5053.js.map
