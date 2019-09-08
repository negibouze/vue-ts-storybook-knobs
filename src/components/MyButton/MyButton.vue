<template>
  <button class="button is-primary" @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop({ type: Boolean, default: false }) disabled!: boolean;

  onClick() {
    this.$emit("click");
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
