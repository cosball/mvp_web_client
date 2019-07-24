<template>
  <div class="add-user-successful-modal-wrapper">
    <base-modal bg-variant-image>
      <div slot="body">
        <b-container>
          <b-row>
            <b-col md="2">
              <div class="icon">
                <font-awesome-icon icon="check-circle"/>
              </div>
            </b-col>
            <b-col md="10">
              <div class="text-container">
                <div v-if="action === 'add'">
                  User
                  <span class="text-yellow">'{{$store.state.UserManagement.user.username}}'</span> has been added successfully and notification email sent to
                  <span
                    class="text-yellow"
                  >'{{$store.state.UserManagement.user.email}}'</span>
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

<script src="./UserUpdateCreateSuccessfulModal.js" />
<style src="./UserUpdateCreateSuccessfulModal.scss" lang="scss" />
