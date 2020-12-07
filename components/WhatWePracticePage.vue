<template>
  <transition name="fade">
    <div class="k_what_we_practice" id="classes">
        <!-- GALLERY LIST -->
        <div class="k_thumb vinyasa" v-viewer>
        <v-lazy-image
            v-for="src in GalleryVinyasa" :key="src" 
            :src="'img/gallery/kaya_vinyasa/'+src"
            :src-placeholder="'img/gallery/kaya_vinyasa/'+src"
            class="v-lazy-image-loaded"
        />
        </div> 
        <div class="k_thumb yin" v-viewer>
        <v-lazy-image
            v-for="src in GalleryYin" :key="src" 
            :src="'img/gallery/kaya_yin/'+src"
            :src-placeholder="'img/gallery/kaya_yin/'+src"
            class="v-lazy-image-loaded"
        />
        </div> 
        <div class="k_thumb ashtanga" v-viewer>
        <v-lazy-image
            v-for="src in GalleryAshtanga" :key="src" 
            :src="'img/gallery/kaya_ashtanga/'+src"
            :src-placeholder="'img/gallery/kaya_ashtanga/'+src"
            class="v-lazy-image-loaded"
        />
        </div> 
        <div class="k_thumb kids_yoga" v-viewer>
        <v-lazy-image
            v-for="src in GallerykidsYoga" :key="src" 
            :src="'img/gallery/kids_yoga/'+src"
            :src-placeholder="'img/gallery/kids_yoga/'+src"
            class="v-lazy-image-loaded"
        />
        </div> 
        <div class="k_thumb kids_special" v-viewer>
        <v-lazy-image
            v-for="src in GalleryKidsSpecial" :key="src" 
            :src="'img/gallery/kids_yoga_ed/'+src"
            :src-placeholder="'img/gallery/kids_yoga_ed/'+src"
            class="v-lazy-image-loaded"
        />
        </div> 

        <div class="k_what_we_list">
        <div class="k_what_we_first">
            <img src="img/flower.png" alt="">
            <h4>OUR CLASSES</h4>
            <h1>What We Practice</h1>
            <p>Our classes are varied to suit the students' needs. We have from alignment-based to fast-paced and slow flow classes.</p>
            <p>Come build your foundation with us. Practice efficiently and safely with Kaya Yoga.</p>
        </div>
        </div>

        <div class="k_what_we_list">
        <v-lazy-image
            src="img/kaya_vinyasa.png"
            src-placeholder="img/kaya_vinyasa.png"
            class="k_what_we_img v-lazy-image-loaded"
        />
        <svg @click="GalleryShow('vinyasa')" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><defs><style>.a{fill:#c41967;}.b{fill:#fff;}</style></defs><g transform="translate(-511 -864)"><circle class="a" cx="26" cy="26" r="26" transform="translate(511 864)"/><g transform="translate(261.667 817.565)"><g transform="translate(262 60)"><path class="b" d="M280.682,61.045a2.211,2.211,0,0,1,2.208,2.208V78.682a2.211,2.211,0,0,1-2.208,2.208H265.253a2.211,2.211,0,0,1-2.208-2.208V63.253a2.211,2.211,0,0,1,2.208-2.208h15.429m0-1.045H265.253A3.253,3.253,0,0,0,262,63.253V78.682a3.253,3.253,0,0,0,3.253,3.253h15.429a3.253,3.253,0,0,0,3.253-3.253V63.253A3.253,3.253,0,0,0,280.682,60Z" transform="translate(-262 -60)"/></g><g transform="translate(266.107 61.05)"><path class="b" d="M293.688,87.071a3.851,3.851,0,0,1-.45-.027L277.727,84.9l.143-1.035,15.5,2.142a2.733,2.733,0,0,0,3.025-2.39L298.223,68.3a2.734,2.734,0,0,0-2.389-3.035l-1.4-.208.154-1.033,1.385.207a3.776,3.776,0,0,1,3.287,4.194l-1.826,15.321A3.781,3.781,0,0,1,293.688,87.071Z" transform="translate(-277.727 -64.022)"/></g><g transform="translate(275.709 63.525)"><path class="b" d="M316.85,78.2a2.35,2.35,0,1,1,2.35-2.35A2.353,2.353,0,0,1,316.85,78.2Zm0-3.656a1.306,1.306,0,1,0,1.306,1.306A1.307,1.307,0,0,0,316.85,74.545Z" transform="translate(-314.5 -73.5)"/></g><g transform="translate(262 67.051)"><path class="b" d="M283.413,97.968a.521.521,0,0,1-.4-.187l-4.2-5.023L275.9,95.968a.543.543,0,0,1-.405.171.522.522,0,0,1-.392-.2l-5.964-7.575L262.932,96.2a.522.522,0,1,1-.818-.649l6.621-8.356a.522.522,0,0,1,.409-.2h0a.522.522,0,0,1,.409.2l5.991,7.609,2.9-3.2a.505.505,0,0,1,.4-.172.522.522,0,0,1,.39.188l4.582,5.484a.522.522,0,0,1-.4.857Z" transform="translate(-262 -87)"/></g></g></g></svg>  
        <div class="k_what_we_desc" @mouseenter="ClassesDescToggle($event,'enter')" @mouseleave="ClassesDescToggle($event,'leave')">
            <div class="k_what_we_title">Kaya Vinyasa</div>
            <div class="k_what_we_p">Kaya Vinyasa is a dynamic series of vinyasa classes that focus on the basics while allowing the students to discover their physical strength and potential. Our classes offer varying asanas depending on the practitioners’ needs. And of course, there’s always the ‘Peak Pose’.</div>
        </div>
        </div>

        <div class="k_what_we_list">
        <v-lazy-image
            src="img/kaya_yin.png"
            src-placeholder="img/kaya_yin.png"
            class="k_what_we_img v-lazy-image-loaded"
        />
        <svg @click="GalleryShow('yin')" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><defs><style>.a{fill:#c41967;}.b{fill:#fff;}</style></defs><g transform="translate(-511 -864)"><circle class="a" cx="26" cy="26" r="26" transform="translate(511 864)"/><g transform="translate(261.667 817.565)"><g transform="translate(262 60)"><path class="b" d="M280.682,61.045a2.211,2.211,0,0,1,2.208,2.208V78.682a2.211,2.211,0,0,1-2.208,2.208H265.253a2.211,2.211,0,0,1-2.208-2.208V63.253a2.211,2.211,0,0,1,2.208-2.208h15.429m0-1.045H265.253A3.253,3.253,0,0,0,262,63.253V78.682a3.253,3.253,0,0,0,3.253,3.253h15.429a3.253,3.253,0,0,0,3.253-3.253V63.253A3.253,3.253,0,0,0,280.682,60Z" transform="translate(-262 -60)"/></g><g transform="translate(266.107 61.05)"><path class="b" d="M293.688,87.071a3.851,3.851,0,0,1-.45-.027L277.727,84.9l.143-1.035,15.5,2.142a2.733,2.733,0,0,0,3.025-2.39L298.223,68.3a2.734,2.734,0,0,0-2.389-3.035l-1.4-.208.154-1.033,1.385.207a3.776,3.776,0,0,1,3.287,4.194l-1.826,15.321A3.781,3.781,0,0,1,293.688,87.071Z" transform="translate(-277.727 -64.022)"/></g><g transform="translate(275.709 63.525)"><path class="b" d="M316.85,78.2a2.35,2.35,0,1,1,2.35-2.35A2.353,2.353,0,0,1,316.85,78.2Zm0-3.656a1.306,1.306,0,1,0,1.306,1.306A1.307,1.307,0,0,0,316.85,74.545Z" transform="translate(-314.5 -73.5)"/></g><g transform="translate(262 67.051)"><path class="b" d="M283.413,97.968a.521.521,0,0,1-.4-.187l-4.2-5.023L275.9,95.968a.543.543,0,0,1-.405.171.522.522,0,0,1-.392-.2l-5.964-7.575L262.932,96.2a.522.522,0,1,1-.818-.649l6.621-8.356a.522.522,0,0,1,.409-.2h0a.522.522,0,0,1,.409.2l5.991,7.609,2.9-3.2a.505.505,0,0,1,.4-.172.522.522,0,0,1,.39.188l4.582,5.484a.522.522,0,0,1-.4.857Z" transform="translate(-262 -87)"/></g></g></g></svg>
        <div class="k_what_we_desc" @mouseenter="ClassesDescToggle($event,'enter')" @mouseleave="ClassesDescToggle($event,'leave')">
            <div class="k_what_we_title">Kaya Yin</div>
            <div class="k_what_we_p">Want to reset and recharge? Kaya Yin is for you. Appreciate the beauty of stillness and embrace the magic of yoga props as you go deeper in to the postures.</div>
        </div>
        </div>

        <div class="k_what_we_list">
        <v-lazy-image
            src="img/ashtanga_mysore.png"
            src-placeholder="img/ashtanga_mysore.png"
            class="k_what_we_img v-lazy-image-loaded"
        />
        <svg @click="GalleryShow('ashtanga')" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><defs><style>.a{fill:#c41967;}.b{fill:#fff;}</style></defs><g transform="translate(-511 -864)"><circle class="a" cx="26" cy="26" r="26" transform="translate(511 864)"/><g transform="translate(261.667 817.565)"><g transform="translate(262 60)"><path class="b" d="M280.682,61.045a2.211,2.211,0,0,1,2.208,2.208V78.682a2.211,2.211,0,0,1-2.208,2.208H265.253a2.211,2.211,0,0,1-2.208-2.208V63.253a2.211,2.211,0,0,1,2.208-2.208h15.429m0-1.045H265.253A3.253,3.253,0,0,0,262,63.253V78.682a3.253,3.253,0,0,0,3.253,3.253h15.429a3.253,3.253,0,0,0,3.253-3.253V63.253A3.253,3.253,0,0,0,280.682,60Z" transform="translate(-262 -60)"/></g><g transform="translate(266.107 61.05)"><path class="b" d="M293.688,87.071a3.851,3.851,0,0,1-.45-.027L277.727,84.9l.143-1.035,15.5,2.142a2.733,2.733,0,0,0,3.025-2.39L298.223,68.3a2.734,2.734,0,0,0-2.389-3.035l-1.4-.208.154-1.033,1.385.207a3.776,3.776,0,0,1,3.287,4.194l-1.826,15.321A3.781,3.781,0,0,1,293.688,87.071Z" transform="translate(-277.727 -64.022)"/></g><g transform="translate(275.709 63.525)"><path class="b" d="M316.85,78.2a2.35,2.35,0,1,1,2.35-2.35A2.353,2.353,0,0,1,316.85,78.2Zm0-3.656a1.306,1.306,0,1,0,1.306,1.306A1.307,1.307,0,0,0,316.85,74.545Z" transform="translate(-314.5 -73.5)"/></g><g transform="translate(262 67.051)"><path class="b" d="M283.413,97.968a.521.521,0,0,1-.4-.187l-4.2-5.023L275.9,95.968a.543.543,0,0,1-.405.171.522.522,0,0,1-.392-.2l-5.964-7.575L262.932,96.2a.522.522,0,1,1-.818-.649l6.621-8.356a.522.522,0,0,1,.409-.2h0a.522.522,0,0,1,.409.2l5.991,7.609,2.9-3.2a.505.505,0,0,1,.4-.172.522.522,0,0,1,.39.188l4.582,5.484a.522.522,0,0,1-.4.857Z" transform="translate(-262 -87)"/></g></g></g></svg>
        <div class="k_what_we_desc" @mouseenter="ClassesDescToggle($event,'enter')" @mouseleave="ClassesDescToggle($event,'leave')">
            <div class="k_what_we_title">Ashtanga Mysore</div>
            <div class="k_what_we_p">Learn non-traditional Ashtanga and discover the beauty of Mysore style. Ashtanga Mysore class teaches students to become independent in their practice. A Teacher will be around to guide practitioners as they follow their own pace. Yoga props and modifications are allowed to support and enhance the student’s experience.</div>
        </div>
        </div>

        <div class="k_what_we_list">
        <v-lazy-image
            src="img/kids_yoga.png"
            src-placeholder="img/kids_yoga.png"
            class="k_what_we_img v-lazy-image-loaded"
        />
        <svg @click="GalleryShow('kids_yoga')" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><defs><style>.a{fill:#c41967;}.b{fill:#fff;}</style></defs><g transform="translate(-511 -864)"><circle class="a" cx="26" cy="26" r="26" transform="translate(511 864)"/><g transform="translate(261.667 817.565)"><g transform="translate(262 60)"><path class="b" d="M280.682,61.045a2.211,2.211,0,0,1,2.208,2.208V78.682a2.211,2.211,0,0,1-2.208,2.208H265.253a2.211,2.211,0,0,1-2.208-2.208V63.253a2.211,2.211,0,0,1,2.208-2.208h15.429m0-1.045H265.253A3.253,3.253,0,0,0,262,63.253V78.682a3.253,3.253,0,0,0,3.253,3.253h15.429a3.253,3.253,0,0,0,3.253-3.253V63.253A3.253,3.253,0,0,0,280.682,60Z" transform="translate(-262 -60)"/></g><g transform="translate(266.107 61.05)"><path class="b" d="M293.688,87.071a3.851,3.851,0,0,1-.45-.027L277.727,84.9l.143-1.035,15.5,2.142a2.733,2.733,0,0,0,3.025-2.39L298.223,68.3a2.734,2.734,0,0,0-2.389-3.035l-1.4-.208.154-1.033,1.385.207a3.776,3.776,0,0,1,3.287,4.194l-1.826,15.321A3.781,3.781,0,0,1,293.688,87.071Z" transform="translate(-277.727 -64.022)"/></g><g transform="translate(275.709 63.525)"><path class="b" d="M316.85,78.2a2.35,2.35,0,1,1,2.35-2.35A2.353,2.353,0,0,1,316.85,78.2Zm0-3.656a1.306,1.306,0,1,0,1.306,1.306A1.307,1.307,0,0,0,316.85,74.545Z" transform="translate(-314.5 -73.5)"/></g><g transform="translate(262 67.051)"><path class="b" d="M283.413,97.968a.521.521,0,0,1-.4-.187l-4.2-5.023L275.9,95.968a.543.543,0,0,1-.405.171.522.522,0,0,1-.392-.2l-5.964-7.575L262.932,96.2a.522.522,0,1,1-.818-.649l6.621-8.356a.522.522,0,0,1,.409-.2h0a.522.522,0,0,1,.409.2l5.991,7.609,2.9-3.2a.505.505,0,0,1,.4-.172.522.522,0,0,1,.39.188l4.582,5.484a.522.522,0,0,1-.4.857Z" transform="translate(-262 -87)"/></g></g></g></svg>
        <div class="k_what_we_desc" @mouseenter="ClassesDescToggle($event,'enter')" @mouseleave="ClassesDescToggle($event,'leave')">
            <div class="k_what_we_title">Kids Yoga</div>
            <div class="k_what_we_p">Kids need a break. Our Kids Yoga class is designed to allow our children to move mindfully while they ‘play’. Our classes are customized according to what the child needs. We let them lead the class, too!</div>
        </div>
        </div>

        <div class="k_what_we_list">
        <v-lazy-image
            src="img/kids_yoga_special.png"
            src-placeholder="img/kids_yoga_special.png"
            class="k_what_we_img v-lazy-image-loaded"
        />
        <svg @click="GalleryShow('kids_special')" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><defs><style>.a{fill:#c41967;}.b{fill:#fff;}</style></defs><g transform="translate(-511 -864)"><circle class="a" cx="26" cy="26" r="26" transform="translate(511 864)"/><g transform="translate(261.667 817.565)"><g transform="translate(262 60)"><path class="b" d="M280.682,61.045a2.211,2.211,0,0,1,2.208,2.208V78.682a2.211,2.211,0,0,1-2.208,2.208H265.253a2.211,2.211,0,0,1-2.208-2.208V63.253a2.211,2.211,0,0,1,2.208-2.208h15.429m0-1.045H265.253A3.253,3.253,0,0,0,262,63.253V78.682a3.253,3.253,0,0,0,3.253,3.253h15.429a3.253,3.253,0,0,0,3.253-3.253V63.253A3.253,3.253,0,0,0,280.682,60Z" transform="translate(-262 -60)"/></g><g transform="translate(266.107 61.05)"><path class="b" d="M293.688,87.071a3.851,3.851,0,0,1-.45-.027L277.727,84.9l.143-1.035,15.5,2.142a2.733,2.733,0,0,0,3.025-2.39L298.223,68.3a2.734,2.734,0,0,0-2.389-3.035l-1.4-.208.154-1.033,1.385.207a3.776,3.776,0,0,1,3.287,4.194l-1.826,15.321A3.781,3.781,0,0,1,293.688,87.071Z" transform="translate(-277.727 -64.022)"/></g><g transform="translate(275.709 63.525)"><path class="b" d="M316.85,78.2a2.35,2.35,0,1,1,2.35-2.35A2.353,2.353,0,0,1,316.85,78.2Zm0-3.656a1.306,1.306,0,1,0,1.306,1.306A1.307,1.307,0,0,0,316.85,74.545Z" transform="translate(-314.5 -73.5)"/></g><g transform="translate(262 67.051)"><path class="b" d="M283.413,97.968a.521.521,0,0,1-.4-.187l-4.2-5.023L275.9,95.968a.543.543,0,0,1-.405.171.522.522,0,0,1-.392-.2l-5.964-7.575L262.932,96.2a.522.522,0,1,1-.818-.649l6.621-8.356a.522.522,0,0,1,.409-.2h0a.522.522,0,0,1,.409.2l5.991,7.609,2.9-3.2a.505.505,0,0,1,.4-.172.522.522,0,0,1,.39.188l4.582,5.484a.522.522,0,0,1-.4.857Z" transform="translate(-262 -87)"/></g></g></g></svg>
        <div class="k_what_we_desc" @mouseenter="ClassesDescToggle($event,'enter')" @mouseleave="ClassesDescToggle($event,'leave')">
            <div class="k_what_we_title">Kids Yoga Special Ed</div>
            <div class="k_what_we_p">Kaya Yoga Special Ed proudly presents kids yoga classes designed for children with unique specificities. If your child is too shy or energetic to join a group class, then this is ideal for them. Upon request, classes may be taught by an Occupational Therapist who is also a Certified Yoga Instructor.</div>
        </div>
        </div>
    </div> 
  </transition>
</template>

<script>
export default {
    data(){
        return { 
            GalleryVinyasa: [
                'kaya_vinyasa_1.jpg',
                'kaya_vinyasa_3.jpg',
                'kaya_vinyasa_4.jpg',
                'kaya_vinyasa_6.jpg',
                'kaya_vinyasa_7.jpg'
            ],
            GalleryYin: [
                'kaya_yin_1.jpg',
                'kaya_yin_2.jpg',
                'kaya_yin_3.jpg',
                'kaya_yin_4.jpg',
                'kaya_yin_5.jpg',
                'kaya_yin_6.jpg',
                'kaya_yin_7.jpg',
                'kaya_yin_8.jpg'
            ],
            GalleryAshtanga: [
                'kaya_ashtanga_1.jpg',
                'kaya_ashtanga_2.jpg',
                'kaya_ashtanga_3.jpg',
                'kaya_ashtanga_4.jpg',
                'kaya_ashtanga_5.jpg',
                'kaya_ashtanga_6.jpg',
                'kaya_ashtanga_7.jpg',
                'kaya_ashtanga_8.jpg',
                'kaya_ashtanga_9.jpg',
                'kaya_ashtanga_10.jpg',
                'kaya_ashtanga_11.jpg',
                'kaya_ashtanga_12.jpg',
                'kaya_ashtanga_13.jpg',
                'kaya_ashtanga_14.jpg',
                'kaya_ashtanga_15.jpg'
            ],
            GallerykidsYoga: ['kidsyoga_1.jpg','kidsyoga_2.jpg','kidsyoga_3.jpg','kidsyoga_4.png'],
            GalleryKidsSpecial: ['kidsyogaED_1.jpg','kidsyogaED_2.jpg','kidsyogaED_3.jpg','kidsyogaED_4.jpg']
        }
    },
    methods: {
        GalleryShow (selecterClass) {
            const viewer = this.$el.querySelector('.'+selecterClass).$viewer
            viewer.show()
        },
        ClassesDescToggle(event,type){
            const ths = $(event.target).closest('.k_what_we_list').find('.k_what_we_desc');
            if(type == 'enter'){
                ths.addClass('open_desc');
            }else{
                ths.removeClass('open_desc');
            }
        }
    }
}
</script>

<style>

</style>