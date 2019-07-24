<template>
  <div class="login-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="header" class="header">
        <button type="button" aria-label="Close" class="close" @click="closeModal">×</button>
        <div>
          <h5 class="modal-title">Login to your account</h5>
        </div>
      </div>
      <div slot="body" class="form-body">
        <div class="small-text d-flex">
          <p>Are you a new user? Click here to </p>
          <b-link @click="signUp">Sign Up</b-link>
        </div>
        <div class="mb-3 required error">*Denotes Required Field</div>
        <div class="mb-2">
          <label class="mr-sm-2">
            Email Address
            <span class="required">*</span>
          </label>
          <b-input
            autocomplete="off"
            v-validate="'required|email'"
            data-vv-as="Email Address"
            v-model="inputs.login.email_address"
            placeholder="Your email address"
            maxlength="30"
            class="mb-2 mr-sm-2 mb-sm-0"
            name="emailaddress"
          ></b-input>
          <span class="error">{{errors.first('emailaddress')}}</span>
        </div>
        <div class="mb-2">
          <label class="mr-sm-2">
            Password
            <span class="required">*</span>
          </label>
          <b-input
            autocomplete="off"
            type="password"
            v-validate="'required'"
            data-vv-as="Password"
            v-model="inputs.login.password"
            maxlength="30"
            placeholder="Password"
            class="mb-2 mr-sm-2 mb-sm-0"
            name="password"
          ></b-input>
          <span class="error">{{errors.first('password')}}</span>
        </div>
        <b-row class="justify-content-md-center">
          <b-col lg="12" class="ml-auto mr-auto mt-3">
            <div class="g-recaptcha">
              <vue-recaptcha ref="recaptcha" @expired="onVerify('')" @verify="onVerify" :sitekey="recaptcha_sitekey"></vue-recaptcha>
            </div>
          </b-col>
        </b-row>
      </div>
      <div slot="footer">
        <div class="button-container">
          <b-row class="justify-content-md-center">
            <b-col lg="12" class="ml-auto mr-auto">
              <custom-button
                v-bind:class="{ 'disabled': !isComplete }"
                class="add-button"
                @click="login"
                @enter="login"
                :inverseColor="true"
              >Login</custom-button>
            </b-col>
            <b-col lg="8" md="auto" class="ml-auto mr-auto text-center">
              <b-link class="small-text" @click="forgotPassword">Forgot your Password?</b-link>
            </b-col>
          </b-row>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script src="./LoginModal.js" />
<style src="./LoginModal.scss" lang="scss" />
