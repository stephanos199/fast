import { html, ref } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import { Orientation } from "@microsoft/fast-web-utilities";
import type { ElementDefinitionContext } from "../design-system";
import type { FoundationElementDefinition } from "../foundation-element";
import type { VirtualizingStack } from "./virtualizing-stack";

/**
 * The template for the {@link @microsoft/fast-foundation#VirtualizingPanel} component.
 * @public
 */
export const virtualizingStackTemplate: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ViewTemplate<VirtualizingStack> = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => html`
    <template>
        <div
            class="container"
            style="
                width: ${x =>
                x.orientation !== Orientation.vertical
                    ? `${x.totalStackSpan}px`
                    : "100%"};
                grid-template-columns: ${x =>
                x.orientation !== Orientation.vertical ? x.gridTemplateSpans : "1fr"};
                height: ${x =>
                x.orientation === Orientation.vertical
                    ? `${x.totalStackSpan}px`
                    : "100%"};
                grid-template-rows:${x =>
                x.orientation === Orientation.vertical ? x.gridTemplateSpans : "1fr"};
                display: grid;
            "
            ${ref("containerElement")}
        >
            <slot></slot>
        </div>
    </template>
`;