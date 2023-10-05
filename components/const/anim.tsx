export const fadeUp = {
    offscreen: { y: "100%", opacity: 0 },
    onscreen: {
        y: "0",
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1
        }
    }
}
export const zoomIn = {
    offscreen: {  scale: .5, opacity: 0 },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}