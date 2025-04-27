import { c as create_ssr_component, v as validate_component, b as add_attribute } from './index2-ac850178.js';
import { F as Footer } from './footer-8037f8c2.js';

const css = {
  code: `.content-wrapper.svelte-chk2js.svelte-chk2js{background-image:url("../images/theme2.jpg")}.donation-container.svelte-chk2js.svelte-chk2js{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;padding:20px;text-align:center;font-family:'opan sans'}.any.svelte-chk2js.svelte-chk2js{font-family:'opan sans';font-size:20px}.any1.svelte-chk2js.svelte-chk2js{color:#1f618d}.qr-section.svelte-chk2js.svelte-chk2js{margin-bottom:20px;margin-top:20px}.qr-image.svelte-chk2js.svelte-chk2js{max-width:250px;width:100%;height:auto}.payment-methods.svelte-chk2js.svelte-chk2js{display:flex;justify-content:center;gap:15px;margin:20px 0}.payment-methods.svelte-chk2js img.svelte-chk2js{width:50px;height:auto}@media(max-width: 768px){.qr-image.svelte-chk2js.svelte-chk2js{max-width:200px}.payment-methods.svelte-chk2js img.svelte-chk2js{width:40px}}.content-wrapper.svelte-chk2js.svelte-chk2js{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between}`,
  map: null
};
let qrCode = "../images/upi.jpg";
const Donation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="content-wrapper svelte-chk2js"><div class="donation-container svelte-chk2js"><h1 class="any1 svelte-chk2js">Donate for Sanjeevan Foundation</h1>

        <div class="qr-section svelte-chk2js"><img${add_attribute("src", qrCode, 0)} alt="Dummy QR Code" class="qr-image svelte-chk2js"></div>

        <p class="any svelte-chk2js">Scan the QR code to donate via UPI</p>

        <div class="payment-methods svelte-chk2js"><img src="../images/paytm.webp" alt="Paytm" class="svelte-chk2js">
            <img src="../images/pe.png" alt="PhonePe" class="svelte-chk2js">
            <img src="../images/Gpay.png" alt="Google Pay" class="svelte-chk2js"></div></div>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Donation, "Donation").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-702a94eb.js.map
