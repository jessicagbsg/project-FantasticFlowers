export default class ScrollAnimation {
  constructor(sections) {
    this.activeClass = "active";
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.4;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // gets distance of each section from scroll top
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  // checks distance of each section from scroll top
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}
