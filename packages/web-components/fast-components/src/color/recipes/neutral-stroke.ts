import { Palette } from "../palette.js";
import { InteractiveSwatchSet } from "../recipe.js";
import { Swatch } from "../swatch.js";
import { directionByIsDark } from "../utilities/direction-by-is-dark.js";

/**
 * @internal
 */
export function neutralStroke(
    palette: Palette,
    reference: Swatch,
    restDelta: number,
    hoverDelta: number,
    activeDelta: number,
    focusDelta: number
): InteractiveSwatchSet {
    const referenceIndex = palette.closestIndexOf(reference);
    const direction = directionByIsDark(reference);

    const restIndex = referenceIndex + direction * restDelta;
    const hoverIndex = restIndex + direction * (hoverDelta - restDelta);
    const activeIndex = restIndex + direction * (activeDelta - restDelta);
    const focusIndex = restIndex + direction * (focusDelta - restDelta);

    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(activeIndex),
        focus: palette.get(focusIndex),
    };
}
