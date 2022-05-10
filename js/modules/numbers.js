export default function initNumbers() {
  function updateNumbers() {
    const numbers = document.querySelectorAll("[data-numbers]");
    numbers.forEach((number) => {
      const total = +number.innerText;
      const startFrom = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += startFrom;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active"));
    observer.disconnect();
    updateNumbers();
  }
  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
