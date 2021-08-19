const addBtnElement = document.getElementById("addBtn");
const descriptionInputElement = document.getElementById("formDescription");
const transactionListElement = document.getElementById("ul");

function createListItem(description) {
  const li = `<li class="list-group-item d-flex justify-content-between">
    ${description} <button class="btn btn btn-danger">-</button>
  </li>`;
  return li;
}

function updateList(listItem) {
  transactionListElement.insertAdjacentHTML("beforeend", listItem);
}

function clearForm() {
  descriptionInputElement.value = "";
}
addBtnElement.addEventListener("click", () => {
  const description = descriptionInputElement.value;
  console.log(description);

  if (!description) {
    return;
  }
  const li = createListItem(description);
  updateList(li);
  clearForm();
});


document.addEventListener("click", (event) => {

  if (event.target.innerText === "-") {
    const li = event.target.parentElement;
    transactionListElement.removeChild(li);
    console.log(li);
  }
});
