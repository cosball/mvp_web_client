<template>
  <div class="contactus-modal-wrapper">
    <base-modal bg-variant-image>
      <b-container slot="header" class="header">
        <button type="button" aria-label="Close" class="close" @click="closeModal">×</button>
        <div>
          <h5 class="modal-title">Have a question?</h5>
          <br>
          <h5 class="modal-title">Just drop us an email</h5>
        </div>
      </b-container>
      <div slot="body" class="form-body">
        <b-container>
          <b-tabs content-class="mt-2">
            <b-tab title="Inquiries" active>
              <inquiry-tab></inquiry-tab>
            </b-tab>
            <b-tab title="Support">
              <support-tab></support-tab>
            </b-tab>
          </b-tabs>
        </b-container>
      </div>
      <div></div>
    </base-modal>
  </div>
</template>

<script src="./ContactUsModal.js" />
<style src="./ContactUsModal.scss" lang="scss" />
