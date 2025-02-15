export default {
    version: 1.1,
    tags: [
        {
            name: "fast-switch",
            title: "Switch",
            description: "The FAST switch element",
            attributes: [
                {
                    name: "checked",
                    title: "Checked",
                    description: "Provides the default checked value",
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
                    description: "Sets the disabled state of the switch",
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
                    description: "The content of the switch represents its visual label",
                },
                {
                    name: "checked-message",
                    title: "Checked message slot",
                    description: "Visible content representing the checked state",
                },
                {
                    name: "unchecked-message",
                    title: "Unchecked message slot",
                    description: "Visible content representing the unchecked state",
                },
            ],
        },
    ],
};
