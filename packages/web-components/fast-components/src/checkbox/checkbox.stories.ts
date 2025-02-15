import addons from "@storybook/addons";
import { STORY_RENDERED } from "@storybook/core-events";
import { Checkbox as FoundationCheckbox } from "@microsoft/fast-foundation";
import Examples from "./fixtures/base.html";
import "./index.js";

addons.getChannel().addListener(STORY_RENDERED, (name: string) => {
    if (name.toLowerCase().startsWith("checkbox")) {
        document
            .querySelectorAll(".flag-indeterminate")
            .forEach((el: FoundationCheckbox) => {
                el.indeterminate = true;
            });
    }
});

export default {
    title: "Checkbox",
};

export const Checkbox = () => Examples;
