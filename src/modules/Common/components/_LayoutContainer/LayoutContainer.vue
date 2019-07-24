<template>
  <div class="layout-container-wrapper" ref="containerWrapper">
    <div v-if="hasBackground" class="background-container"></div>
    <div v-if="hasHeader" class="slot-wrapper header">
      <slot name="header"></slot>
    </div>
    <div class="slot-wrapper body" :style="style" ref="body">
      <slot name="body"></slot>
    </div>
    <transition name="fade">
      <div v-if="hasFooter && showFooter" class="slot-wrapper footer">
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
  <!-- Documentation

		Usage
		==slot==
		1. header   - position fixed header
		2. body     - scrollable body content
		3. footer   - position fixed footer

		==props==
		1. hasBackground    - preconfigured background style
		2. isNested         - set to true when used as nested LayoutContainer

		<LayoutContainer>
				<el slot="header"></el>
				<el slot="body"></el>
				<el slot="footer"></el>
		</LayoutContainer>

  -->
</template>

<script src="./LayoutContainer.js" />
<style src="./LayoutContainer.scss" lang="scss" />
