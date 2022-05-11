import AnimatedNumbers from "./animatedNumbers.js";

export default function fetchNumbers(url, target) {
  // creates div wtih total
  function createFlower(flower) {
    const div = document.createElement("div");
    div.classList.add("flowers-numbers");
    div.innerHTML = `<h3>${flower.specie}</h3><span data-numbers>${flower.total}</span>`;
    return div;
  }

  const gridNumbers = document.querySelector(target);
  function fillFlowers(flower) {
    const divFlower = createFlower(flower);
    gridNumbers.appendChild(divFlower);
  }

  // animates numbers
  function animatedFlowersNumbers() {
    const numbers = new AnimatedNumbers("[data-numbers]", ".numbers", "active");
    numbers.init();
  }

  // pulls from JSON and creates each "flower" using createFlowers
  async function fetchFlowers() {
    try {
      // awaits for fetch response and transforms into JSON
      const flowersResponse = await fetch(url);
      const flowersJSON = await flowersResponse.json();

      // after transforming into JSON activates functions to fill and animate numbers
      flowersJSON.forEach((flower) => fillFlowers(flower));
      animatedFlowersNumbers();
    } catch (error) {
      console.log(error);
    }
  }
  return fetchFlowers();
}
