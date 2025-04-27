import { c as create_ssr_component, v as validate_component, b as add_attribute, e as each, d as escape } from './index2-ac850178.js';
import { F as Footer } from './footer-be8a594c.js';

const css = {
  code: `.sad-card.svelte-lqxksq.svelte-lqxksq{color:brown;font-weight:bold}.saad-card.svelte-lqxksq.svelte-lqxksq{background-image:url("../images/theme2.jpg");padding:3px 0}.container.svelte-lqxksq.svelte-lqxksq{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:1200px;margin:40px auto;background-color:white;border-radius:10px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.1);overflow:hidden;animation:svelte-lqxksq-fadeIn 1.5s ease-in-out}.image-section.svelte-lqxksq.svelte-lqxksq{flex:1;min-width:300px;overflow:hidden;animation:svelte-lqxksq-slideInLeft 1s ease-in-out}.image-section.svelte-lqxksq img.svelte-lqxksq{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease}.image-section.svelte-lqxksq img.svelte-lqxksq:hover{transform:scale(1.05)}.text-section.svelte-lqxksq.svelte-lqxksq{flex:2;padding:30px;max-width:600px;animation:svelte-lqxksq-slideInRight 1s ease-in-out}.text-section.svelte-lqxksq h5.svelte-lqxksq{color:#0056b3;margin-bottom:10px;font-size:18px;animation:svelte-lqxksq-textFadeIn 2s ease-in-out;font-family:"Secular one";color:#1F618D}.text-section.svelte-lqxksq h1.svelte-lqxksq{font-size:28px;margin-bottom:20px;animation:svelte-lqxksq-textFadeIn 2.5s ease-in-out;font-family:'opan sans';color:#1F618D}.text-section.svelte-lqxksq p.svelte-lqxksq{font-size:20px;line-height:1.6;margin-bottom:20px;animation:svelte-lqxksq-textFadeIn 3s ease-in-out;font-family:'opan sans'}.buy-button.svelte-lqxksq.svelte-lqxksq{display:inline-block;background-color:#0056b3;color:white;padding:12px 24px;border-radius:5px;text-decoration:none;font-weight:bold;transition:transform 0.3s ease, background-color 0.3s ease;animation:svelte-lqxksq-buttonPulse 2s infinite}.buy-button.svelte-lqxksq.svelte-lqxksq:hover{transform:scale(1.1);background-color:#003d80}@keyframes svelte-lqxksq-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-lqxksq-slideInLeft{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-lqxksq-slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-lqxksq-textFadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-lqxksq-buttonPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@media(max-width: 768px){.container.svelte-lqxksq.svelte-lqxksq{flex-direction:column;text-align:center}.text-section.svelte-lqxksq.svelte-lqxksq{padding:20px}.image-section.svelte-lqxksq img.svelte-lqxksq{width:100%;height:auto}}.container.svelte-lqxksq.svelte-lqxksq{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;max-width:1200px;background-color:rgb(237, 255, 237);border-radius:10px;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;overflow:hidden;animation:svelte-lqxksq-fadeIn 1.5s ease-in-out}.image-section.svelte-lqxksq.svelte-lqxksq{flex:1;min-width:300px;overflow:hidden;animation:svelte-lqxksq-slideInLeft 1s ease-in-out}.image-section.svelte-lqxksq img.svelte-lqxksq{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease}.image-section.svelte-lqxksq img.svelte-lqxksq:hover{transform:scale(1.05)}.text-section.svelte-lqxksq.svelte-lqxksq{flex:2;padding:30px;max-width:600px;animation:svelte-lqxksq-slideInRight 1s ease-in-out}.text-section.svelte-lqxksq h5.svelte-lqxksq{color:#0056b3;margin-bottom:10px;font-size:18px;animation:svelte-lqxksq-textFadeIn 2s ease-in-out}.text-section.svelte-lqxksq h1.svelte-lqxksq{font-size:28px;margin-bottom:20px;animation:svelte-lqxksq-textFadeIn 2.5s ease-in-out}.text-section.svelte-lqxksq p.svelte-lqxksq{font-size:16px;line-height:1.6;margin-bottom:20px;animation:svelte-lqxksq-textFadeIn 3s ease-in-out}.buy-button.svelte-lqxksq.svelte-lqxksq{display:inline-block;background-color:#0056b3;color:white;padding:12px 24px;border-radius:5px;text-decoration:none;font-weight:bold;transition:transform 0.3s ease, background-color 0.3s ease;animation:svelte-lqxksq-buttonPulse 2s infinite}.buy-button.svelte-lqxksq.svelte-lqxksq:hover{transform:scale(1.1);background-color:#003d80}@keyframes svelte-lqxksq-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-lqxksq-slideInLeft{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-lqxksq-slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes svelte-lqxksq-textFadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-lqxksq-buttonPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@media(max-width: 768px){.container.svelte-lqxksq.svelte-lqxksq{flex-direction:column;text-align:center}.text-section.svelte-lqxksq.svelte-lqxksq{padding:20px}.image-section.svelte-lqxksq img.svelte-lqxksq{width:100%;height:auto}}h2.svelte-lqxksq.svelte-lqxksq{margin-bottom:20px;margin-top:20px;text-align:center;font-size:2rem;font-family:"Open Sans", sans-serif;color:#1f618d}.detail-line.svelte-lqxksq.svelte-lqxksq{font-size:15px}.card.svelte-lqxksq.svelte-lqxksq{display:flex;flex-direction:row;align-items:center;justify-content:space-between;max-width:900px;background-color:rgb(237, 255, 237);border-radius:10px;padding:20px;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;margin:auto;margin-top:2rem}.card-image.svelte-lqxksq.svelte-lqxksq{flex:1;display:flex;justify-content:center;align-items:center;padding-right:20px}.card-image.svelte-lqxksq img.svelte-lqxksq{max-width:100%;height:auto;border-radius:10px}.card-details.svelte-lqxksq.svelte-lqxksq{flex:2;padding-left:20px}.detail-row.svelte-lqxksq.svelte-lqxksq{display:flex;align-items:center;margin-bottom:10px}.star.svelte-lqxksq.svelte-lqxksq{margin-right:10px;font-size:1.5rem}@media screen and (max-width: 768px){.card.svelte-lqxksq.svelte-lqxksq{flex-direction:column;justify-content:center;align-items:center;padding:15px;margin:15px;text-align:left}.card-image.svelte-lqxksq.svelte-lqxksq{padding:0;margin-bottom:15px;width:100%}.card-image.svelte-lqxksq img.svelte-lqxksq{max-width:80%;margin:0 auto}.card-details.svelte-lqxksq.svelte-lqxksq{padding:0;width:100%}.detail-row.svelte-lqxksq.svelte-lqxksq{flex-direction:row;justify-content:flex-start;margin-bottom:15px}.detail-line.svelte-lqxksq.svelte-lqxksq{font-size:14px;line-height:1.5em}.star.svelte-lqxksq.svelte-lqxksq{font-size:1.3rem}}.form-container.svelte-lqxksq.svelte-lqxksq{background-color:rgb(237, 255, 237);padding:20px;border-radius:10px;width:100%;max-width:400px;margin:auto;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);font-family:'opan sans'}.hos-list.svelte-lqxksq.svelte-lqxksq{font-family:'opan sans';letter-spacing:3px;font-weight:500}.form-group.svelte-lqxksq.svelte-lqxksq{margin-bottom:15px}label.svelte-lqxksq.svelte-lqxksq{font-weight:bold;display:block;margin-bottom:5px}select.svelte-lqxksq.svelte-lqxksq,input.svelte-lqxksq.svelte-lqxksq{width:100%;padding:10px;border-radius:5px;border:1px solid #ccc}button.svelte-lqxksq.svelte-lqxksq{padding:10px 20px;background-color:#6a1b9a;color:white;border:none;border-radius:5px;cursor:pointer}button.svelte-lqxksq.svelte-lqxksq:hover{background-color:#4a148c}.buttons.svelte-lqxksq.svelte-lqxksq{display:flex;justify-content:space-between}.reset-btn.svelte-lqxksq.svelte-lqxksq{background-color:#f44336}.reset-btn.svelte-lqxksq.svelte-lqxksq:hover{background-color:#d32f2f}h2.svelte-lqxksq.svelte-lqxksq{text-align:center;color:#4a148c}`,
  map: null
};
const HealthCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pincode = "";
  const hospitalsInPune = [
    "Ruby Hall Clinic",
    "Jehangir Hospital",
    "Sahyadri Super Specialty Hospital",
    "Aditya Birla Memorial Hospital",
    "Deenanath Mangeshkar Hospital",
    "Columbia Asia Hospital",
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
  return `<div class="saad-card svelte-lqxksq"><div class="container svelte-lqxksq"><div class="row"><div class="text-section svelte-lqxksq"><h5 class="svelte-lqxksq"><span class="sad-card svelte-lqxksq">SAAD</span> CARD</h5>
            <h1 class="svelte-lqxksq">What is <span class="sad-card svelte-lqxksq">SAAD</span> Card?</h1>
            <p class="svelte-lqxksq">Health Card is a shield that protects you and your family from financial instability during health
              emergencies. Against the common misconception that only elderly or people with health risks need to be
              secured, it is essential for everyone. A good health policy offers peace of mind in times of hospitalization
              by taking care of your medical bills.
            </p>
            <p class="svelte-lqxksq">Uncertainties like COVID-19 have taught us the critical need for health insurance. On the other hand, with the
              continuous spike in medical inflation, a good health insurance plan can protect your finances either by
              providing cashless treatments or reimbursements on the incurred medical expenses. The flexibility of our
              policies allow them to be availed either on an individual or floater basis to get wide coverage according to
              your needs.
            </p>
            <a href="#" class="buy-button svelte-lqxksq">Buy Online</a></div>
          <div class="image-section svelte-lqxksq"><img src="../images/saad1.jpg" alt="Family Image" class="svelte-lqxksq"></div></div></div>

<h2 class="svelte-lqxksq">Benefits of <span class="sad-card svelte-lqxksq">SAAD</span> Card</h2>

<div class="card svelte-lqxksq"><div class="card-image svelte-lqxksq"><img src="../images/saad2.jpg" alt="Card Image" class="svelte-lqxksq"></div>
  <div class="card-details svelte-lqxksq"><div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">Domiciliary hospitalization is a health insurance benefit that allows
        a patient to receive medical treatment at home, rather than in a
        hospital: .</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">AYUSH treatment refers to alternative medicine systems such as
        Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy. Trusted
        by thousands of people around the world, these traditional health and
        wellness treatments are cost-effective and have negligible side
        effects. .</span></div>
    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">12 A &amp; 80 G Benefit for Income Tax.</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">15 -20% Discount on Ayurvedic &amp; Other medicines.</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">Road Ambulance - 5000 Ayush upto Sum insured..</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">Annual health checkups can help you monitor your overall health and
        well-being, establish a baseline for various parameters, and reduce
        future healthcare costs. We offer you this facility once a year.</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">Free Immunity Boosting &quot; Kadha&quot; For One time.</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">OPD coverage can include a variety of services, such as preventive
        health check-ups, minor procedures, physiotherapy, and alternative
        therapies. The OPD benefit ranges upto an amount of Rs 2500 anually.</span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">5 Lakhs Accidental Coverage.
      </span></div>

    <div class="detail-row svelte-lqxksq"><span class="star svelte-lqxksq">★</span>
      <span class="detail-line svelte-lqxksq">1 Night stay at Resorts.</span></div></div></div>
<h2 class="hos-list svelte-lqxksq">Hospital List</h2>
<div class="form-container svelte-lqxksq"><div class="form-group svelte-lqxksq"><label for="state" class="svelte-lqxksq">State</label>
    <select id="state" class="svelte-lqxksq"><option value="" disabled selected>-- Select --</option><option value="Maharashtra">Maharashtra</option><option value="West Bangal">West Bangal</option><option value="Bihar">Bihar</option><option value="New Delhi">New Delhi</option><option value="Utter Pradesh">Utter Pradesh</option><option value="Hariyana">Hariyana</option><option value="Gujrat">Gujrat</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Hydrabad">Hydrabad</option><option value="Punjab">Punjab</option><option value="Jammu & Kashmir">Jammu &amp; Kashmir</option></select></div>

  <div class="form-group svelte-lqxksq"><label for="city" class="svelte-lqxksq">City</label>
    <select id="city" class="svelte-lqxksq"><option value="" disabled selected>-- Select --</option><option value="Pune">Pune</option><option value="Nasik">Nasik</option><option value="Lonawala">Lonawala</option><option value="Khandala">khandala</option><option value="Kolkata">Kolkata</option><option value="Lakhnaow">Lakhnaow</option><option value="Nagpur">Nagpur</option></select></div>

  <div class="form-group svelte-lqxksq"><label for="pincode" class="svelte-lqxksq">Pincode</label>
    <input type="text" id="pincode" placeholder="Pincode" class="svelte-lqxksq"${add_attribute("value", pincode, 0)}></div>

  <div class="form-group svelte-lqxksq"><label for="hospitalName" class="svelte-lqxksq">Hospital Name</label>
    <select id="hospitalName" class="svelte-lqxksq"><option value="" disabled selected>Search by Hospital Name</option>${each(hospitalsInPune, (hospital) => {
    return `<option${add_attribute("value", hospital, 0)}>${escape(hospital)}</option>`;
  })}</select></div>

  <div class="buttons svelte-lqxksq"><button class="svelte-lqxksq">Submit</button>
    <button class="reset-btn svelte-lqxksq">Reset</button></div></div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HealthCard, "HealthCard").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9a15347.js.map
