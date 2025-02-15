export default {
    version: 1.1,
    tags: [
        {
            name: "fast-data-grid",
            title: "Data grid",
            description: "The FAST data grid element",
            attributes: [
                {
                    name: "generate-header",
                    title: "Generate header",
                    description: "Whether the grid should auto generate a header row",
                    type: "string",
                    values: [{ name: "none" }, { name: "default" }, { name: "sticky" }],
                    required: false,
                },
                {
                    name: "grid-template-columns",
                    title: "Grid template columns",
                    description:
                        "Value that gets applied to the the css gridTemplateColumns attribute of child rows",
                    type: "string",
                    required: false,
                },
                {
                    name: "no-tabbing",
                    title: "Disable tabbing",
                    description:
                        "When true the component will not add itself or its children to the tab queue",
                    type: "boolean",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content as data grid rows",
                },
            ],
        },
    ],
};
