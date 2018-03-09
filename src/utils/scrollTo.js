export default function scrollTo(y, duration) {
  const initialY =
    document.documentElement.scrollTop || document.body.scrollTop;
  const baseY = (initialY + y) * 0.5;
  const difference = initialY - baseY;
  const startTime = performance.now();

  function step() {
    let normalizedTime = (performance.now() - startTime) / duration;

    if (normalizedTime > 1) normalizedTime = 1;

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));

    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
