export default {
    version: 1.1,
    tags: [
        {
            name: "fast-anchor",
            title: "Anchor",
            description: "The FAST anchor element",
            attributes: [
                {
                    name: "appearance",
                    title: "Appearance",
                    description: "The anchor's visual treatment",
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
                        {
                            name: "hypertext",
                        },
                    ],
                    default: "neutral",
                    required: false,
                },
                {
                    name: "download",
                    title: "Download",
                    description: "The HTML download attribute of the anchor",
                    type: "string",
                    required: false,
                },
                {
                    name: "href",
                    title: "URL",
                    description: "The URL the anchor points to",
                    type: "string",
                    required: false,
                },
                {
                    name: "hreflang",
                    title: "Linked page language",
                    description: "The language of the URL the anchor points to",
                    type: "string",
                    required: false,
                },
                {
                    name: "ping",
                    title: "Ping URLs",
                    description: "A space-separated list of URLs typically for tracking",
                    type: "string",
                    required: false,
                },
                {
                    name: "referrerpolicy",
                    title: "Referrer policy",
                    description:
                        "The amount of referrer information that should be included with requests",
                    type: "string",
                    required: false,
                    values: [
                        { name: "no-referrer" },
                        { name: "no-referrer-when-downgrade" },
                        { name: "origin" },
                        { name: "origin-when-cross-origin" },
                        { name: "same-origin" },
                        { name: "strict-origin" },
                        { name: "strict-origin-when-cross-origin" },
                        { name: "unsafe-url" },
                    ],
                },
                {
                    name: "rel",
                    title: "Relationship",
                    description:
                        "Space-separated link types indicating the relationship of the linked URL",
                    type: "string",
                    required: false,
                },
                {
                    name: "target",
                    title: "Target",
                    description: "The display target of the URL",
                    type: "string",
                    default: "_self",
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
                    name: "type",
                    title: "Type",
                    description: "The linked URL's format using a MIME type",
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
                        "Contents of the start slot are positioned before the anchor content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the anchor content",
                },
            ],
        },
    ],
};
