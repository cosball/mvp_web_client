<template>
  <div class="landing-footer-wrapper">
    <div class="footer">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col col lg="5" cols="12" md="auto">
            <!--
            <b-nav>
              <b-nav-item @click="faq">FAQ</b-nav-item>
              <b-nav-item @click="contact">Contact Us</b-nav-item>
              <b-nav-item @click="termsConditions">Terms &amp; Conditions</b-nav-item>
              <b-nav-item @click="privacy">Privacy Policy</b-nav-item>
            </b-nav>
            -->
          </b-col>
          <b-col col lg="4" cols="12" md="auto">
            <!--
            <div class="footer-btn">
              <custom-button @click="login" :inverseColor="true">Login</custom-button>
              <custom-button @click="signUp" :inverseColor="false">
                <div slot="contentLeft" class="icon-custom"></div>Sign Up
              </custom-button>
            </div>
            -->
          </b-col>
          <b-col lg="3" cols="12" md="auto">
            <div class="cosball-emblem"></div>
            <p>
              &copy; Copyright {{year}}
              <b>JISTD LTD.</b>
              <br />
              <span>All trademarks and copyrights belong to JISTD LTD.</span>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script src="./LandingFooter.js" />
<style src="./LandingFooter.scss" lang="scss" />
