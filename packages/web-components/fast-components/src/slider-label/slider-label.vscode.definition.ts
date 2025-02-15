export default {
    version: 1.1,
    tags: [
        {
            name: "fast-slider-label",
            title: "Slider label",
            description: "The FAST slider-label element",
            attributes: [
                {
                    name: "hide-mark",
                    title: "Hide mark",
                    description: "Hides the tick mark",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the label",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "position",
                    title: "Position",
                    description:
                        "The position of the label relative to the min and max value of the parent",
                    type: "string",
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the slider label",
                },
            ],
        },
    ],
};
