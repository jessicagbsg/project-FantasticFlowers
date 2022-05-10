export default class AnimatedNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // binds "this" from object to Mutation callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recieves an elemtn from DOM, with a number in its text, add from 0 untill the end
  static addNumbers(number) {
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
  }

  // activates addNumbers for each number selected from DOM
  updateNumbers() {
    this.numbers.forEach((number) => {
      this.constructor.addNumbers(number);
    });
  }

  // everytime a mutation occurs this function runs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass));
    this.observer.disconnect();
    this.updateNumbers();
  }

  // adds MutationObserver to check when active class is added to the targeted element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
