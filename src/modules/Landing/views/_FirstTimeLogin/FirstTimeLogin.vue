<template>
  <LayoutContainer class="first-time-login-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container id="title-container" class="cosball-content">
        <b-row class="justify-content-md-center">
          <b-col lg="12">
            <b-row class="justify-content-md-center">
              <b-col lg="2">
                <div class="cosball-emblem"></div>
              </b-col>
              <b-col lg="5">
                <h1>First Time Login</h1>
                <p>Please change your password</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="mt-5">
            <b-row>
              <b-col lg="12">
                <div class="mb-2 mt-2">
                  <label class="mr-sm-2">
                    Temporary Password
                    <span class="required">*</span>
                  </label>
                  <b-input
                    type="password"
                    v-validate="'required'"
                    data-vv-as="Temporary Password"
                    v-model="inputs.setNewPassword.temporaryPassword"
                    maxlength="30"
                    placeholder="Your Temporary Password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="temporaryPassword"
                  ></b-input>
                  <span class="error">{{errors.first('temporaryPassword')}}</span>
                </div>
              </b-col>
              <b-col lg="12">
                <div class="mb-2 mt-2">
                  <label class="mr-sm-2">
                    New Password
                    <span class="required">*</span>
                  </label>
                  <b-input
                    type="password"
                    v-validate="'required|min:12'"
                    data-vv-as="New Password"
                    v-model="inputs.setNewPassword.newPassword"
                    maxlength="40"
                    placeholder="Your New Password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="newPassword"
                    ref="newPassword"
                  ></b-input>
                  <span class="error">{{errors.first('newPassword')}}</span>
                </div>
              </b-col>
              <b-col lg="12">
                <div class="mb-2 mt-2">
                  <label class="mr-sm-2">
                    Confirm Password
                    <span class="required">*</span>
                  </label>
                  <b-input
                    type="password"
                    v-validate="'required|confirmed:newPassword|min:12'"
                    data-vv-as="Confirm Password"
                    v-model="inputs.setNewPassword.confirmPassword"
                    maxlength="40"
                    placeholder="Confirm Password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="confirmPassword"
                  ></b-input>
                  <span class="error">{{errors.first('confirmPassword')}}</span>
                </div>
              </b-col>
            </b-row>
            <b-row class="offset-md-3 offset-sm-3 my-md-3 mb-md-n1">
              <b-col>
                <div class="g-recaptcha">
                  <vue-recaptcha ref="recaptcha" @expired="onVerify('')" @verify="onVerify" :sitekey="recaptcha_sitekey"></vue-recaptcha>
                </div>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col cols="12" md="6" class="mt-sm-2">
                  <custom-button
                    v-bind:class="{ 'disabled': !isComplete }"
                    class="submit-button"
                    @click="submitPassword"
                    :inverseColor="true"
                  >Submit</custom-button>
              </b-col>
              <b-col  cols="12" md="6" class="mt-4 mt-md-2">
                  <custom-button
                    class="cancel-button"
                    @click="goToLanding"
                    :inverseColor="false"
                  >Cancel</custom-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./FirstTimeLogin.js" />
<style src="./FirstTimeLogin.scss" lang="scss" />
