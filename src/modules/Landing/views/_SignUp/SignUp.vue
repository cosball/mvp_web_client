<template>
  <LayoutContainer class="signup-wrapper">
    <LandingHeader slot="header"></LandingHeader>
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container class="cosball-content">
        <div class="header justify-content-md-center">
          <b-row>
            <b-col lg="6" order-lg="6">
              <h1 class="modal-title">Hello! Please tell us a little bit about yourself.</h1>
            </b-col>
          </b-row>
        </div>
        <div class="form-body">
          <b-row>
            <b-col md="6">
              <label class="mr-sm-2">
                Email Address
                <span class="required">*</span>
              </label>
              <b-input
                v-validate="'required|email'"
                data-vv-as="Email Address"
                v-model="inputs.signup.email"
                placeholder="Your email address"
                class="mb-2 mr-sm-2 mb-sm-0"
                name="email"
              ></b-input>
              <span class="error">{{errors.first('email')}}</span>
            </b-col>
            <b-col md="6">
              <b-row>
                <b-col md="12">
                  <b-row>
                    <b-col md="6">
                      <label class="mr-sm-2">
                        Password
                        <span class="required">*</span>
                      </label>
                      <b-input
                        v-validate="'required|min:12'"
                        v-model="inputs.signup.password"
                        placeholder="Password"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        name="password"
                        type="password"
                        ref="password"
                      ></b-input>
                      <span class="error">{{errors.first('password')}}</span>
                    </b-col>
                    <b-col md="6">
                      <label class="mr-sm-2">
                        Confirm Password
                        <span class="required">*</span>
                      </label>
                      <b-input
                        v-validate="{ required: inputs.signup.password?true:false, confirmed: inputs.signup.password }"
                        data-vv-as="password"
                        v-model="confirmPassword"
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
                      <b-form-select v-model="inputs.signup.country" :options="countryList"></b-form-select>
                    </b-col>
                    <b-col md="6">
                      <label class="mr-sm-2">
                        Race/Ethnicity
                        <span class="required">*</span>
                      </label>
                      <b-form-select v-model="inputs.signup.raceId" :options="raceData"></b-form-select>
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
                        v-model="inputs.signup.dob"
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
                      <b-form-radio-group v-model="inputs.signup.gender" class="boxBackground">
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
                <b-form-checkbox-group v-model="inputs.signup.toImprove">
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
                <b-form-checkbox-group v-model="inputs.signup.ongoingProblems">
                  <b-form-checkbox value="pimples">Pimples</b-form-checkbox>
                  <b-form-checkbox value="Skin trouble">Skin trouble</b-form-checkbox>
                  <b-form-checkbox value="Corneum">Corneum</b-form-checkbox>
                  <b-form-checkbox value="Itching">Itching</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
        </div>

        <div class="verification-container m-md-5">
          <b-row>
            <b-col lg="4" md="6">
              <b-form-checkbox
                id="termAndPolicy"
                class="term-and-policy"
                v-model="termAndPolicy"
                name="termAndPolicy"
                value="true"
                unchecked-value="false"
              >
                I have read the
                <span class="font-yellow">Privacy Policy</span> and agree to the
                <span class="font-yellow">Terms of Service</span>
              </b-form-checkbox>
            </b-col>
            <b-col lg="4" md="6" class="g-recaptcha-holder">
              <div style="width: 100%; background:white; border-radius: 5px; padding: 5px;">
                <div style="display: flex; justify-content: center; align-items: flex-end; margin-bottom: 3px;">
                  <span v-html="captcha.data"></span>
                  <span style="margin-left: 20px;"><a href="#" @click="getCaptcha()"><font-awesome-icon icon="sync-alt" /></a></span>
                </div>
                <div>
                  <label class="mr-sm-6">
                    Type the word above
                    <span class="required">*</span>
                  </label>
                  <b-input
                    v-validate="'required'"
                    v-model="inputCaptchaText"
                    class="mb-6 mr-sm-2 mb-sm-0"
                  ></b-input>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="12">
              <custom-button
                v-bind:class="{ 'disabled': !isComplete }"
                class="signup-button"
                @click="signup"
                :inverseColor="true"
              >Sign Up</custom-button>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <LandingFooter slot="footer"></LandingFooter>
  </LayoutContainer>
</template>

<script src="./SignUp.js" />
<style src="./SignUp.scss" lang="scss" />
