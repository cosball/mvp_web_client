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
            <b-col cols="12">
              <label class="mr-sm-2 weather-data">Entered At : {{ inputs.skindata.createdAt }}</label>
            </b-col>
          </b-row>
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
          <br>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Moisture : {{ inputs.skindata.moisture }}</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Oil : {{ inputs.skindata.oil }}</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Pore : {{ inputs.skindata.pore }}</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Temperature : {{ inputs.skindata.skinTemperature }}</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Skin tone : {{ inputs.skindata.skinTone }}</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Wrinkle : {{ inputs.skindata.wrinkle }}</label>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="6">
              <label class="mr-sm-2 highlight">Recommended Cosball Product: {{ inputs.skindata.recommenedCosball }}</label>
            </b-col>
            <b-col cols="6">
              <label class="mr-sm-2 highlight">Reward Point: {{ inputs.skindata.rewardPoint }}</label>
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
