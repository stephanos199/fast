export default {
    version: 1.1,
    tags: [
        {
            name: "fast-dialog",
            title: "Dialog",
            description: "The FAST dialog element",
            attributes: [
                {
                    name: "modal",
                    title: "Modal",
                    type: "boolean",
                    description:
                        "When modal, user interaction will be limited to the contents of the element",
                    default: true,
                    required: false,
                },
                {
                    name: "hidden",
                    title: "Hidden",
                    description: "The hidden state of the element",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "trap-focus",
                    title: "Trap focus",
                    description: "Indicates that the dialog should trap focus",
                    type: "boolean",
                    default: true,
                    required: false,
                },
                {
                    name: "aria-describedby",
                    title: "Accessibility description ID",
                    description: "The HTML aria-describedby attribute",
                    type: "string",
                    default: false,
                    required: false,
                },
                {
                    name: "aria-labelledby",
                    title: "Accessibility label ID",
                    description: "The HTML aria-labelledby attribute",
                    type: "string",
                    default: false,
                    required: false,
                },
                {
                    name: "aria-label",
                    title: "Accessibility label",
                    description: "The HTML aria-label attribute",
                    type: "string",
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The dialog content",
                },
            ],
        },
    ],
};
