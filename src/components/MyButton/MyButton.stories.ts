import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/vue";
import MyButton from "./MyButton.vue";

const stories = storiesOf("MyButton", module);
stories.addDecorator(withKnobs);

stories.add("normal", () => ({
  components: { MyButton },
  template:
    '<my-button @click="onClick" :disabled="isDisabled">Button</my-button>',
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    }
  },
  methods: { onClick: action("clicked") }
}));
