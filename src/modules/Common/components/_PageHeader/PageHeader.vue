<template>
  <div class="page-header-wrapper">
    <b-navbar class="navbar-header" toggleable="lg">
      <b-navbar-brand href="#">
        <div class="img-responsive header-logo"></div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form
            class="search-bar-container d-none d-sm-block d-md-block d-lg-block d-xl-block mt-1"
          >
            <!--
            <b-input-group>
              <b-form-select
                slot="prepend"
                v-model="filterBy"
                class="filter-by"
                :options="filterByList"
                name="filterBy"
              ></b-form-select>
              <b-form-input
                size="md"
                class="search-bar"
                v-model="addressTransactionHash"
                placeholder="Search By Address or Transaction Hash"
              ></b-form-input>
              <b-input-group-text
                slot="append"
                class="search-bar-icon"
                disabled="true"
                @click="goToTransactionDetail"
              >
                <font-awesome-icon icon="search"/>
              </b-input-group-text>
            </b-input-group>
            -->
          </b-nav-form>
          <b-nav-form class="search-bar-container-responsive d-block d-sm-none">
            <!--
            <b-form-select
              v-model="filterBy"
              class="filter-by"
              :options="filterByList"
              name="filterBy"
            ></b-form-select>
            <b-form-input
              size="md"
              class="search-bar"
              v-model="addressTransactionHash"
              placeholder="Search By Address or Transaction Hash"
            ></b-form-input>
            <custom-button
              class="search-button"
              @click="goToTransactionDetail"
              :inverseColor="true"
            >Search</custom-button>
            -->
          </b-nav-form>
          <!--
          <b-nav-item-dropdown class="notification-dropdown" no-caret right>
            <template slot="button-content">
              <div class="notification-container">
                <div class="notification-icon"></div>
              </div>
            </template>
            <b-dropdown-header class="header">Notifications</b-dropdown-header>
            <b-dropdown-item>
              <div class="notification">
                <div class="icon">
                  <font-awesome-icon icon="times"/>
                </div>
                <div class="message">
                  <div class="font-weight-bold">Added Address</div>
                  <div
                    class="description"
                  >Address added in skindata for address 12312331masd12399123m</div>
                </div>
              </div>
            </b-dropdown-item>
            <b-dropdown-header class="header">See All</b-dropdown-header>
          </b-nav-item-dropdown>

          <b-nav-item class="line-position">
            <div class="line"></div>
          </b-nav-item>
          -->

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
