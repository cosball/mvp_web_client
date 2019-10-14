<template>
  <div class="edit-skindata-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="header" class="header">
        <button type="button" aria-label="Close" class="close" @click="closeModal">×</button>
        <div>
          <h5 class="modal-title">{{title}}</h5>
        </div>
      </div>

      <div slot="body" class="form-body">
        <b-container>
          <b-row>
            <b-col md="12">
              <label class="mr-sm-2 weather-data">Entered At: {{ inputs.skindata.createdAt | formatDate('YYYY-MM-DD kk:mm:ss') }}</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <label class="mr-sm-2 weather-data">Location: {{ inputs.skindata.location }}</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <label class="mr-sm-2 weather-data">Weather: {{ inputs.skindata.weather }}</label>
            </b-col>
            <b-col md="3">
              <label class="mr-sm-2 weather-data">Temp.: <span v-if="inputs.skindata.temperature">{{ inputs.skindata.temperature }}°C</span></label>
            </b-col>
            <b-col md="3">
              <label class="mr-sm-2 weather-data">Humidity: <span v-if="inputs.skindata.humidity">{{ inputs.skindata.humidity }}%</span></label>
            </b-col>
            <b-col md="3">
              <label class="mr-sm-2 weather-data">Pressure: <span v-if="inputs.skindata.pressure">{{ inputs.skindata.pressure }}hPa</span></label>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Skin Health: {{ inputs.skindata.moisture }}</label>
            </b-col>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Blemish: {{ inputs.skindata.oil }}</label>
            </b-col>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Wrinkle: {{ inputs.skindata.wrinkle }}</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Skin Texture: {{ inputs.skindata.pore }}</label>
            </b-col>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Dark Circles: {{ inputs.skindata.skinTone }}</label>
            </b-col>
            <b-col md="4">
              <label class="mr-sm-2 weather-data">Skin Age: {{ inputs.skindata.skinTemperature }}</label>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col md="7">
              <label class="mr-sm-2 highlight">Recommended Cosball Product: <span v-for="item of cosballProducts" :key="item"> <span v-html="item"> </span> </span></label>
            </b-col>
            <b-col md="5">
              <label class="mr-sm-2 highlight">Reward Point(<font-awesome-icon icon="coins" />): {{ inputs.skindata.rewardPoint }}</label>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div slot="footer">
        <div class="button-container">
          <custom-button
            class="add-button"
            @click="closeModal"
            :inverseColor="true"
          >Close</custom-button>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script src="./ViewSkinDataModal.js" />
<style src="./ViewSkinDataModal.scss" lang="scss" />
