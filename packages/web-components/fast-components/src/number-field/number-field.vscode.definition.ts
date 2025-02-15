export default {
    version: 1.1,
    tags: [
        {
            name: "fast-number-field",
            title: "Number field",
            description: "The FAST number-field element",
            attributes: [
                {
                    name: "value",
                    title: "Value",
                    description: "The HTML value attribute of the number field",
                    required: false,
                    type: "string",
                },
                {
                    name: "appearance",
                    title: "Appearance",
                    description: "The number field's visual treatment",
                    default: "outline",
                    values: [{ name: "outline" }, { name: "filled" }],
                    type: "string",
                    required: false,
                },
                {
                    name: "autofocus",
                    title: "Autofocus",
                    description:
                        "Determines if the element should receive document focus on page load",
                    required: false,
                    type: "boolean",
                    default: false,
                },
                {
                    name: "placeholder",
                    title: "Placeholder",
                    description:
                        "Sets the placeholder value of the element, generally used to provide a hint to the user",
                    required: false,
                    type: "string",
                },
                {
                    name: "list",
                    title: "List ID",
                    description: "Allows associating a datalist to the component",
                    required: false,
                    type: "string",
                    default: "",
                },
                {
                    name: "maxlength",
                    title: "Maximum length",
                    description: "The maximum number of characters a user can enter",
                    required: false,
                    type: "number",
                },
                {
                    name: "minlength",
                    title: "Minimum length",
                    description: "The minimum number of characters a user can enter",
                    required: false,
                    type: "number",
                },
                {
                    name: "size",
                    title: "Size",
                    description:
                        "Sets the width of the element to a specified number of characters",
                    required: false,
                    type: "number",
                },
                {
                    name: "name",
                    title: "Name",
                    description:
                        "This element's value will be surfaced during form submission under the provided name",
                    type: "string",
                    default: "",
                },
                {
                    name: "required",
                    title: "Required",
                    description:
                        "Require the field to be completed prior to form submission",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the text field",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "hide-step",
                    title: "Hide step",
                    description: "Hides the step controls",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "readonly",
                    title: "Readonly",
                    description:
                        "When true, the control will be immutable by user interaction",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "max",
                    title: "Maximum",
                    description: "The maximum value",
                    type: "string",
                    default: false,
                    required: false,
                },
                {
                    name: "min",
                    title: "Minimum",
                    description: "The minimum value",
                    type: "string",
                    default: false,
                    required: false,
                },
                {
                    name: "step",
                    title: "Increment",
                    description: "Amount to increment or decrement the value by",
                    type: "string",
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description:
                        "The content of the number field represents its visual label",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the option content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the option content",
                },
            ],
        },
    ],
};
