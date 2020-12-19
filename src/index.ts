import { getChar, getRGB, escape, getImageData, getSimpleChar } from "./utils";

class Filter {
    private readonly element
    private readonly container
    private readonly callback
    private readonly color
    private width
    private imageData

    constructor(config) {
        this.element = config.element || null
        this.container = config.container || null
        this.callback = config.callback || (() => true)
        this.width = config.width || null
        this.color = config.color || null

        this.init()
    }

    init() {
        this.element.addEventListener('load', () => {
            this.render()
        })
    }

    render() {
        const { width, height } = this.getDimension(this.element)
        if (!width || !height) return false

        this.imageData = getImageData(this.element, this.width)
        const asciiStr = this.getAsciiString()

        if (this.container) this.container.innerHTML = asciiStr
        if (this.callback) this.callback(asciiStr)
    }

    getDimension(element) {
        const ratio = element.naturalHeight / element.naturalWidth
        return { width: this.width, height: ~~(this.width * ratio) }
    }

    getAsciiString() {
        const { width, height } = this.getDimension(this.element)
        let str = ''

        for (let i = 0; i < width * height; i++) {
            if (i % width === 0) str += '\n'
            const rgb = getRGB(i, this.imageData)
            const value = Math.max(...rgb) / 255

            str += this.color
                ? `<i style="color: rgb(${rgb.join(',')})">${getChar(
                      value
                  )}</i>`
                : escape(getSimpleChar(value))
        }
        return str
    }
}

export default Filter
