import { Palette } from "../palette.js";
import { InteractiveSwatchSet } from "../recipe.js";
import { Swatch } from "../swatch.js";
import { directionByIsDark } from "../utilities/direction-by-is-dark.js";

/**
 * @internal
 */
export function neutralFillContrast(
    palette: Palette,
    reference: Swatch,
    restDelta: number,
    hoverDelta: number,
    activeDelta: number,
    focusDelta: number
): InteractiveSwatchSet {
    const direction = directionByIsDark(reference);
    const accessibleIndex = palette.closestIndexOf(palette.colorContrast(reference, 4.5));
    const accessibleIndex2 =
        accessibleIndex + direction * Math.abs(restDelta - hoverDelta);
    const indexOneIsRest =
        direction === 1
            ? restDelta < hoverDelta
            : direction * restDelta > direction * hoverDelta;
    let restIndex: number;
    let hoverIndex: number;

    if (indexOneIsRest) {
        restIndex = accessibleIndex;
        hoverIndex = accessibleIndex2;
    } else {
        restIndex = accessibleIndex2;
        hoverIndex = accessibleIndex;
    }

    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(restIndex + direction * activeDelta),
        focus: palette.get(restIndex + direction * focusDelta),
    };
}
