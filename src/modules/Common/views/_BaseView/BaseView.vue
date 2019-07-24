<template>
  <div class="base-view-wrapper">
    <div class="base-view-inner-wrapper">
      <transition
        :name="$store.state.Common.routeTransition"
        v-if="$store.state.Common.isHeaderPaneActive"
      >
        <div class="top-pane">
          <PageHeader slot="header" leftAction="menu" theme="primary"></PageHeader>
        </div>
      </transition>
      <div class="flex-container">
        <transition
          :name="$store.state.Common.routeTransition"
          v-if="$store.state.Common.isMenuPaneActive"
        >
          <div class="left-pane">
            <MenuPane :items="leftPaneMenu"></MenuPane>
          </div>
        </transition>
        <div class="main-pane">
          <transition :name="$store.state.Common.routeTransition">
            <router-view :key="$store.state.route.fullPath"></router-view>
          </transition>
          <!-- <div class="main-pane-overlay"
					v-if="$store.state.Common.isLeftPaneActive"
          @click="hideLeftPane"></div>-->
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="$store.state.Common.isBaseLoaderActive" class="base-view-loader-wrapper">
        <div class="loader-background"></div>
        <div
          class="loader-icon"
          :class="{
						'active': isLoaderIconActive,
						'semi-active': isLoaderIconSemiActive
					}"
        ></div>
      </div>
    </transition>
    <transition name="fade">
    <b-toast
      id="error-toast"
      :title="error.title"
      toaster="b-toaster-top-right"
      autoHideDelay="5000"
    >{{error.message}}</b-toast>
    </transition>
  </div>
</template>

<script src="./BaseView.js" />
<style src="./BaseView.scss" lang="scss" />
