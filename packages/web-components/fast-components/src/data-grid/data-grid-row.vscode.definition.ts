export default {
    version: 1.1,
    tags: [
        {
            name: "fast-data-grid-row",
            title: "Data grid row",
            description: "The FAST data grid row element",
            attributes: [
                {
                    name: "grid-template-columns",
                    title: "Grid template columns",
                    description:
                        "Value that gets applied to the the css gridTemplateColumns attribute of child rows",
                    type: "string",
                    required: false,
                },
                {
                    name: "row-type",
                    title: "Row type",
                    description: "The type of row",
                    type: "string",
                    values: [
                        { name: "default" },
                        { name: "header" },
                        { name: "sticky-header" },
                    ],
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The row content as data grid cells",
                },
            ],
        },
    ],
};
