export default {
    version: 1.1,
    tags: [
        {
            name: "fast-radio",
            title: "Radio",
            description: "The FAST radio element",
            attributes: [
                {
                    name: "checked",
                    title: "Checked",
                    description: "Whether or not this radio is checked by default",
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
                    description: "Sets the disabled state of the radio",
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
                    name: "checked-indicator",
                    title: "Checked indicator slot",
                    description:
                        "Slot to provide a custom icon to represent the checked state",
                },
            ],
        },
    ],
};
