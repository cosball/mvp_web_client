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
              <label class="mr-sm-2 weather-data">Location : {{ inputs.skindata.location }}</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Weather : {{ inputs.skindata.weather }}</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Temperature : {{ inputs.skindata.temperature }} °C</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Humidity : {{ inputs.skindata.humidity }} %</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Pressure : {{ inputs.skindata.pressure }} hPa</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2">
                Moisture
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Moisture"
                v-model="inputs.skindata.moisture"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="moisture"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Oil
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Oil"
                v-model="inputs.skindata.oil"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="oil"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Pore
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Pore"
                v-model="inputs.skindata.pore"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="pore"
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
                data-vv-as="Temperature"
                v-model="inputs.skindata.skinTemperature"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="skinTemperature"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Skin tone
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Skin tone"
                v-model="inputs.skindata.skinTone"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="skinTone"
              ></b-input>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Wrinkle
              </label>
              <b-input
                v-validate="'required'"
                data-vv-as="Wrinkle"
                v-model="inputs.skindata.wrinkle"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="wrinkle"
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
