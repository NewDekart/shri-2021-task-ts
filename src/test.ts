import { style } from './style';
import { contrast, fontColors, TColor } from './model';
  declare global {
    interface ObjectConstructor {
        keys<T>(obj: T): Array<keyof T>
    }
}
console.log('colors:');
console.log(style('red text', { font: 'red' }));
console.log(style('green text', { font: 'green' }));
console.log(style('blue text', { font: 'blue' }));
console.log('\nall colors:');
const isColor: (name: TColor) => boolean = (name) => fontColors.hasOwnProperty(name);
const colorList: TColor[] = Object.keys(fontColors).filter(isColor);
console.log(
    Array.from('Message of all colors')
        .map((char, i) => {
            const font: TColor = colorList[i % colorList.length];
            return style(char, { font, background: contrast[font] });
        })
        .join(''),
);
console.log('\neffects:');
console.log(style('underline red message', { font: 'red', effects: ['underscore'] }));
console.log(style('bright cyan message', { font: 'cyan', effects: ['bright'] }));
console.log('\nmarkdown:');
console.log(style('bold', { bold: true }));
console.log(style('italic', { italic: true }));
console.log(style('monospace', { mono: true }));
console.log(
    `\nПодсветка синтаксиса markdown как в редакторах:\n ${style('жирный', { bold: true })} текст, ${style(
        'наклонный',
        {
            italic: true,
        },
    )} текст, моноширинный — ${style(`console.log(style('monospace', { mono: true }));`, {
        mono: true,
    })}, ссылка ${style('Yandex', { link: 'https://yandex.ru' })}`,
);
