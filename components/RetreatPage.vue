<template>
  <transition name="fade">
    <div class="k_retreat" id="retreat">
        <VueSlickCarousel v-bind="RetreatSettings">

        <div class="k_img_cont" v-for="list in RetreatSlider" :key="list.id">
            <v-lazy-image
            :src="'img/retreat/'+list.src"
            :src-placeholder="'img/retreat/'+list.src"
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

        <div class="k_retreat_desc">
        <h4>KAYA YOGA</h4>
        <h1>Retreat</h1>
        <p>
            Kaya Yoga Retreat redefines yoga retreat as we know it. We keep it real. We keep it raw. And we do it for the awesome people of the Palaui Island. Whilst we take a break to find ourselves in this beautiful remote island, we immerse ourselves and surrender to nature. Let’s disconnect to reconnect better.
        </p>
        <p>
          Have another island home that you wish us to explore? Message us and let’s get moving.
        </p>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
        RetreatSettings: {  
          "centerMode": true,
          "dots": true,
          "centerPadding": "200px",
          "infinite": true,
          "slidesToShow": 1,
          "speed": 500,
          "prevArrow": '.k_arr_left',
          "nextArrow": '.k_arr_right',
          responsive: [{
            breakpoint: 1024,
            settings: {
              "centerMode": true,
              "centerPadding": "40px",
              "slidesToShow": 1,
            }
          },{
            breakpoint: 500,
            settings: {
              "centerMode": true,
              "centerPadding": "20px",
              "slidesToShow": 1,
            }
          },{
            breakpoint: 400,
            settings: {
              "centerMode": true,
              "centerPadding": "10px",
              "slidesToShow": 1,
            }
          }]
        },
        RetreatSlider: [
          { id: 1, src: 'retreat_1.png' },
          { id: 2, src: 'retreat_2.png' },
          { id: 3, src: 'retreat_3.png' },
          { id: 4, src: 'retreat_4.png' },
          { id: 5, src: 'retreat_5.png' },
          { id: 6, src: 'retreat_6.png' },
          { id: 8, src: 'retreat_8.png' },
          { id: 9, src: 'retreat_9.png' }
        ],
    }
  }
}
</script>

<style>

</style>