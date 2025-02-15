export default {
    version: 1.1,
    tags: [
        {
            name: "fast-avatar",
            title: "Avatar",
            description: "The FAST avatar element",
            attributes: [
                {
                    name: "fill",
                    description: "The fill attribute",
                    type: "string",
                    required: false,
                },
                {
                    name: "color",
                    description: "The color attribute",
                    type: "string",
                    required: false,
                },
                {
                    name: "alt",
                    description: "The alt attribute",
                    type: "string",
                    required: false,
                },
                {
                    name: "link",
                    description: "The link attribute",
                    type: "string",
                    required: false,
                },
                {
                    name: "shape",
                    description: "The shape attribute",
                    type: "string",
                    default: "circle",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "badge",
                    description: "The badge slot",
                },
            ],
        },
    ],
};
