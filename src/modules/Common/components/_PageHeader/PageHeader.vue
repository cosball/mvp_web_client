<template>
  <div class="page-header-wrapper">
    <b-navbar class="navbar-header" toggleable="lg">
      <div class="branding">
        <b-navbar-brand href="#">
          <div class="img-responsive header-logo"></div>
          <span class="brand-text">
            <b>COSBALL</b>
          </span>
        </b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form
            class="search-bar-container d-none d-sm-block d-md-block d-lg-block d-xl-block mt-1"
          ></b-nav-form>
          <b-nav-form class="search-bar-container-responsive d-block d-sm-none"></b-nav-form>

          <b-nav-item-dropdown no-caret class="profile-dropdown" right>
            <template slot="button-content">
              <div class="profile-container">
                <div class="email">{{$store.state.AccountSettings.account.email}}</div>
                <span class="caret">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <div
                  v-if="$store.state.AccountSettings.account.profileURL"
                  :style="{'background-image': `url(${$store.state.AccountSettings.account.profileURL})`}"
                  class="profile-image"
                ></div>
                <div v-else class="profile-icon"></div>
              </div>
            </template>
            <b-dropdown-item>
              User Status:
              <span class="font-weight-bold">{{roleLabel}}</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <font-awesome-icon class="icon-size" icon="user" />Last logged-in:
              <span
                class="font-weight-bold"
              >{{$store.state.AccountSettings.account.lastSignIn | formatDate('MMM Do YYYY') }}</span>
            </b-dropdown-item>
            <b-dropdown-item @click="goToAccountSettings">
              <font-awesome-icon class="icon-size" icon="cog" />Account Settings
            </b-dropdown-item>
            <b-dropdown-item @click="goToLanding">
              <font-awesome-icon class="icon-size" icon="sign-out-alt" />Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script src="./PageHeader.js" />
<style src="./PageHeader.scss" lang="scss" />
