<template>
  <div class="row-item-wrapper" :class="wrapperClass">
    <div v-if="hasContentLeft" class="row-item-content content-left" :class="contentLeftClass">
      <slot name="contentLeft"></slot>
    </div>
    <div class="row-item-content content-main" :class="contentMainClass">
      <slot name="contentMain"></slot>
    </div>
    <div v-if="hasContentRight" class="row-item-content content-right" :class="contentRightClass">
      <slot name="contentRight"></slot>
    </div>
  </div>
  <!-- Documentation
    Usage
    # contentLeft slot is optional
    # contentMain slot is mandatory
    # contentRight slot is optional

		<RowItem>
				<el slot="contentLeft"></el>
				<el slot="contentMain"></el>
				<el slot="contentRight"></el>
		</RowItem>
  -->
</template>

<script src="./RowItem.js" />
<style src="./RowItem.scss" lang="scss" />
