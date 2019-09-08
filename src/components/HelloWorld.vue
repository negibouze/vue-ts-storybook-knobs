<template>
  <div class="hello">
    <message :msg="msg" :color="color" />
    <my-button @click="onClick">My Button</my-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Message, { Color } from "./Message";
import MyButton from "./MyButton";

@Component({
  components: {
    Message,
    MyButton
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  color: Color = Color.Default;

  onClick(e: MouseEvent) {
    alert("clicked!");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
