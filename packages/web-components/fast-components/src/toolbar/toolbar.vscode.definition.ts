export default {
    version: 1.1,
    tags: [
        {
            name: "fast-toolbar",
            title: "Toolbar",
            description: "The FAST toolbar element",
            attributes: [
                {
                    name: "orientation",
                    title: "Orientation",
                    description: "The orientation of the toolbar",
                    default: "horizontal",
                    values: [{ name: "horizontal" }, { name: "vertical" }],
                    required: false,
                    type: "string",
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The toolbar content",
                },
                {
                    name: "label",
                    title: "Label slot",
                    description: "The visual label for the toolbar",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the contents of the toolbar",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the contents of the toolbar",
                },
            ],
        },
    ],
};
