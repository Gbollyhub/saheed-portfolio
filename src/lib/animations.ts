import gsap from "gsap";

/**
 * Splits an element's text into individually-wrapped word spans
 * so GSAP can animate each word independently.
 * Returns the NodeList of inner `.wi` spans.
 */
export function splitWords(el: HTMLElement): NodeListOf<Element> {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map(
      (w) =>
        `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;">` +
        `<span class="wi" style="display:inline-block;transform:translateY(105%)">${w}</span>` +
        `</span>`
    )
    .join(" ");
  return el.querySelectorAll(".wi");
}

/** Reveals headline words upward on scroll. Requires ScrollTrigger to be registered. */
export function revealWords(el: HTMLElement, trigger: Element): void {
  const words = splitWords(el);
  gsap.to(words, {
    y: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.055,
    scrollTrigger: { trigger, start: "top 80%" },
  });
}

/** Fades elements up into view on scroll. Requires ScrollTrigger to be registered. */
export function fadeUp(
  targets: gsap.TweenTarget,
  trigger: Element,
  stagger = 0,
  delay = 0
): void {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger,
      delay,
      scrollTrigger: { trigger, start: "top 80%" },
    }
  );
}
