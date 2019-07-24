<template>
  <div @click="onClick($event)" class="custom-button-wrapper">
    <div class="custom-button-inner-wrapper" :class="{'inverse-color': inverseColor}">
      <div v-if="hasContentLeft" class="content-side content-left">
        <!-- custom-button prefix -->
        <slot name="contentLeft"></slot>
      </div>
      <div class="content-main">
        <!-- custom-button label
         -->
        <slot></slot>
      </div>
      <div v-if="hasContentRight" class="content-side content-right">
        <!-- custom-button postfix -->
        <slot name="contentRight"></slot>
      </div>
    </div>
  </div>
  <!-- Documentation
		* Usage
			# custom-button label as default slot
			# optional contentLeft and/or contentRight slot for pre/postfix icon
			# inverse: to swap font and background color

		<custom-button :inverseColor="true">
				<div slot="contentLeft" class="icon-custom"></div>
				Logout
				<img slot="contentRight" src="@/assets/img/logo.png" />
		</custom-button>
  -->
</template>

<script src="./CustomButton.js" />
<style src="./CustomButton.scss" lang="scss" />
