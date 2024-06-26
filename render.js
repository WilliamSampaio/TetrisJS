export default function draw(screen, game, requestAnimationFrame) {

    const context = screen.getContext('2d')

    return requestAnimationFrame(() => {
        draw(screen, game, requestAnimationFrame)
    })
}