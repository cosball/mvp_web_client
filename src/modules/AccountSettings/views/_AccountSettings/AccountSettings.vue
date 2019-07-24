<template>
  <div>
    <LayoutContainer class="account-settings-wrapper">
      <template slot="body">
        <div class="account-settings-content">
          <section class="account-header-container">
            <b-row class="justify-content-md-center">
              <b-col cols="12">
                <div class="header">Account Settings</div>
                <div class="go-back" @click="goBack">
                  <font-awesome-icon class="arrow-icon" icon="arrow-left"/>Back
                </div>
              </b-col>
            </b-row>
          </section>
          <section class="error-container">
            <transition name="fade">
            <div :class="{'hidden' : !showError}" class="error-message">
              <b-row>
                <b-col cols="10" class="message">
                  <b>Error!</b>
                  {{errorMessage}}
                </b-col>
                <b-col cols="2" class="icon">
                  <font-awesome-icon @click="showError = false" class="file-icon" icon="times"/>
                </b-col>
              </b-row>
            </div>
            </transition>
          </section>
          <section class="account-container">
            <b-row>
              <b-col class="set-profile-to-center" cols="12" md="4" lg="3" xl="2">
                <b-row>
                  <b-col cols="12">
                    <div class="account-icon-container">
                      <div
                        v-if="file"
                        :style="{'background-image': `url(${file})`}"
                        class="profile-image"
                      ></div>
                      <div v-else class="account-icon"></div>
                      <CustomButton
                        class="reset-button"
                        @click="resetImageFile"
                        :inverseColor="false"
                      >Reset</CustomButton>
                      <CustomButton
                        class="browse-button"
                        @click="browseImageFile"
                        :inverseColor="true"
                      >
                        <div slot="contentLeft">
                          <font-awesome-icon icon="folder-open"/>
                        </div>Browse
                      </CustomButton>
                      <CustomButton
                        class="submit-button"
                        @click="submit"
                        :inverseColor="true"
                      >Submit</CustomButton>
                      <b-form-file
                        class="input-file"
                        accept=".png, .jpg, .gif"
                        placeholder="Select File"
                        drop-placeholder="Drop file here..."
                        ref="file-input"
                        @change="browseFile"
                      ></b-form-file>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col class="account-informations" cols="12" md="8" lg="9" xl="10">
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Email Address:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{$store.state.AccountSettings.account.email || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Country:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'Korea' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Race/Ethnicity:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'North East Asian (Mongol, Tibetan, Korean Japanese, etc)' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Date of Birth:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'1977-04-15' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Total Coin:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'7' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Gender:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'Male' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">What do you want to improve?:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'Wrinkles,Pore/Elasticity' || '-'}}</b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="4" lg="3" xl="2">Current ongoing skin problems:</b-col>
                  <b-col
                    class="value"
                    cols="12"
                    md="8"
                    lg="9"
                    xl="10"
                  >{{'Pimples,Corneum,Itching' || '-'}}</b-col>
                </b-row>
              </b-col>
            </b-row>
          </section>
        </div>
      </template>
    </LayoutContainer>
  </div>
</template>

<script src="./AccountSettings.js" />
<style src="./AccountSettings.scss" lang="scss" />
