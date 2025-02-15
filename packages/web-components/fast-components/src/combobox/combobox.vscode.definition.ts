export default {
    version: 1.1,
    tags: [
        {
            name: "fast-combobox",
            title: "Combobox",
            description: "The FAST combobox element",
            attributes: [
                {
                    name: "autocomplete",
                    title: "Autocomplete",
                    description:
                        "Sets the autocomplete method to use when the combobox receives user input",
                    default: "",
                    type: "string",
                    values: [
                        {
                            name: "inline",
                        },
                        {
                            name: "list",
                        },
                        {
                            name: "both",
                        },
                        {
                            name: "none",
                        },
                    ],
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the combobox",
                    type: "boolean",
                    default: false,
                    required: false,
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
                    name: "position",
                    title: "Position",
                    description: "Controls the placement of the combobox dropdown",
                    required: false,
                    type: "string",
                    values: [
                        {
                            name: "above",
                        },
                        {
                            name: "below",
                        },
                    ],
                },
                {
                    name: "placeholder",
                    title: "Placeholder",
                    description:
                        "Sets the placeholder value of the combobox to provide a hint to the user",
                    required: false,
                    type: "string",
                },
                {
                    name: "value",
                    title: "Value",
                    description: "The initial value of the combobox",
                    required: false,
                    type: "string",
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description:
                        "Supports fast-option, option elements, or elements with a role of option",
                },
                {
                    name: "control",
                    title: "Input Control slot",
                    description: "Slot to replace the contents of the control container",
                },
                {
                    name: "indicator",
                    title: "Indicator slot",
                    description:
                        "Slot to provide a custom icon to represent the visual indicator",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the contents of the control container",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the contents of the control container",
                },
            ],
        },
    ],
};
