<template>
  <LayoutContainer class="reset-message-page-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container class="cosball-content">
        <b-row class="justify-content-md-left">
          <b-col lg="12" md="auto">
            <div @click="goToLanding" class="header-logo"></div>
          </b-col>
          <b-col lg="7" md="auto">
            <b-row class="mt-7">
              <b-col cols="3">
                <div class="icon-left">
                  <font-awesome-icon icon="check-circle"/>
                </div>
              </b-col>
              <b-col cols="9">
                <h1>Your password has been reset.</h1>
                <p>
                  Go back to
                  <b-link @click="goToLanding">Home Page</b-link> to login with your new password
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="4" md="auto">
            <div class="icon">
              <font-awesome-icon icon="unlock-alt"/>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./ResetMessagePage.js" />
<style src="./ResetMessagePage.scss" lang="scss" />
