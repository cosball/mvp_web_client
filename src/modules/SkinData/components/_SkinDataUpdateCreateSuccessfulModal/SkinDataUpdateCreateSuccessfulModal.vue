<template>
  <div class="add-user-successful-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="body">
        <b-container>
          <b-row>
            <b-col md="2">
              <div class="icon">
                <font-awesome-icon icon="check-circle" />
              </div>
            </b-col>
            <b-col md="10" class="mx-auto my-auto">
              <div class="text-container">
                <div>New skin data has been added successfully</div>
                <br />
                <div class="returned-data">
                  Recommened Cosball Product :
                  <span v-for="item of cosballProducts" :key="item">
                    <span v-html="item"></span>
                  </span>
                </div>
                <div class="returned-data">
                  Reward Point(<font-awesome-icon icon="coins" />) : {{ skindata.rewardPoint }}
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <custom-button class="ok-button" @click="$emit('close')" :inverseColor="true">OK</custom-button>
          </b-row>
        </b-container>
      </div>
    </base-modal>
  </div>
</template>

<script src="./SkinDataUpdateCreateSuccessfulModal.js" />
<style src="./SkinDataUpdateCreateSuccessfulModal.scss" lang="scss" />
