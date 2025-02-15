export default {
    version: 1.1,
    tags: [
        {
            name: "fast-button",
            title: "Button",
            description: "The FAST button element",
            attributes: [
                {
                    name: "appearance",
                    title: "Appearance",
                    description: "The button's visual treatment",
                    type: "string",
                    values: [
                        {
                            name: "accent",
                        },
                        {
                            name: "lightweight",
                        },
                        {
                            name: "neutral",
                        },
                        {
                            name: "outline",
                        },
                        {
                            name: "stealth",
                        },
                    ],
                    default: "neutral",
                    required: false,
                },
                {
                    name: "autofocus",
                    title: "Autofocus",
                    description:
                        "Determines if the element should receive document focus on page load",
                    type: "boolean",
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    title: "Disabled",
                    description: "Sets the disabled state of the button",
                    type: "boolean",
                    required: false,
                },
                {
                    name: "form",
                    title: "Form ID",
                    description: "The ID of a form to associate the element to",
                    type: "string",
                    required: false,
                },
                {
                    name: "formaction",
                    title: "Form processing url",
                    description: "The HTML formaction attribute of the button",
                    type: "string",
                    required: false,
                },
                {
                    name: "formenctype",
                    title: "Form encoding",
                    description: "The HTML formenctype attribute of the button",
                    type: "string",
                    required: false,
                },
                {
                    name: "formmethod",
                    title: "Form submit method",
                    description: "The HTML formmethod attribute of the button",
                    type: "string",
                    required: false,
                    values: [{ name: "post" }, { name: "get" }],
                },
                {
                    name: "formnovalidate",
                    title: "No form validation",
                    description: "The HTML formnovalidate attribute of the button",
                    type: "boolean",
                    required: false,
                },
                {
                    name: "formtarget",
                    title: "Form Target",
                    description: "The HTML formtarget attribute of the button",
                    type: "string",
                    values: [
                        {
                            name: "_self",
                        },
                        {
                            name: "_blank",
                        },
                        {
                            name: "_parent",
                        },
                        {
                            name: "_top",
                        },
                    ],
                    required: false,
                },
                {
                    name: "name",
                    title: "Name",
                    description: "The HTML name attribute of the button",
                    type: "string",
                    required: false,
                },
                {
                    name: "type",
                    title: "Type",
                    description: "The HTML type attribute of the button",
                    type: "string",
                    required: false,
                    values: [
                        {
                            name: "submit",
                        },
                        {
                            name: "reset",
                        },
                        {
                            name: "button",
                        },
                    ],
                },
                {
                    name: "value",
                    title: "Value",
                    description: "The HTML value attribute of the button",
                    type: "string",
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the anchor",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the button content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the button content",
                },
            ],
        },
    ],
};
