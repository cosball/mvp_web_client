<template>
  <div class="support-tab-wrapper">
    <b-row>
      <b-col cols="12">
        <label class="mr-sm-2">
          Full Name
          <span class="required">*</span>
        </label>
        <b-input
          v-validate="'required'"
          data-vv-as="Full Name"
          v-model="inputs.support.full_name"
          placeholder="Your Full Name"
          class="mb-2 mr-sm-2 mb-sm-0"
          name="fullName"
        ></b-input>
        <span class="error">{{errors.first('fullName')}}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <label class="mr-sm-2">
          Email Address
          <span class="required">*</span>
        </label>
        <b-input
          v-validate="'required|email'"
          data-vv-as="Email Address"
          v-model="inputs.support.email"
          placeholder="Your Email Address"
          class="mb-2 mr-sm-2 mb-sm-0"
          name="email"
        ></b-input>
        <span class="error">{{errors.first('email')}}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <label class="mr-sm-2">
          Message
          <span class="required">*</span>
        </label>
        <b-form-textarea
          v-validate="'required'"
          data-vv-as="Message"
          v-model="inputs.support.message"
          maxlength="400"
          placeholder="Your Message"
          class="mb-2 mr-sm-2 mb-sm-0"
          name="message"
        ></b-form-textarea>
      </b-col>
      <span class="error">{{errors.first('message')}}</span>
    </b-row>
    <b-row class="justify-content-center my-3">
      <b-col cols="12" md="6">
        <b-form-file
          class="input-file"
          placeholder="Select File"
          drop-placeholder="Drop file here..."
          ref="file-input"
          @change="browseFile"
        ></b-form-file>
        <div class="proxy-input-file mr-md-2 my-md-1">
          <font-awesome-icon v-if="fileDropped" class="file-icon" icon="file"/>
          <div class="file-name">{{ fileDropped ? file.name : 'Select File'}}</div>
        </div>
      </b-col>
      <b-col cols="12" md="3">
        <custom-button
          @click="uploadFile"
          class="browse-button mt-md-2 smallbtn"
          :inverseColor="true"
        >
          <div slot="contentLeft">
            <font-awesome-icon icon="folder-open"/>
          </div>
          <div class="small">Browse</div>
        </custom-button>
      </b-col>
      <b-col cols="12" md="3">
        <custom-button
          @click="resetFile"
          class="reset-button mt-md-2 smallbtn"
          :inverseColor="false"
        >
          <div class="small">Reset</div>
        </custom-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span class="upload-text">Max Upload File Size: 5MB</span>
      </b-col>
    </b-row>
    <b-row class="justify-content-sm-center my-3">
      <div>
        <div class="g-recaptcha">
          <vue-recaptcha
            ref="recaptcha"
            @expired="onVerify('')"
            @verify="onVerify"
            :sitekey="recaptcha_sitekey"
          ></vue-recaptcha>
        </div>
      </div>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="12"  md="4">
        <custom-button
          v-bind:class="{ 'disabled': !isComplete }"
          @click="submitSupport"
          :inverseColor="true"
        >Submit</custom-button>
      </b-col>
    </b-row>
  </div>
</template>

<script src="./SupportTab.js" />
<style src="./SupportTab.scss" lang="scss" />
