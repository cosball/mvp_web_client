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
              <label class="mr-sm-2 weather-data">Temp. : {{ inputs.skindata.temperature }}°C</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Humidity : {{ inputs.skindata.humidity }}%</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Pressure : {{ inputs.skindata.pressure }}hPa</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2">
                Moisture
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Moisture"
                v-model="inputs.skindata.moisture"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="moisture"
              ></b-input>
              <span class="error">{{errors.first('moisture')}}</span>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Oil
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Oil"
                v-model="inputs.skindata.oil"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="oil"
              ></b-input>
              <span class="error">{{errors.first('oil')}}</span>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Pore
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Pore"
                v-model="inputs.skindata.pore"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="pore"
              ></b-input>
              <span class="error">{{errors.first('pore')}}</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2">
                Temperature
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Temperature"
                v-model="inputs.skindata.skinTemperature"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="skinTemperature"
              ></b-input>
              <span class="error">{{errors.first('skinTemperature')}}</span>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Skin tone
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Skin tone"
                v-model="inputs.skindata.skinTone"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="skinTone"
              ></b-input>
              <span class="error">{{errors.first('skinTone')}}</span>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2">
                Wrinkle
                <span class="required">*</span>
              </label>
              <b-input
                type="number"
                v-validate="'required|integer|min_value:0|max_value:100'"
                data-vv-as="Wrinkle"
                v-model="inputs.skindata.wrinkle"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="wrinkle"
              ></b-input>
              <span class="error">{{errors.first('wrinkle')}}</span>
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
