export function sortedChars(from: number, to: number): string[] {
    let s = ' '

    for (let i = from; i < to; i++) {
        s += String.fromCharCode(i)
    }

    const char = x => {
        const a = document.createElement('canvas').getContext('2d')
        let y = 0,
            i = 0

        a.font = '9px Monaco'
        a.fillText(x, 0, 0, 20)
        for (; i < 3600; ) y += a.getImageData(0, 0, 30, 30).data[i++]
        return y
    }
    return s
        .split('')
        .sort((a, b) => char(b) - char(a))
}

// used only once to generate sorted chars from dark to light