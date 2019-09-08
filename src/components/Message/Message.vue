<template>
  <h1 :class="messageColor">{{ msg }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Color } from "./export-types";

@Component
export default class Message extends Vue {
  @Prop() msg!: string;

  @Prop(Number) color!: Color;

  get messageColor() {
    switch (this.color) {
      case Color.Info:
        return "info";
      case Color.Success:
        return "success";
      case Color.Warn:
        return "warn";
      case Color.Danger:
        return "danger";
      case Color.Default:
      default:
        return "normal";
    }
  }
}
</script>

<style scoped>
.normal {
  color: #c6c8ca;
}

.success {
  color: #c3e6cb;
}

.info {
  color: #bee5eb;
}

.warn {
  color: #ffeeba;
}

.danger {
  color: #f5c6cb;
}
</style>