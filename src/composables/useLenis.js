import Lenis from 'lenis';

export function useLenis() {
  const lenis = new Lenis({
    duration: 1.5,
    smooth: true,
  })

  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}