export default {
    version: 1.1,
    tags: [
        {
            name: "fast-slider",
            title: "Slider",
            description: "The FAST slider element",
            attributes: [
                {
                    name: "value",
                    title: "Value",
                    description: "The slider value",
                    required: false,
                    type: "number",
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
                {
                    name: "orientation",
                    title: "Orientation",
                    description: "The orientation of the slider",
                    default: "horizontal",
                    values: [{ name: "horizontal" }, { name: "vertical" }],
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
                    description: "Sets the disabled state of the slider",
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
                        "Default slotted content of the slider represents its visual labels",
                },
                {
                    name: "track",
                    title: "Track slot",
                    description: "Slot to replace the slider track",
                },
                {
                    name: "thumb",
                    title: "Thumb slot",
                    description: "Slot to replace the slider thumb",
                },
            ],
        },
    ],
};
