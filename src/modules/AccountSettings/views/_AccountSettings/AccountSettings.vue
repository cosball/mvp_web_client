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
                  <font-awesome-icon class="arrow-icon" icon="arrow-left" />Back
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
                    <font-awesome-icon @click="showError = false" class="file-icon" icon="times" />
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
                          <font-awesome-icon icon="folder-open" />
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
                <br />
              </b-col>

              <b-col class="account-informations" cols="12" md="8" lg="9" xl="10">
                <b-row>
                  <b-col md="6">
                    <b-row>
                      <b-col md="12">
                        <label class="mr-sm-2">
                          Email Address
                          <span class="required">*</span>
                        </label>
                        <b-input
                          v-validate="'required|email'"
                          data-vv-as="Email Address"
                          v-model="inputs.account.email"
                          placeholder="Your email address"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          name="email"
                          readonly
                        ></b-input>
                        <span class="error">{{errors.first('email')}}</span>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col md="6">
                    <b-row>
                      <b-col md="6">
                        <label class="mr-sm-2">Password</label>
                        <b-input
                          v-validate="'min:12'"
                          v-model="inputs.account.password"
                          placeholder="Password"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          name="password"
                          type="password"
                          ref="password"
                        ></b-input>
                        <span class="error">{{errors.first('password')}}</span>
                      </b-col>
                      <b-col md="6">
                        <label class="mr-sm-2">Confirm Password</label>
                        <b-input
                          v-validate="{ required: inputs.account.password?true:false, confirmed: inputs.account.password }"
                          data-vv-as="password"
                          v-model="inputs.confirmPassword"
                          placeholder="Confirm Password"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          name="confirmPassword"
                          type="password"
                        ></b-input>
                        <span class="error">{{errors.first('confirmPassword')}}</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="6">
                    <b-row>
                      <b-col md="12">
                        <b-row>
                          <b-col md="6">
                            <label class="mr-sm-2">
                              Country
                              <span class="required">*</span>
                            </label>
                            <b-form-select v-model="inputs.account.country" :options="countryList"></b-form-select>
                          </b-col>
                          <b-col md="6">
                            <label class="mr-sm-2">
                              Race/Ethnicity
                              <span class="required">*</span>
                            </label>
                            <b-form-select v-model="inputs.account.raceId" :options="raceData"></b-form-select>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col md="6">
                    <b-row>
                      <b-col md="12">
                        <b-row>
                          <b-col md="6">
                            <label class="mr-sm-2">
                              Date of Birth
                              <span class="required">*</span>
                            </label>
                            <datepicker
                              v-model="inputs.account.dob"
                              class="datepicker-style"
                              :bootstrap-styling="true"
                              :format="customFormatter"
                              :disabled-dates="datepickerOptions.disabledDates"
                            ></datepicker>
                          </b-col>
                          <b-col md="6">
                            <label class="mr-sm-2">
                              Gender
                              <span class="required">*</span>
                            </label>
                            <b-form-radio-group
                              v-model="inputs.account.gender"
                              class="boxBackground"
                            >
                              <b-form-radio name="gender" value="M">Male</b-form-radio>
                              <b-form-radio name="gender" value="F">Female</b-form-radio>
                            </b-form-radio-group>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <label class="mr-sm-12">What you want to improve?</label>
                    <b-form-group>
                      <b-form-checkbox-group v-model="inputs.account.toImprove">
                        <b-form-checkbox value="Freckles/Pigmentation">Freckles/Pigmentation</b-form-checkbox>
                        <b-form-checkbox value="Wrinkles">Wrinkles</b-form-checkbox>
                        <b-form-checkbox value="Pore/Elasticity">Pore/Elasticity</b-form-checkbox>
                        <b-form-checkbox value="Oily skin">Oily skin</b-form-checkbox>
                        <b-form-checkbox value="Dry skin">Dry skin</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <label class="mr-sm-12">Current ongoing skin problems</label>
                    <b-form-group>
                      <b-form-checkbox-group v-model="inputs.account.ongoingProblems">
                        <b-form-checkbox value="pimples">Pimples</b-form-checkbox>
                        <b-form-checkbox value="Skin trouble">Skin trouble</b-form-checkbox>
                        <b-form-checkbox value="Corneum">Corneum</b-form-checkbox>
                        <b-form-checkbox value="Itching">Itching</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="2">
                    <label class="mr-sm-2">Balance: {{accountBalance}}</label>
                  </b-col>
                  <b-col md="10">
                    <custom-button
                      v-bind:class="{ 'disabled': !isComplete }"
                      class="save-button"
                      @click="save"
                      :inverseColor="true"
                    >Save</custom-button>
                  </b-col>
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
