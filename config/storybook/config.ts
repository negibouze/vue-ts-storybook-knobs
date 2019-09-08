/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";

const req = require.context("../../src/components", true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
