<template>
    <section>
        <!-- ANNOUNCEMENT -->
        <div class="k_announce_cont" v-if="AnnouncementCont && !Loading">
            <div class="k_announce_holder">
                <div class="k_announce_main">
                <v-lazy-image
                    src="img/announcement.png"
                    src-placeholder="img/announcement.png"
                    class="v-lazy-image-loaded"
                />
                    <div class="k_announce_body">
                    <h1>Online Classes and Trainings are Available</h1>
                    <div class="k_announce_btn">
                        <button type="button" class="k_btn" @click="GoToAnnouncementMethods('#contactus', 'jgc')">JOIN GROUP CLASS</button>
                        <button type="button" class="k_btn" @click="GoToAnnouncementMethods('#contactus', 'pcp')">PRIVATE CLASS PLEASE</button>
                    </div>
                    </div>
                </div>
                <div class="k_announce_close" @click="CloseContainer('announcement')">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.914" height="39.914" viewBox="0 0 39.914 39.914"><defs><style>.a{fill:none;stroke:#fff;stroke-width:2px;}</style></defs><g transform="translate(-206.793 -42.793)"><line class="a" x1="38.5" y2="38.5" transform="translate(207.5 43.5)"/><line class="a" x2="38.5" y2="38.5" transform="translate(207.5 43.5)"/></g></svg>
                </div>
            </div>
        </div>
        
        <!-- NAVIGATION WEB AND MOBILE -->
        <div class="k_header" id="top" v-if="!Loading">
            <div class="k_main_h">
                <div class="k_logo">
                <img src="img/kaya_logo.png" alt="" @click="GoToMethods($event, '#top')">
                </div>
                <div class="k_nav">
                <ul>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#aboutUs')">ABOUT US</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#classes')">CLASSES</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#teacher_training')">TEACHER TRAINING</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#retreat')">RETREAT</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#honeybee')">MEET HONEYBEE</a></li>
                </ul>
                </div>
                <div class="k_mobile_ham" @click="CloseContainer('mobile_sidebar', true)">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="k_contact_btn">
                <button class="k_btn" type="button" @click="GoToMethods($event, '#contactus', 'inq')">CONTACT US</button>
                </div>
            </div>

            <!-- MOBILE SIDEBAR -->
            <div class="k_header_mob" :class="(ToggleMobileSidebar) ? 'open':''">
                <div class="k_mob_header">
                <img src="img/kaya_logo.png" alt="" @click="GoToMethods($event, '#top')" >
                <div class="k_close" @click="CloseContainer('mobile_sidebar')"></div>
                </div> 
                <div class="k_mob_list_cont">
                <ul>
                    <li><a href="javascript:;" class="active" @click="GoToMethods($event, '#aboutUs', false, true)">ABOUT US</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#classes', false, true)">CLASSES</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#teacher_training', false, true)">TEACHER TRAINING</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#retreat', false, true)">RETREAT</a></li>
                    <li><a href="javascript:;" @click="GoToMethods($event, '#honeybee', false, true)">MEET HONEYBEE</a></li>
                </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        Loading: Boolean,
        ToggleMobileSidebar: Boolean,
        AnnouncementCont: Boolean,
        GoToMethods: Function,
        GoToAnnouncementMethods: Function,
        CloseContainer: Function
    }
}
</script>

<style>

</style>