export default {
    version: 1.1,
    tags: [
        {
            name: "fast-accordion-item",
            title: "Accordion item",
            description: "The FAST accordion item element",
            attributes: [
                {
                    name: "heading-level",
                    title: "Level",
                    description:
                        "The aria-level value (1-6) for the item heading, representing its semantic hierarchy",
                    type: "number",
                    default: 2,
                    required: false,
                },
                {
                    name: "expanded",
                    title: "Expanded",
                    description: "The expanded state of the item",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "id",
                    title: "ID",
                    description: "The HTML ID attribute for the invoking element",
                    type: "string",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The contents of the item",
                },
                {
                    name: "heading",
                    title: "Heading slot",
                    description: "The heading of the accordion item",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the heading",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the heading and before the expand/collapse icons",
                },
                {
                    name: "expanded-icon",
                    title: "Expanded icon slot",
                    description:
                        "Slot to provide a custom icon representing the expanded state",
                },
                {
                    name: "collapsed-icon",
                    title: "Collapsed icon slot",
                    description:
                        "Slot to provide a custom icon representing the collapsed state",
                },
            ],
        },
    ],
};
