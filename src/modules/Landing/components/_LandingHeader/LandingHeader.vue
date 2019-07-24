<template>
  <b-container>
    <div class="landing-header-wrapper">
      <b-navbar class="navbar-header" toggleable="lg">
        <b-navbar-brand @click="goToLanding">
          <div class="img-responsive header-logo"></div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <custom-button @click="login" :inverseColor="true">Login</custom-button>
            <custom-button @click="signUp" :inverseColor="false">Sign Up</custom-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </b-container>
</template>

<script src="./LandingHeader.js" />
<style src="./LandingHeader.scss" lang="scss" />
