<template>
  <transition name="fade">
    <section>

      <HeaderAnnouncement 
        :GoToMethods="GoTo" 
        :GoToAnnouncementMethods="GoToAnnouncement" 
        :Loading="Loading" 
        :ToggleMobileSidebar="ToggleMobileSidebar"
        :AnnouncementCont="AnnouncementCont" 
        :CloseContainer="CloseContainer"
      />

      <div class="k_container" v-if="!Loading">

        <!-- ABOUT US -->
        <AboutUs :GoToMethods="GoTo" />
        
        <!-- What We Practice -->
        <WhatWePractice />

        <!-- Teacher Training -->
        <TeacherTraining :GoToMethods="GoTo" />

        <!-- KAYA YOGA RETREAT -->
        <Retreat />

        <!-- MEET HONEYBEE -->
        <MeetHoneybee />

        <!-- CONTACT US -->
        <ContactUs :Loading='Loading' />

        <!-- FOOTER -->
        <div class="k_footer">
          <div class="k_go_top" @click="GoTo($event, '#top')">
            <img src="img/go_top.png" alt="">
            <h4>Back to Top</h4>
          </div>
          <p>&#169; Copyright 2020 Kaya Yoga Studio</p>
          <!-- <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=2fPkblcG7YTWI4O0iSwgA8dX2dcMAKx5NcIswlslrIro9X2FqNbcWuru3UAS"></script></span> -->
        </div>

      </div>

    </section>
  </transition>
</template>

<script>

import HeaderAnnouncement from "~/components/HeaderAnnouncementPage";
import AboutUs from "~/components/AboutUsPage";
import WhatWePractice from "~/components/WhatWePracticePage";
import TeacherTraining from "~/components/TeacherTrainingPage";
import Retreat from "~/components/RetreatPage";
import MeetHoneybee from "~/components/MeetHoneybeePage";
import ContactUs from "~/components/ContactUsPage";

export default {
    components: { HeaderAnnouncement, AboutUs, WhatWePractice, TeacherTraining, Retreat, MeetHoneybee, ContactUs },
    data(){
      return { 
        Loading: true,
        AnnouncementCont: true,
        ToggleMobileSidebar: false
      }
    },
    mounted() {
      setTimeout(() => { 
        this.Loading = false;
      }, 500);
    },
    methods:{
      GoTo(event, section, subject = false, mobile = false){
        $('.k_select option:selected').removeAttr('selected');

        // If Clicked Button
        if(subject){
          $(".k_select option[value='"+subject+"']").attr("selected", true);
        }
        // Action Only in Mobile
        if(mobile){
          this.ToggleMobileSidebar = !this.ToggleMobileSidebar; 
          $(".k_mob_list_cont a").removeClass("active");
          $(event.target).addClass("active");
          setTimeout(() => {
            this.$scrollTo(section, 1000, { easing: 'ease-in-out' })
          }, 300);
        }else{
          $(".k_nav a").removeClass("active");
          $(event.target).addClass("active");
          this.$scrollTo(section, 800, { easing: 'ease-in-out' })
        }
      },
      GoToAnnouncement(section, subject){
        this.AnnouncementCont = false;
        $('.k_select option:selected').removeAttr('selected');
        $(".k_select option[value='"+subject+"']").attr("selected", true);
        setTimeout(() => {
            this.$scrollTo(section, 1000, { easing: 'ease-in-out' })
        }, 300);
      },
      CloseContainer(type, status){
        switch(type){
          case 'announcement': this.AnnouncementCont = false; break;
          case 'mobile_sidebar': 
            if(status){
              this.ToggleMobileSidebar = true; 
            }else{
              this.ToggleMobileSidebar = false; 
            }
          break;
          default: break;
        }
      },
    }
  }
</script>

<style scoped>
  .v-lazy-image {
    filter: blur(20px);
    transition: filter 1.6s;
    will-change: filter;
  }
  .v-lazy-image-loaded  { 
    filter: blur(0);
  }
</style>