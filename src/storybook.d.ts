declare module "@storybook/addon-knobs/vue" {
  import Vue, { ComponentOptions } from "vue";

  type StoryContext = { kind: string; story: string };

  export function text(name: string, value: string | null, groupId?: string): string;

  export function boolean(name: string, value: boolean, groupId?: string): boolean;

  export function select<T>(name: string, options: { [s: string]: T }, value: T, groupId?: string): T;

  export function withKnobs(storyFn: () => ComponentOptions<Vue>, context: StoryContext): ComponentOptions<Vue> | null;

  export function withKnobsOptions(options: { debounce: boolean, timestamps: boolean }): (storyFn: () => ComponentOptions<Vue>, context: StoryContext) => ComponentOptions<Vue> | null;
}
