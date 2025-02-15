export default {
    version: 1.1,
    tags: [
        {
            name: "fast-option",
            title: "Option",
            description: "The FAST option element",
            attributes: [
                {
                    name: "disabled",
                    title: "Disabled",
                    type: "boolean",
                    description: "Sets the disabled state of the option",
                    default: false,
                    required: false,
                },
                {
                    name: "selected",
                    title: "Selected",
                    type: "boolean",
                    description: "The selected state of the option",
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the option",
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
