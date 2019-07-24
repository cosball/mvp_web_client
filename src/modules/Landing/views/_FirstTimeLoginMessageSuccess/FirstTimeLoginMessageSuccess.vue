<template>
  <LayoutContainer class="first-time-login-message-wrapper">
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container id="title-container" class="cosball-content">
        <b-row class="justify-content-md-center">
          <b-col lg="5">
            <div @click="goToLanding" class="header-logo"></div>
          </b-col>
          <b-col lg="9" md="auto">
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
        </b-row>
      </b-container>
    </div>
  </LayoutContainer>
</template>

<script src="./FirstTimeLoginMessageSuccess.js" />
<style src="./FirstTimeLoginMessageSuccess.scss" lang="scss" />
