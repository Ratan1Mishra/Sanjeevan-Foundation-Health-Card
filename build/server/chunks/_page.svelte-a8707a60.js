import { c as create_ssr_component, v as validate_component } from './index2-ac850178.js';
import { F as Footer } from './footer-be8a594c.js';

const css = {
  code: `.sad-card.svelte-4mtnzi{color:red;font-weight:bold}.terms.svelte-4mtnzi{background-image:url("../images/theme2.jpg");padding-top:1rem}.terms-container.svelte-4mtnzi{max-width:800px;margin:0 auto;padding:4rem;background-color:rgb(237, 255, 237);border-radius:10px;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);font-family:'opan sans'}h2.svelte-4mtnzi{text-align:center;font-size:24px;color:#1f618d;margin-bottom:20px}ol.svelte-4mtnzi{list-style-type:decimal;padding-left:20px}li.svelte-4mtnzi{font-size:16px;color:#333;line-height:1.6;margin-bottom:10px}@media(max-width: 768px){.terms-container.svelte-4mtnzi{padding:1rem}h2.svelte-4mtnzi{font-size:20px}li.svelte-4mtnzi{font-size:14px}}@media(max-width: 480px){.terms-container.svelte-4mtnzi{padding:0.5rem}h2.svelte-4mtnzi{font-size:18px}li.svelte-4mtnzi{font-size:12px}}`,
  map: null
};
const Terms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="terms svelte-4mtnzi"><div class="terms-container svelte-4mtnzi"><h2 class="svelte-4mtnzi">Terms and Conditions of <span class="sad-card svelte-4mtnzi">SAAD</span> Card</h2>
    <ol class="svelte-4mtnzi"><li class="svelte-4mtnzi">It is a gift card for the Donors only, not for sale.</li>
        <li class="svelte-4mtnzi">Non-Transferable - only the member/Donor can use this gift card.</li>
        <li class="svelte-4mtnzi">Your ID is important while availing any services gifted to you.</li>
        <li class="svelte-4mtnzi">You should inform the office before you avail the facility of SAAD.</li>
        <li class="svelte-4mtnzi">This card is valid for one year from the issue date.</li>
        <li class="svelte-4mtnzi">Medical treatments are subject to your disease requirement and advice from the attached Doctor. If the hospital does not justify, the services may get rejected. You will get Ayush treatments and modern treatments up to ₹3 lakhs.</li>
        <li class="svelte-4mtnzi">Miscommunication from your side and incomplete information may cause rejection.</li>
        <li class="svelte-4mtnzi">Notifications will be sent to your registered mobile number or email address.</li>
        <li class="svelte-4mtnzi">You must send a booking request to registered resorts. Resort management will confirm your booking upon availability.</li>
        <li class="svelte-4mtnzi">Resort facilities are available on weekdays only. Weekends may incur 25% to 40% extra charges.</li>
        <li class="svelte-4mtnzi">A one-night stay is provided to you, and other charges are payable.</li>
        <li class="svelte-4mtnzi">Any extra person accompanying the member will be fully charged.</li>
        <li class="svelte-4mtnzi">You can avail all the services of the gift card on or before 10 days from the validity date.</li>
        <li class="svelte-4mtnzi">Your donation will be used to generate awareness and promote Ayush modalities. You should use this card more for Ayush treatments, even though you have the facility for modern medical treatments as well.</li></ol></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Terms, "Terms").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a8707a60.js.map
