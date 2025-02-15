export default {
    version: 1.1,
    tags: [
        {
            name: "fast-progress-ring",
            title: "Progress ring",
            description: "The FAST progress-ring element",
            attributes: [
                {
                    name: "value",
                    title: "Value",
                    description:
                        "Value between 1 and 100 to represent the progress visually and to assistive technologies",
                    default: "",
                    required: false,
                    type: "number",
                },
                {
                    name: "min",
                    title: "Minimum",
                    description: "The minimum value",
                    default: 0,
                    required: false,
                    type: "number",
                },
                {
                    name: "max",
                    title: "Maximum",
                    description: "The maximum value",
                    default: 100,
                    required: false,
                    type: "number",
                },
                {
                    name: "paused",
                    title: "Paused",
                    description: "Sets the paused state of the progress component",
                    default: false,
                    required: false,
                    type: "boolean",
                },
            ],
            slots: [
                {
                    name: "determinate",
                    title: "Determinate slot",
                    description:
                        "Slot to provide custom visual representations of the determinate progress ring",
                },
                {
                    name: "indeterminate",
                    title: "Indeterminate slot",
                    description:
                        "Slot to provide custom visual representations of the indeterminate progress ring",
                },
            ],
        },
    ],
};
