<template>
  <b-input
    class="input-box"
    autocomplete="off"
    :id="fieldId"
    :name="fieldId"
    :class="inputClass"
    :type="computedType"
    :readonly="readonly"
    :placeholder="readonly ? readonlyPlaceholder : placeholder"
    :value="computedValue"
    @paste.native="sanitizePasteInput($event)"
    @input.native="onInput($event)"
    @focus.native="onFocus($event)"
    @blur.native="onBlur($event)"
    @keydown.native="onKeydownEnter($event)"
    @keyup.enter.native="onKeyupEnter($event)"
  ></b-input>
  <!-- Documentation

			Usage
			==props==
			1. v-model			- model value
			2. type				- keyboard type
			3. format			- input blocking and formatting
			4. formatOptions	- configuration of format

			==events==
			1. input		- emit input value on input updating
			2. focus		- emit event object on input focus
			3. blur			- emit event object on input blur
			4. enter		- emit event object when enter key is clicked

			<InputBox type="text" v-model="passwordValue" format="currency"
			:formatOptions="{
				integerLength: 9,
				decimalLength: 5
			}">
			</InputBox>
  -->
</template>

<script src="./InputBox.js" />
<style src="./InputBox.scss" lang="scss" />
