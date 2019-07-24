<template>
<div class="gototop-wrapper" :class="{'d-none' : hideArrow}">
  <div class="return-to-top" @click="goToTop()">
    <span class="arrowup"></span>
  </div>
</div>
</template>

<script src="./GotoTop.js" />
<style src="./GotoTop.scss" lang="scss" />
