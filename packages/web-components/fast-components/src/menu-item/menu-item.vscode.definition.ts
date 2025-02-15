export default {
    version: 1.1,
    tags: [
        {
            name: "fast-menu-item",
            title: "Menu item",
            description: "The FAST menu item element",
            attributes: [
                {
                    name: "disabled",
                    title: "Disabled",
                    type: "boolean",
                    description: "Sets the disabled state of the item",
                    default: true,
                    required: false,
                },
                {
                    name: "expanded",
                    title: "Expanded",
                    type: "boolean",
                    description: "The expanded state of the item",
                    default: true,
                    required: false,
                },
                {
                    name: "role",
                    title: "Role",
                    type: "string",
                    description: "The ARIA role of the menu item",
                    default: "menuitem",
                    values: [
                        { name: "menuitem" },
                        { name: "menuitemcheckbox" },
                        { name: "menuitemradio" },
                    ],
                    required: false,
                },
                {
                    name: "checked",
                    title: "Checked",
                    type: "boolean",
                    description:
                        "The checked state for elements with a role of menuitemradio or menuitemcheckbox",
                    default: true,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description: "The content of the menu item",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the item content",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the item content",
                },
                {
                    name: "submenu",
                    title: "Sub menu slot",
                    description: "The submenu slot",
                },
                {
                    name: "checkbox-indicator",
                    title: "Checkbox indicator",
                    description: "The checkbox indicator slot",
                },
                {
                    name: "radio-indicator",
                    title: "Radio indicator",
                    description: "The radio indicator slot",
                },
                {
                    name: "expand-collapse-indicator",
                    title: "Expand/collapse indicator",
                    description: "The expand/collapse indicator slot",
                },
            ],
        },
    ],
};
