export default {
    version: 1.1,
    tags: [
        {
            name: "fast-breadcrumb-item",
            title: "Breadcrumb item",
            description: "The FAST breadcrumb item element",
            attributes: [
                {
                    name: "href",
                    title: "URL",
                    description: "The URL the item points to",
                    type: "string",
                    default: "",
                    required: false,
                },
                {
                    name: "separator",
                    title: "Separator",
                    description:
                        "Determines whether the visual separator should be rendered",
                    type: "boolean",
                    default: true,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the item",
                },
                {
                    name: "separator",
                    title: "Separator slot",
                    description:
                        "Slot to provide a custom icon to represent the visual separator",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the default content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the default content",
                },
            ],
        },
    ],
};
