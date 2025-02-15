export default {
    version: 1.1,
    tags: [
        {
            name: "fast-select",
            title: "Select",
            description: "The FAST select element",
            attributes: [
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the select",
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
                    name: "multiple",
                    title: "Multiple",
                    description: "Indicates if the select is in multi-selection mode",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "size",
                    title: "Size",
                    description: "The maximum number of visible options",
                    type: "string",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "Supports fast-option or option elements",
                },
                {
                    name: "button-container",
                    title: "Button container slot",
                    description:
                        "Slot to replace the entire invoking element and its contents",
                },
                {
                    name: "selected-value",
                    title: "Selected value slot",
                    description: "Slot to replace the displayed value contents",
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
                        "Contents of the start slot are positioned before the button container",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the button container and after the indicator",
                },
            ],
        },
    ],
};
