<template>
  <transition name="fade">
      <div class="k_aboutus" id="aboutUs">
        <div class="k_aboutus_des">
          <h4>ABOUT KAYA YOGA STUDIO</h4>
          <div class="k_aboutus_txt">Kaya Yoga PH is Cagayan Valley's first and only yoga studio and school.</div>
          <p>It is also the first Yoga Alliance Registered Yoga School in North Luzon.</p>
          <p>At Kaya, we put our students first. We speak their language. We teach yoga with the student's needs in mind. We respect each student's unique anatomical structure and work with their personal goals. We grow with our students.</p>
          <div class="k_aboutus_btn">
            <button class="k_btn" type="button" @click="GoToMethods($event, '#contactus', 'jgc')">JOIN GROUP CLASS</button>
            <button class="k_btn" type="button" @click="GoToMethods($event, '#contactus', 'pcp')">PRIVATE CLASS PLEASE</button>
          </div>
          <div class="k_social_top">
            <a href="https://www.facebook.com/kayayogaph" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.55" height="22.623" viewBox="0 0 10.55 22.623"><defs><style>.a{fill:#171717;}</style></defs><path class="a" d="M173.443,225.73v-4.548h2.218c0-.553-.022-1.05.005-1.545a10.794,10.794,0,0,1,.182-1.928,4.076,4.076,0,0,1,4.07-3.308c1.28-.071,2.568-.013,3.852-.011a.527.527,0,0,1,.133.044v3.839h-2.236c-.96,0-1.265.3-1.268,1.256,0,.487,0,.974,0,1.46a1.238,1.238,0,0,0,.03.168h3.558l-.415,4.55h-3.34v11.282H175.7V225.73Z" transform="translate(-173.443 -214.365)"/></svg>
            </a>
            <a href="https://www.instagram.com/kayayogaph/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="22.768" height="22.747" viewBox="0 0 22.768 22.747"><defs><style>.a{fill:#171717;}</style></defs><path class="a" d="M196.6,300.354c1.257,0,2.515-.017,3.772.005a11.21,11.21,0,0,1,3.092.367,5.853,5.853,0,0,1,4.256,4.666,14.626,14.626,0,0,1,.24,3.059q.021,3.268,0,6.537a15.889,15.889,0,0,1-.234,3.043,5.906,5.906,0,0,1-4.8,4.814,11.238,11.238,0,0,1-1.946.209c-1.772.038-3.546.039-5.319.041q-1.764,0-3.528-.036a8.352,8.352,0,0,1-3.151-.6,5.782,5.782,0,0,1-3.417-3.949,8.993,8.993,0,0,1-.314-2.349c-.024-2.289-.049-4.577-.052-6.866,0-.926.03-1.854.095-2.778a6.786,6.786,0,0,1,1.08-3.4,5.951,5.951,0,0,1,3.843-2.527,13.1,13.1,0,0,1,2.572-.236C194.066,300.34,195.335,300.354,196.6,300.354Zm-9.38,11.369h.016c0,.382,0,.765,0,1.147a38.793,38.793,0,0,0,.143,4.323,4.441,4.441,0,0,0,.682,1.982,4.031,4.031,0,0,0,3.107,1.76,19.442,19.442,0,0,0,2.028.112c2.468.009,4.937.012,7.4-.015a10.425,10.425,0,0,0,2-.207,3.764,3.764,0,0,0,3.047-2.862,9.346,9.346,0,0,0,.261-2.357c.027-1.489.034-2.978.038-4.467a45.514,45.514,0,0,0-.14-4.844,4.5,4.5,0,0,0-.61-1.9,3.965,3.965,0,0,0-3.125-1.877,20.437,20.437,0,0,0-2.27-.133q-3.7-.011-7.405.034a9.417,9.417,0,0,0-1.858.207,3.76,3.76,0,0,0-2.976,2.746,8.394,8.394,0,0,0-.284,2.284C187.252,309.011,187.242,310.368,187.224,311.723Z" transform="translate(-185.207 -300.348)"/><path class="a" d="M216.895,326.148a5.846,5.846,0,1,1-5.851,5.763A5.843,5.843,0,0,1,216.895,326.148Zm-3.814,5.84a3.808,3.808,0,1,0,3.82-3.807A3.809,3.809,0,0,0,213.081,331.988Z" transform="translate(-205.506 -320.618)"/><path class="a" d="M261.644,321.439a1.365,1.365,0,1,1,1.369-1.368A1.374,1.374,0,0,1,261.644,321.439Z" transform="translate(-244.186 -314.774)"/></svg>
            </a>
          </div> 
        </div> 
        <div class="k_aboutus_carousel">
          <VueSlickCarousel v-bind="CommonSettings">
            <div class="k_img_cont" v-for="list in AboutUsSlider" :key="list.id">
              <v-lazy-image
                :src="'img/about_us/'+list.src"
                :src-placeholder="'img/about_us/'+list.src"
                class="k_slide_img v-lazy-image-loaded"
              />
            </div>
            
            <template #prevArrow>
              <div class="custom-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68"><defs><style>.a{fill:#fff;}.b{fill:none;stroke:#c41967;stroke-width:3px;}</style></defs><g transform="translate(-226 -3363)"><circle class="a" cx="34" cy="34" r="34" transform="translate(226 3363)"/><path class="b" d="M366.127,3352l-11.974,11.974,11.974,11.974" transform="translate(-100.153 32.693)"/></g></svg>
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68"><defs><style>.a{fill:#fff;}.b{fill:none;stroke:#c41967;stroke-width:3px;}</style></defs><g transform="translate(-1079 -3363)"><circle class="a" cx="34" cy="34" r="34" transform="translate(1147 3431) rotate(180)"/><path class="b" d="M366.127,3352l-11.974,11.974,11.974,11.974" transform="translate(1473.153 6761.307) rotate(180)"/></g></svg>
              </div>
            </template>
          </VueSlickCarousel>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  props: ['GoToMethods'],
  data(){
    return {
      CommonSettings: {
        "lazyLoad": "ondemand",
        "dots": true,
        "fade": true,
        "autoplay": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "prevArrow": '.k_arr_left',
        "nextArrow": '.k_arr_right'
      },
      AboutUsSlider: [
        { id: 1, src: 'about_slide_1.png' },
        { id: 2, src: 'about_slide_2.png' },
        { id: 3, src: 'about_slide_3.png' },
        { id: 4, src: 'about_slide_4.png' },
        { id: 5, src: 'about_slide_5.png' }
      ],
    }
  }
}
</script>

<style>

</style>