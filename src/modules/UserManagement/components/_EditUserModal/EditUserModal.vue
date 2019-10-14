<template>
  <div class="edit-user-modal-wrapper">
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
            <b-col class="set-profile-to-center" cols="12" md="2">
              <div class="account-icon-container">
                <div
                  v-if="inputs.user.profileURL"
                  :style="{'background-image': `url(${inputs.user.profileURL})`}"
                  class="profile-image"
                ></div>
              </div>
            </b-col>

            <b-col md="7">
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Email Address:</label>
                <label class="value" cols="12" md="8" lg="9" xl="10">{{inputs.user.email}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Country:</label>
                <label class="value" cols="12" md="8" lg="9" xl="10">{{inputs.user.country}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Race/Ethnicity:</label>
                <label class="value" cols="12" md="8" lg="9" xl="10">{{textRace}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Date of Birth:</label>
                <label class="value" cols="12" md="8" lg="9" xl="10">{{inputs.user.dob}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Gender:</label>
                <label class="value" cols="12" md="8" lg="9" xl="10">{{inputs.user.gender}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">What do you want to improve?</label>
                <label
                  class="value"
                  cols="12"
                  md="8"
                  lg="9"
                  xl="10"
                >{{inputs.user.toImprove.join(', ')}}</label>
              </b-row>
              <b-row>
                <label cols="12" md="4" lg="3" xl="2">Current ongoing skin problems:</label>
                <label
                  class="value"
                  cols="12"
                  md="8"
                  lg="9"
                  xl="10"
                >{{inputs.user.ongoingProblems.join(', ')}}</label>
              </b-row>
            </b-col>

            <b-col md="3">
              <b-row>
                <label class="mr-sm-2" for="roles">Roles</label>
                <b-form-select
                  data-vv-as="Roles"
                  v-model="inputs.user.roleType"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :value="null"
                  :options="roleList"
                  name="roles"
                  @change="valueChanged"
                >
                  <template slot="first">
                    <option :value="null" disabled>Select Roles</option>
                  </template>
                </b-form-select>
                <span class="error">{{errors.first('roles')}}</span>
              </b-row>
              <br />
              <b-row>
                <label class="mr-sm-2">Reset Password</label>
                <b-input
                  v-model="inputs.user.password"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  type="password"
                  name="password"
                  @change="valueChanged"
                ></b-input>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div slot="footer">
        <div class="button-container">
          <custom-button
            v-bind:class="{ 'disabled': !isComplete }"
            class="add-button"
            @click="editUser"
            :inverseColor="true"
          >Confirm Changes</custom-button>
          <custom-button class="cancel-button" @click="closeModal" :inverseColor="false">Cancel</custom-button>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script src="./EditUserModal.js" />
<style src="./EditUserModal.scss" lang="scss" />
