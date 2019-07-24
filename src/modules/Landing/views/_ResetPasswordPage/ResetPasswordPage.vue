<template>
  <LayoutContainer class="reset-password-page-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container class="cosball-content">
        <b-row class="justify-content-md-left">
          <b-col lg="12">
            <div @click="goToLanding" class="header-logo"></div>
          </b-col>
          <b-col lg="7">
            <h1 class="mt-5">Reset your password</h1>
            <!-- <p>You have requested to reset the password for:</p>
            <p>yourmail@email.com</p> -->
            <b-row class="mt-5">
              <b-col>
                <div class="mb-2">
                  <label class="mr-sm-2">
                    New Password
                    <span class="required">*</span>
                  </label>
                  <b-input
                    type="password"
                    v-validate="'required|min:12'"
                    data-vv-as="New Password"
                    v-model="inputs.resetPassword.newPassword"
                    maxlength="40"
                    placeholder="Your New Password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="newPassword"
                    ref="newPassword"
                  ></b-input>
                  <span class="error">{{errors.first('newPassword')}}</span>
                </div>
              </b-col>
              <b-col>
                <div class="mb-2">
                  <label class="mr-sm-2">
                    Confirm Password
                    <span class="required">*</span>
                  </label>
                  <b-input
                    type="password"
                    v-validate="'required|confirmed:newPassword|min:12'"
                    data-vv-as="Confirm Password"
                    v-model="inputs.resetPassword.confirmPassword"
                    maxlength="40"
                    placeholder="Confirm Your Password"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="confirmPassword"
                  ></b-input>
                  <span class="error">{{errors.first('confirmPassword')}}</span>
                </div>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-left">
              <b-col>
                <custom-button
                  v-bind:class="{ 'disabled': !isComplete }"
                  class="add-button"
                  @click="passwordResetMessage"
                  :inverseColor="true"
                >Change Your Password</custom-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="5">
            <div class="icon">
              <font-awesome-icon icon="unlock-alt"/>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./ResetPasswordPage.js" />
<style src="./ResetPasswordPage.scss" lang="scss" />
