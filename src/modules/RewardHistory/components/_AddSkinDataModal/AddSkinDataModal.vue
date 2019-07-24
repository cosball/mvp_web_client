<template>
  <div class="add-skindata-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="header" class="header">
        <button type="button" aria-label="Close" class="close" @click="closeModal">×</button>
        <div>
          <h5 class="modal-title">{{title}}</h5>
          <div class="required error">*Denotes Required Field</div>
        </div>
      </div>

      <div slot="body" class="form-body">
        <b-container>
          <b-row>
            <b-col cols="12">
              <label class="mr-sm-2 weather-data">Location : Seoul/KR</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Weather : Fine</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Temperature : 32°C</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Humidity : 63%</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Pressure : 1017.58hPa</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2">
                Moisture
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Oil
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Pore
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2">
                Temperature
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Skin tone
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Wrinkle
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Address"
                v-model="inputs.skindata.address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="address"
              ></b-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <div class="checkbox">
                <b-form-checkbox
                  id="termAndPolicy"
                  class="term-and-policy"
                  v-model="termAndPolicy"
                  name="termAndPolicy"
                  value="true"
                  unchecked-value="false"
                >I have read the Privacy Policy and agree to the Terms of Service</b-form-checkbox>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div slot="footer">
        <div class="button-container">
          <custom-button
            v-bind:class="{ 'disabled': !isComplete }"
            class="add-button"
            @click="addSkinData"
            :inverseColor="true"
          >Add</custom-button>
          <custom-button class="cancel-button" @click="closeModal" :inverseColor="false">Cancel</custom-button>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script src="./AddSkinDataModal.js" />
<style src="./AddSkinDataModal.scss" lang="scss" />
