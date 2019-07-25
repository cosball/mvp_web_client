<template>
  <div class="edit-user-modal-wrapper">
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
            <b-col md="6">
              <b-row>
                <b-col md="6">
                  <label class="mr-sm-2">
                    First name
                    <span class="required">*</span>
                  </label>
                  <b-input
                    v-validate="'required'"
                    data-vv-as="First Name"
                    v-model="inputs.user.firstname"
                    placeholder="Your first name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="firstName"
                  ></b-input>
                  <span class="error">{{errors.first('firstName')}}</span>
                </b-col>
                <b-col md="6">
                  <label class="mr-sm-2">
                    Last name
                    <span class="required">*</span>
                  </label>
                  <b-input
                    v-validate="'required'"
                    data-vv-as="Last name"
                    v-model="inputs.user.lastname"
                    placeholder="Your last name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="lastName"
                  ></b-input>
                  <span class="error">{{errors.first('lastName')}}</span>
                </b-col>
                <b-col md="12">
                  <b-row>
                    <b-col md="6">
                      <label class="mr-sm-2">
                        User Name
                        <span class="required">*</span>
                      </label>
                      <b-input
                        v-validate="'required'"
                        data-vv-as="user Name"
                        v-model="inputs.user.username"
                        placeholder="Your User Name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        name="userName"
                      ></b-input>
                      <span class="error">{{errors.first('userName')}}</span>
                    </b-col>
                    <b-col md="6">
                      <label class="mr-sm-2">
                        Email Address
                        <span class="required">*</span>
                      </label>
                      <b-input
                        v-validate="'required|email'"
                        data-vv-as="Email Address"
                        v-model="inputs.user.email"
                        placeholder="Your email address"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        name="email"
                      ></b-input>
                      <span class="error">{{errors.first('email')}}</span>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6">
                  <label class="mr-sm-2">Position/Title</label>
                  <b-input
                    v-model="inputs.user.posTitle"
                    placeholder="Position/Title"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  ></b-input>
                </b-col>
                <b-col md="6">
                  <label class="mr-sm-2" for="roles">
                    Roles
                    <span class="required">*</span>
                  </label>
                  <b-form-select
                    v-validate="'required'"
                    data-vv-as="Roles"
                    v-model="inputs.user.roleType"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :value="null"
                    :options="roleList"
                    name="roles"
                  >
                    <template slot="first">
                      <option :value="null" disabled>Select Roles</option>
                    </template>
                  </b-form-select>
                  <span class="error">{{errors.first('roles')}}</span>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="6">
              <b-row>
                <b-col md="12">
                  <label class="mr-sm-2" for="contactNumber">
                    Contact Number
                    <span class="required">*</span>
                  </label>
                  <b-input
                    v-validate="'required'"
                    data-vv-as="Contact Number"
                    v-model="inputs.user.contactNo"
                    placeholder="+0123456789"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    name="contactNumber"
                  ></b-input>
                  <span class="error">{{errors.first('contactNumber')}}</span>
                </b-col>
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
          <custom-button
            class="cancel-button"
            @click="closeModal"
            :inverseColor="false"
          >Cancel</custom-button>
        </div>
      </div>
    </base-modal>
  </div>
</template>

<script src="./EditUserModal.js" />
<style src="./EditUserModal.scss" lang="scss" />
