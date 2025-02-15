export default {
    version: 1.1,
    tags: [
        {
            name: "fast-skeleton",
            title: "Skeleton",
            description: "The FAST skeleton element",
            attributes: [
                {
                    name: "fill",
                    title: "Fill",
                    description: "Indicates the Skeleton should have a filled style",
                    type: "boolean",
                    required: false,
                },
                {
                    name: "shape",
                    title: "Shape",
                    description: "The shape of the Skeleton",
                    type: "string",
                    default: "rect",
                    values: [{ name: "rect" }, { name: "circle" }],
                    required: false,
                },
                {
                    name: "pattern",
                    title: "Pattern URL",
                    description:
                        "Allows a reference to a hosted asset to be used rather than an inline SVG",
                    type: "string",
                    required: false,
                },
                {
                    name: "shimmer",
                    title: "Shimmer",
                    description:
                        "Indicates that the component has an activated shimmer effect",
                    type: "boolean",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description:
                        "The default slot can be used to optionally include inline SVG's rather than a pattern",
                },
            ],
        },
    ],
};
