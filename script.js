/*

При натисканні на кожну з кнопок підсумовуються 
значення з data-атрибутів.

За натисканням на кнопку "Вивести результат" 
виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.

*/

const refs = {
  statList: document.querySelector(".statList"),
  resultButton: document.querySelector("#resultButton"),
  resultSection: document.querySelector("#resultSection"),
};
let sum = 0;
const statButtonClicks = {};

refs.statList.addEventListener("click", onStatListButtonClick);
refs.resultButton.addEventListener("click", onResultButtonClick);

function onStatListButtonClick(event) {
  const number = Number(event.target.dataset.number);
  sum += number;
  statButtonClicks[event.target.textContent] =
    (statButtonClicks[event.target.textContent] || 0) + 1;
  console.log(event.target);
}
function onResultButtonClick() {
  const currentStat = Object.entries(statButtonClicks).toSorted();
  const markup = currentStat
    .map((item) => {
      return `
        <p>${item[0]}: <strong>${item[1]}</strong> times clicked</p>
      `;
    })
    .join("");

  const sumTitle = `<h2>Summary of buttons vallues: <strong>${sum}</strong></h2>`;
  refs.resultSection.innerHTML = sumTitle.concat(markup);
}
