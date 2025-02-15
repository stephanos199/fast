export default {
    version: 1.1,
    tags: [
        {
            name: "fast-text-area",
            title: "Text area",
            description: "The FAST text-area element",
            attributes: [
                {
                    name: "appearance",
                    title: "Appearance",
                    description: "The text area's visual treatment",
                    default: "outline",
                    required: false,
                    type: "string",
                    values: [{ name: "outline" }, { name: "filled" }],
                },
                {
                    name: "resize",
                    title: "Resize",
                    description: "The resize mode of the element",
                    required: false,
                    type: "string",
                    values: [
                        { name: "none" },
                        { name: "both" },
                        { name: "horizontal" },
                        { name: "vertical" },
                    ],
                    default: "none",
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
                    name: "cols",
                    title: "Columns",
                    description:
                        "Sizes the element vertically by a number of character columns",
                    required: false,
                    type: "number",
                    default: 20,
                },
                {
                    name: "form",
                    description: "The form attribute",
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
                    name: "placeholder",
                    title: "Placeholder",
                    description:
                        "Sets the placeholder value of the element, generally used to provide a hint to the user",
                    required: false,
                    type: "string",
                },
                {
                    name: "rows",
                    title: "Rows",
                    description:
                        "Sizes the element vertically by a number of character rows",
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
                    name: "value",
                    title: "Value",
                    description: "The HTML value attribute of the text area",
                    required: false,
                    type: "string",
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
                    description: "Sets the disabled state of the text area",
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
                    description:
                        "The content of the text area represents its visual label",
                },
            ],
        },
    ],
};
