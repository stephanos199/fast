export default {
    version: 1.1,
    tags: [
        {
            name: "fast-tabs",
            title: "Tabs",
            description: "The FAST tabs element",
            attributes: [
                {
                    name: "orientation",
                    title: "Orientation",
                    description: "The orientation of the tabs",
                    default: "horizontal",
                    required: false,
                    type: "string",
                    values: [{ name: "horizontal" }, { name: "vertical" }],
                },
                {
                    name: "activeid",
                    title: "Active ID",
                    description: "The HTML ID of the active tab",
                    required: false,
                    type: "string",
                },
            ],
            slots: [
                {
                    name: "tab",
                    title: "Tab slot",
                    description:
                        "Slotted tabs are rendered and associated to their respective tab panel by their order in the DOM",
                },
                {
                    name: "tabpanel",
                    title: "Tabpanel slot",
                    description:
                        "Slotted tab panels are rendered and associated to their respective tabs by their order in the DOM",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the tablist",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the tablist",
                },
            ],
        },
    ],
};
