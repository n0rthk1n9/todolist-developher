const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');

let todoItems = [];

const getList = function(todoItems) {
  itemList.innerHTML = '';

  todoItems.forEach(function(todoItem) {
    itemList.insertAdjacentHTML(
      'beforeend',
      `
      <div class="item my-3">
      <h5 class="item-name text-capitalize">${todoItem}</h5>
      <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon">
          <i class="far fa-check-circle"></i>
        </a>
        <a href="#" class="edit-item mx-2 item-icon">
          <i class="far fa-edit"></i>
        </a>
        <a href="#" class="delete-item item-icon">
          <i class="far fa-times-circle"></i>
        </a>
      </div>
    `
    );
  });
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = itemInput.value;

  if (itemName.length === 0) {
    console.log('War im if');
    feedback.innerHTML = 'Ein Item ohne Name ist nicht zulässig';
    feedback.classList.add('showItem', 'alert-danger');
    setTimeout(function() {
      feedback.classList.remove('showItem');
    }, 3000);
  } else {
    todoItems.push(itemName);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    getList(todoItems);
  }
});
