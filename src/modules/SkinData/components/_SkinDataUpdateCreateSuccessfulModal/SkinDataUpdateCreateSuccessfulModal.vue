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
                  <b-row>
                    <b-col md="8">
                      <div>Recommened Cosball Product : {{ skindata.recommenedCosball }}</div>
                    </b-col>
                    <b-col md="4">
                      <div>Reward Point : {{ skindata.rewardPoint }}</div>
                    </b-col>
                  </b-row>
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
