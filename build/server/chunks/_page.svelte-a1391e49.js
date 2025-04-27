import { c as create_ssr_component, v as validate_component } from './index2-ac850178.js';
import { F as Footer } from './footer-be8a594c.js';

const css = {
  code: '.event-div.svelte-8nepfe.svelte-8nepfe{background-image:url("../images/theme2.jpg")}.container.svelte-8nepfe.svelte-8nepfe{max-width:1200px;padding:20px}.section-title.svelte-8nepfe.svelte-8nepfe{text-align:center;font-size:2.5rem;margin-bottom:50px;color:#003366;text-transform:uppercase;letter-spacing:2px}.event-block.svelte-8nepfe.svelte-8nepfe{margin-bottom:50px}.event-title.svelte-8nepfe.svelte-8nepfe{text-align:center;font-size:2rem;color:#006699;margin-bottom:20px}.event-gallery.svelte-8nepfe.svelte-8nepfe{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}.image-wrapper.svelte-8nepfe.svelte-8nepfe{position:relative;overflow:hidden;width:calc(33.333% - 20px);max-width:300px;border-radius:15px;perspective:1000px;transition:transform 0.5s ease-in-out}.event-image.svelte-8nepfe.svelte-8nepfe{width:100%;height:250px;object-fit:cover;transition:transform 0.6s ease, box-shadow 0.6s ease;border-radius:15px}.image-wrapper.svelte-8nepfe:hover .event-image.svelte-8nepfe{transform:translateY(-20px) rotateX(10deg);box-shadow:0 15px 30px rgba(0, 0, 0, 0.2)}.image-wrapper.svelte-8nepfe.svelte-8nepfe:hover{transform:scale(1.05)}@media(max-width: 992px){.image-wrapper.svelte-8nepfe.svelte-8nepfe{width:calc(50% - 20px)}}@media(max-width: 768px){.image-wrapper.svelte-8nepfe.svelte-8nepfe{width:100%}.event-image.svelte-8nepfe.svelte-8nepfe{height:200px}}@media(max-width: 576px){.section-title.svelte-8nepfe.svelte-8nepfe{font-size:1.8rem}.event-title.svelte-8nepfe.svelte-8nepfe{font-size:1.5rem}.event-image.svelte-8nepfe.svelte-8nepfe{height:180px}}',
  map: null
};
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="event-div svelte-8nepfe"><section class="event-section"><div class="container svelte-8nepfe"><h1 class="section-title svelte-8nepfe">Foundation Activities – At a Glance</h1>

            <div class="event-block svelte-8nepfe"><h2 class="event-title svelte-8nepfe">Consumer Protection Workshop</h2>
                <div class="event-gallery svelte-8nepfe"><div class="image-wrapper svelte-8nepfe"><img src="../images/Work1.jpg" alt="Workshop Image 1" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/work2.jpg" alt="Workshop Image 2" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/work3.jpg" alt="Workshop Image 3" class="event-image svelte-8nepfe"></div></div></div>

            <div class="event-block svelte-8nepfe"><div class="event-gallery svelte-8nepfe"><div class="image-wrapper svelte-8nepfe"><img src="../images/work4.jpg" alt="Meeting Image 1" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/work5.jpg" alt="Meeting Image 2" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/work6.jpg" alt="Meeting Image 3" class="event-image svelte-8nepfe"></div></div></div></div></section>
    <section class="event-section"><div class="container svelte-8nepfe"><h1 class="section-title svelte-8nepfe">Some other Activities of Sanjeevan Foundation </h1>

            <div class="event-block svelte-8nepfe"><h2 class="event-title svelte-8nepfe">Distribution actives for Police Personnel During covid-19</h2>
                <div class="event-gallery svelte-8nepfe"><div class="image-wrapper svelte-8nepfe"><img src="../images/cov1.jpg" alt="Workshop Image 1" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/cov2.jpg" alt="Workshop Image 2" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/cov3.jpg" alt="Workshop Image 3" class="event-image svelte-8nepfe"></div></div></div>

            <div class="event-block svelte-8nepfe"><div class="event-gallery svelte-8nepfe"><div class="image-wrapper svelte-8nepfe"><img src="../images/cov4.jpg" alt="Meeting Image 1" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/cov5.jpg" alt="Meeting Image 2" class="event-image svelte-8nepfe"></div>
                    <div class="image-wrapper svelte-8nepfe"><img src="../images/cov6.jpg" alt="Meeting Image 3" class="event-image svelte-8nepfe"></div></div></div></div></section>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Events, "Events").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a1391e49.js.map
