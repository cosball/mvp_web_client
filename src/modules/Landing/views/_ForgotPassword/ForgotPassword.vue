<template>
  <LayoutContainer class="forgot-password-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container class="cosball-content">
        <b-row class="justify-content-md-center">
          <b-col lg="7">
            <div class="header-logo"></div>
            <div class="mt-5">
              <p>
                Already a member?
                <b-link @click="goToLanding">Log in</b-link>
              </p>
            </div>
            <h1>Forgot your password?</h1>
            <p>Don't worry. Resetting your password is easy, just tell us the email address you registered</p>

            <div class="mt-5">
              <label class="mr-sm-2">
                Email Address
                <span class="required">*</span>
              </label>
              <b-input
                v-validate="'required|email'"
                data-vv-as="Email Address"
                v-model="inputs.forgotPassword.email"
                placeholder="Your email address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="email"
              ></b-input>
              <span class="error">{{errors.first('email')}}</span>
            </div>
            <div class="mt-4">
              <custom-button
                v-bind:class="{ 'disabled': !isComplete }"
                @click="submitButton"
                :inverseColor="true"
              >Submit</custom-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./ForgotPassword.js" />
<style src="./ForgotPassword.scss" lang="scss" />
