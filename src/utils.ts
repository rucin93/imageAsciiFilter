import { sortedChars } from './sortChars'

const chars = '    `.-:\',_";|!+/<>=^ir?cvl*LstJf7)xjo(unT1zYCe{Fy}I[2Sa]3hkVE45ZmPwpGqUbXdK#6A9OH$Dg8R%B@&QN0MW'
    .split('')
    .reverse()

export function getChar(val: number): string {
    return chars[parseInt((val * (chars.length - 1)).toString(), 10)]
}

export function getSimpleChar(val: number): string {
    const simpleChars = "@#$=*!;:~-,.  "
    return simpleChars[parseInt((val * (simpleChars.length - 1)).toString(), 10)]
}

export function getRGB(i: number, d) {
    return [d[(i = i * 4)], d[i + 1], d[i + 2]]
}

export function escape(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export function range(start: number, end: number): number[] {
    return Array.from(new Array(end - start + 1).keys()).map(i => i + start)
}

export function getImageData(image, width) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const { naturalWidth, naturalHeight } = image

    const ratio = naturalHeight / naturalWidth

    ctx.drawImage(image, 0, 0, width, width * ratio)
    return ctx.getImageData(0, 0, width, width * ratio).data
}
