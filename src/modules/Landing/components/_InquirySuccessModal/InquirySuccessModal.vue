<template>
  <div class="add-inquiry-successful-modal-wrapper">
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
              <div class="text-container">
                <div>We have received your email and we will get back to you soon.</div>
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

<script src="./InquirySuccessModal.js" />
<style src="./InquirySuccessModal.scss" lang="scss" />
