<template id="modal-template">
  <div class="base-modal" v-bind:class="{ 'base-modal-background': bgVariantImage }">
    <div class="modal-header" v-bind:class="{ 'header-color': headerBgVariant }" v-if="hasHeader">
      <slot name="header">
        <h5 class="modal-title">{{title}}</h5>
        <button
          type="button"
          aria-label="Close"
          class="close"
          @click="$emit('close')"
          v-if="!hideCloseButton"
        >×</button>
      </slot>
    </div>
    <!-- <hr v-if="hasHeader"> -->
    <div class="modal-body">
      <slot name="body">
        <span v-html="body"></span>
      </slot>
    </div>
    <!-- <hr v-if="hasFooter"> -->
    <div class="modal-footer" v-if="hasFooter">
      <slot name="footer">
        <div v-for="buttons in buttonList" :key="buttons.id">
          <custom-button
            v-bind:class="{ 'disabled': !isComplete }"
            class="add-button"
            @click="buttons.handler(buttons);$emit('close')"
            :inverseColor=" buttons.title =='Ok' ?  true : false"
          >{{buttons.title}}</custom-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script src="./BaseModal.js" />
<style src="./BaseModal.scss" lang="scss" />
