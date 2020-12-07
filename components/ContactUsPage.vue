<template>
    <transition name="fade">
        <section>
            <div class="k_contact_cont" id="contactus">
                <h1>Contact Us</h1>
                <div class="k_contact_main">
                <div class="k_contact_left">
                    <ValidationObserver v-slot="{ invalid }">
                    <ValidationProvider name="fullname" rules="required|alpha_spaces" v-slot="{ errors }">
                    <div class="k_contact_fg field">
                        <input type="input" v-model="fullname" class="k_contact_field" placeholder="Full Name" autocomplete="off" required />
                        <label for="name" class="form__label">Full Name</label>
                        <span id="error">{{ errors[0] }}</span>
                    </div>
                    </ValidationProvider>

                    <div class="k_contact_fg field">
                        <select name="k_subject" id="" class="k_contact_field k_select">
                        <option value="inq" selected>Inquiry</option>
                        <option value="jgc">Join Group Class</option>
                        <option value="pcp">Private Class Please</option>
                        <option value="jtt">Join Teacher Training</option>
                        <option value="fran">How To Franchise Kaya</option>
                        </select>
                        <i class="arrow down"></i>
                        <label for="name" class="form__label">Subject</label>
                    </div>
                    
                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                        <div class="k_contact_fg field">
                        <input type="input" name="k_email" v-model="email" class="k_contact_field" placeholder="Email Address" autocomplete="off" required />
                        <label for="name" class="form__label">Email Address</label> 
                        <span id="error">{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name="message" rules="required" v-slot="{ errors }">
                        <div class="k_contact_fg field">
                        <textarea name="k_message" v-model="message" cols="10" rows="10" class="k_contact_field k_ph_message" placeholder="What can we help you with?"></textarea>
                        <label for="name" class="form__label k_message">Message</label>
                        <span id="error">{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <div class="k_btn_hldr">
                        <button type="submit" class="k_btn" :class="(invalid) ? 'k_disabled':''" :disable="invalid" @click="SendMessage(invalid)">SEND MESSAGE</button>
                    </div>
                    </ValidationObserver>

                </div>

                <div class="k_contact_right">
                    <div class="k_contact_item">
                    <img src="img/location_icon.png" alt="">
                    10 Lecaros Street, Centro 01, Tuguegarao City 3500
                    </div>
                    <div class="k_contact_item">
                    <img src="img/phone_icon.png" alt="">
                    +63917989KAYA | +639179970801
                    </div>
                    <div class="k_contact_item">
                    <img src="img/fb_instagram_icon.png" alt="" style="width: 35px">
                    @kayayogaph
                    </div>
                    <div class="k_contact_item">
                    <img src="img/email_icon.png" alt="">
                    honeybee@kayayoga.ph
                    </div>
                </div>
                </div>
            </div>

            <!-- CONTACT US SUCCESS POPUP -->
            <div class="k_email_success" v-if="Success">
                <div class="k_email_succ">
                <img src="img/success_icon.png" alt="">
                <h1>Thank you!</h1>
                <p>We'll respond to your message shortly.</p>
                </div>
            </div>
                
            <!-- LOADING CONTACTUS-->
            <div class="k_loading_cont k_contact_body" v-if="ContactLoading">
                <div class="k_loading_main">
                <div class="k_loading"></div>
                <img src="img/kaya_logo.png" alt="">
                </div>
            </div>
            

            <!-- LOADING -->
            <div class="k_loading_cont k_contact_body" :class="(ContactLoading) ? 'k_contact_body':''"  v-if="Loading">
                <div class="k_loading_main">
                    <div class="k_loading"></div>
                    <v-lazy-image
                    src="img/kaya_logo.png"
                    src-placeholder="img/kaya_logo.png"
                    class="v-lazy-image-loaded"
                    />
                </div>
            </div>
        </section>  
    </transition>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, alpha_spaces } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Please enter a valid email address'
});

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Please enter a valid name'
});

export default {
    props: ['Loading'],
    components: { ValidationProvider, ValidationObserver },
    data(){
        return { 
            fullname: null,
            email: null,
            message: null,
            Success: false,
            ContactLoading: false,
        }
    },
    methods:{
      SendMessage(invalid) {
        const me = this;
        if(!invalid){
          me.ContactLoading = true;
          const formdata = new FormData();
          formdata.append("fullname", this.fullname);
          formdata.append("subject", $(".k_select option:selected").val());
          formdata.append("email", this.email);
          formdata.append("message", this.message);
          this.$axios.post('index.php', formdata)
          .then(function (res) {
            if(res.status == 200){
                me.ContactLoading = false;
                me.Success = true;
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
    }
}
</script>

<style>

</style>