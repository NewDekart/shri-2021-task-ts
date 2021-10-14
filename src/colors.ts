import { backgroundColors, effects, fontColors, Reset, TColor, TEffects } from './model';
export interface IColorOptions {
    font?: TColor
    background?: TColor
    effects?: Array<TEffects>
}
function addColor(text: string, color: TColor, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Array<TEffects>) {
    return effectList.map(effect => effects[effect]).join('');
}
export function color(text: string, options: IColorOptions | undefined) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
