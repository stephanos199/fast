export default {
    version: 1.1,
    tags: [
        {
            name: "fast-radio-group",
            title: "Radio group",
            description: "The FAST radio-group element",
            attributes: [
                {
                    name: "value",
                    title: "Value",
                    description: "The value of the radio group",
                    required: false,
                    type: "string",
                },
                {
                    name: "orientation",
                    title: "Orientation",
                    description: "The visual orientation of the group",
                    default: "horizontal",
                    values: [{ name: "horizontal" }, { name: "vertical" }],
                    required: false,
                    type: "string",
                },
                {
                    name: "name",
                    title: "Name",
                    description:
                        "Setting this value will set the name value for all child radios",
                    type: "string",
                    default: "",
                    required: false,
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Disables the radio group and child radios",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "readonly",
                    title: "Readonly",
                    description:
                        "When true, the child radios will be immutable by user interaction",
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
                        "Supports fast-radio elements or elements with a role of 'radio'",
                },
                {
                    name: "label",
                    title: "Label slot",
                    description: "The visual label for the group",
                },
            ],
        },
    ],
};
