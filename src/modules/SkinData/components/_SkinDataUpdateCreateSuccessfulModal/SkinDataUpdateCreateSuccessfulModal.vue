<template>
  <div class="upload-successful-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="body">
        <b-container>
          <b-row>
            <b-col md="3">
              <div class="icon">
                <font-awesome-icon icon="check-circle"/>
              </div>
            </b-col>
            <b-col md="9" class="mx-auto my-auto">
              <div class="text-container">
                <div v-if="action === 'add'">
                  Address
                  <span class="text-yellow">'{{$store.state.SkinData.skindata.address}}'</span> has been added successfully
                </div>
                <div v-else>Your changes have been saved!</div>
              </div>
              <custom-button
                class="ok-button"
                @click="$emit('close')"
                :inverseColor="true"
              >OK</custom-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </base-modal>
  </div>
</template>

<script src="./SkinDataUpdateCreateSuccessfulModal.js" />
<style src="./SkinDataUpdateCreateSuccessfulModal.scss" lang="scss" />
