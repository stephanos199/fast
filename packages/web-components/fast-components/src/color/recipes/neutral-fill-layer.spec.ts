import { expect } from "chai";
import { PaletteRGB } from "../palette.js";
import { SwatchRGB } from "../swatch.js";
import { middleGrey } from "../utilities/color-constants.js";
import { neutralFillLayer } from "./neutral-fill-layer.js";

const neutralPalette = PaletteRGB.create(middleGrey);

describe("neutralFillCard", (): void => {
    it("should get darker when the index of the backgroundColor is lower than the offset index", (): void => {
        const delta = 3
        for (let i: number = 0; i < delta; i++) {
            const color = neutralFillLayer(neutralPalette, neutralPalette.get(i), delta)
            const resolved = neutralPalette.get(delta + i);
            expect(
                color
            ).to.equal(resolved);
        }
    });
    it("should return the color at three steps lower than the background color", (): void => {
        const delta = 3;

        for (let i: number = delta; i < neutralPalette.swatches.length; i++) {
            expect(
                neutralPalette.swatches.indexOf(
                    neutralFillLayer(neutralPalette, neutralPalette.get(i), delta) as SwatchRGB
                )
            ).to.equal(i - 3);
        }
    });
});
