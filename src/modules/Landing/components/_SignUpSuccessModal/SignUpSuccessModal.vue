<template>
  <div class="sign-up-success-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="body">
        <b-container>
          <b-row>
            <b-col md="2">
              <div class="icon">
                <font-awesome-icon icon="check-circle"/>
              </div>
            </b-col>
            <b-col md="10">
              <div class="sign-up-success-container">
                <div class="success-header-text">Your registration is successful.</div>
                <div>You will be notified via email once your account is approved. </div>
                <div class="go-homepage-text">Back to <span class="go-homepage-link" @click="goToLanding">Home Page</span></div>
              </div>
              <custom-button
                class="ok-button"
                @click="$emit('close')"
                :inverseColor="true"
              >OK</custom-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </base-modal>
  </div>
</template>

<script src="./SignUpSuccessModal.js" />
<style src="./SignUpSuccessModal.scss" lang="scss" />
