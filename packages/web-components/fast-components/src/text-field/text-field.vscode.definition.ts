export default {
    version: 1.1,
    tags: [
        {
            name: "fast-text-field",
            title: "Text field",
            description: "The FAST text-field element",
            attributes: [
                {
                    name: "value",
                    title: "Value",
                    description: "The HTML value attribute of the text field",
                    required: false,
                    type: "string",
                },
                {
                    name: "appearance",
                    title: "Appearance",
                    description: "The text field's visual treatment",
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
                    name: "type",
                    title: "Type",
                    description: "Specifies the type of text input for the field",
                    default: "text",
                    values: [
                        { name: "email" },
                        { name: "password" },
                        { name: "tel" },
                        { name: "text" },
                        { name: "url" },
                    ],
                    type: "string",
                    required: false,
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
                    name: "pattern",
                    title: "Validation pattern",
                    description:
                        "A regular expression that the value must match to pass validation",
                    required: false,
                    type: "string",
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
                    name: "spellcheck",
                    title: "Spellcheck",
                    description:
                        "Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used",
                    required: false,
                    type: "boolean",
                },
                {
                    name: "name",
                    title: "Name",
                    description:
                        "This element's value will be surfaced during form submission under the provided name",
                    type: "string",
                    default: "",
                    required: false,
                },
                {
                    name: "required",
                    title: "Required",
                    description:
                        "Require the field to be completed prior to form submission",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the number field",
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
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the radio represents its visual label",
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
