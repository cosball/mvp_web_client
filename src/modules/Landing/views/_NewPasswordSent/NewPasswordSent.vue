<template>
  <LayoutContainer class="new-password-sent-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container class="cosball-content">
        <b-row class="justify-content-md-center">
          <b-col lg="7">
            <div class="header-logo"></div>
            <h1 class="mt-5">Reset your password</h1>
            <p>We have sent a reset password email to {{email}}</p>
            <p>Please click the reset password link to set your new password.</p>
            <p class="mt-5">Didn't receive the email yet?</p>
            <p>
              Please check your spam folder, or
              <b-link @click="forgotPassword">resend</b-link> the email.
            </p>
            <p class="mt-5">
              Back to
              <b-link @click="goToLanding">Home page</b-link>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./NewPasswordSent.js" />
<style src="./NewPasswordSent.scss" lang="scss" />
