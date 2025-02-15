export default {
    version: 1.1,
    tags: [
        {
            name: "fast-horizontal-scroll",
            title: "HorizontalScroll",
            description: "The FAST HorizontalScroll element",
            attributes: [
                {
                    name: "view",
                    title: "View",
                    description: "Default or mobile view",
                    type: "string",
                    values: [
                        {
                            name: "mobile",
                        },
                        {
                            name: "default",
                        },
                    ],
                    default: false,
                    required: false,
                },
                {
                    name: "speed",
                    title: "Speed",
                    description: "Scroll speed in pixels per second",
                    type: "number",
                    default: false,
                    required: false,
                },
                {
                    name: "duration",
                    title: "duration",
                    description:
                        "Transition duration in seconds or milliseconds. If present, overrides the `speed` attribute.",
                    type: "string",
                    default: false,
                    required: false,
                },
                {
                    name: "easing",
                    title: "Easing",
                    description: "Scroll easing",
                    type: "string",
                    values: [
                        {
                            name: "linear",
                        },
                        {
                            name: "ease-in",
                        },
                        {
                            name: "ease-out",
                        },
                        {
                            name: "ease-in-out",
                        },
                    ],
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "previousFlipper",
                    title: "Prevous flipper slot",
                    description: "Flipper used to scroll to previous content",
                },
                {
                    name: "nextFlipper",
                    title: "Next flipper slot",
                    description: "Flipper used to scroll to next content",
                },
                {
                    name: "",
                    title: "Default slot",
                    description: "The child nodes to scroll through",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned above the horizontal-scroll",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned below the horizontal-scroll",
                },
            ],
        },
    ],
};
