export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.weekDay = this.operation.dataset.week.split(",").map(Number);
    this.weekShift = this.operation.dataset.shift.split(",").map(Number);
  }

  dataFromNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isItOpen() {
    const weekOpen = this.weekDay.indexOf(this.dayNow) !== -1;
    const openShift =
      this.timeNow >= this.weekShift[0] && this.timeNow < this.weekShift[1];
    return weekOpen && openShift;
  }

  open() {
    if (this.isItOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.dataFromNow();
      this.open();
    }
    return this;
  }
}
