import AnimatedNumbers from "./animatedNumbers.js";

export default function FetchNumbers() {
  function createFlower(flower) {
    const div = document.createElement("div");
    div.classList.add("flowers-numbers");
    div.innerHTML = `<h3>${flower.specie}</h3><span data-numbers>${flower.total}</span>`;
    return div;
  }

  async function fetchFlowers(url) {
    try {
      const flowersResponse = await fetch(url);
      const flowersJSON = await flowersResponse.json();
      const gridNumbers = document.querySelector(".numbers-grid");

      flowersJSON.forEach((flower) => {
        const divFlower = createFlower(flower);
        gridNumbers.appendChild(divFlower);
      });
      const numbers = new AnimatedNumbers(
        "[data-numbers]",
        ".numbers",
        "active"
      );
      numbers.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchFlowers("./flowersAPI.json");
}
