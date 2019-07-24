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
              <label class="mr-sm-2 weather-data">Entered At : 2019-06-25 15:49:23</label>
            </b-col>
          </b-row>
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
              <label class="mr-sm-2 weather-data">Temperature : 32 °C</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Humidity : 63 %</label>
            </b-col>
            <b-col cols="3">
              <label class="mr-sm-2 weather-data">Pressure : 1017.58h Pa</label>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Moisture : 10</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Oil : 20</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Pore : 10</label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Temperature : 30</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Skin tone : 10</label>
            </b-col>
            <b-col cols="4">
              <label class="mr-sm-2 weather-data">Wrinkle : 20</label>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="6">
              <label class="mr-sm-2 highlight">Recommended Cosball Product: A123</label>
            </b-col>
            <b-col cols="6">
              <label class="mr-sm-2 highlight">Reward Point: 2</label>
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
