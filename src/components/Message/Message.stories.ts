import { storiesOf } from "@storybook/vue";
import { withKnobs, select, text } from "@storybook/addon-knobs/vue";
import Message from "./Message.vue";
import { Color } from "./export-types";

const label = "Colors";
const options = {
  default: Color.Default,
  success: Color.Success,
  info: Color.Info,
  warn: Color.Warn,
  danger: Color.Danger
};
const defaultValue = Color.Default;

const stories = storiesOf("Message", module);
stories.addDecorator(withKnobs);

stories.add("normal", () => ({
  components: { Message },
  template: '<message :msg="msg" :color="color" />',
  props: {
    msg: {
      default: text("Message", "Message from Storybook")
    },
    color: {
      type: Number,
      default: select(label, options, defaultValue)
    }
  }
}));
