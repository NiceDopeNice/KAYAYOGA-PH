<template>
  <transition name="fade">
    <section>
        <div class="k_teacher_tra_cont" id="teacher_training">
            <h4>KAYA YOGA</h4>
            <h1>Teacher Training</h1>
            <p>Want to deepen your yoga practice? Exploring the possibility of becoming a credible yoga teacher? 
                Sign up for the <span>Yoga Alliance-credentialed 200HR Kaya Yoga Teacher Training</span> today!
            </p>
            <div class="k_three_typ">
                <div class="k_type">
                <img src="img/fundamentals.png" alt="">
                <p>Know the fundamentals of yoga and understand why yoga is not one-size-fits-all practice.</p>
                </div>
                <div class="k_type">
                <img src="img/philosophy.png" alt="">
                <p>Learn about yoga philosophy, anatomy, and discover the intricacies of safe yoga sequencing with us!</p>
                </div>
                <div class="k_type">
                <img src="img/ethics.png" alt="">
                <p>We also cover the business side of yoga, ethics and so much more.</p>
                </div>
            </div>
        </div>

        <div class="k_teacher_tra_slider">
            <div class="k_tra_cont">
                <div class="k_tra_left">
                    <img src="img/alliance_logo.png" alt="">
                    <img src="img/rys_logo.png" alt="">
                    <p>
                    Our Yoga Alliance-credentialed teacher training program is one that not only certifies you as a Yoga Alliance Registered Teacher, but enables you to become a better practitioner as well. In-person and virtual teacher trainings are available.
                    </p>  
                    <p>If you’re waiting for a sign, then this is it.</p>
                    
                    <div class="k_contact_btn">
                    <button class="k_btn" type="button" @click="GoToMethods($event, '#contactus', 'jtt')">JOIN US</button>
                    </div>
                </div>
                <div class="k_tra_right">
                    <VueSlickCarousel v-bind="CommonSettings">

                    <div class="k_img_cont" v-for="list in TeacherTrainingSlider" :key="list.id">
                        <v-lazy-image
                        :src="'img/teacher_training/'+list.src"
                        :src-placeholder="'img/teacher_training/'+list.src"
                        class="k_slide_img v-lazy-image-loaded"
                        />
                    </div>

                    <template #prevArrow>
                        <div class="custom-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.862" height="35.481" viewBox="0 0 19.862 35.481"><defs><style>.a{fill:none;stroke:#fff;stroke-width:3px;}</style></defs><path class="a" d="M761.333,2760.667l-16.68,16.68,16.68,16.68" transform="translate(-742.532 -2759.606)"/></svg>
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="custom-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.862" height="35.481" viewBox="0 0 19.862 35.481"><defs><style>.a{fill:none;stroke:#fff;stroke-width:3px;}</style></defs><path class="a" d="M761.333,2760.667l-16.68,16.68,16.68,16.68" transform="translate(762.394 2795.087) rotate(180)"/></svg>
                        </div>
                    </template>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
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
        TeacherTrainingSlider: [
            { id: 1, src: 'training_1.png' },
            { id: 2, src: 'training_2.png' },
            { id: 3, src: 'training_3.png' },
            { id: 4, src: 'training_4.png' },
            { id: 5, src: 'training_5.png' }
        ]
    }
  }
}
</script>

<style>

</style>