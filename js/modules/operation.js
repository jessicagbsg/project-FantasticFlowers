export default function initOperation() {
  const operation = document.querySelector("[data-week]");
  const weekDay = operation.dataset.week.split(",").map(Number);
  const weekShift = operation.dataset.shift.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const weekOpen = weekDay.indexOf(dayNow) !== -1;
  const openShift = timeNow >= weekShift[0] && timeNow < weekShift[1];
  if (weekOpen && openShift) {
    operation.classList.add("open");
  }
}
