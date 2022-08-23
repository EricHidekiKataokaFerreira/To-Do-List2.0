// const texto = (<HTMLSelectElement>document.querySelector('#input-text')).value
var texto = document.querySelector('#input-text');
var addButton = document.querySelector('#add-button');
var ulList = document.querySelector('#list');
var list = [];
texto.addEventListener('keypress', function (e) {
    if (e.key == "Enter" && texto.value !== '') {
        addItemList();
    }
});
addButton.onclick = function () {
    if (texto.value !== '') {
        addItemList();
    }
};
function refreshList() {
    var _a;
    ulList.innerHTML = '';
    list = (_a = JSON.parse(localStorage.getItem('todoList'))) !== null && _a !== void 0 ? _a : [];
    list.forEach(function (item, i) {
        addItemOnScreen({ name: item.name, status: item.status }, i);
    });
}
function addItemOnScreen(item, i) {
    var li = document.createElement('li');
    li.classList.add('todo__item');
    li.innerHTML = "\n  <div class=\"todo__item-content\">\n    <input type=\"checkbox\" ".concat(item.status, " data-i=").concat(i, " onchange=\"setChecked(this, ").concat(i, ");\" />\n    <p data-si=").concat(i, ">").concat(item.name, "</p>\n    </div>\n    <button class='todo__remove-item' onclick=\"removeItem(").concat(i, ")\" data-i=").concat(i, ">Remover</button>\n  ");
    ulList.appendChild(li);
    texto.value = '';
}
function updateList() {
    localStorage.setItem('todoList', JSON.stringify(list));
    refreshList();
}
function addItemList() {
    list.push({ 'name': texto.value, 'status': '' });
    updateList();
}
function removeItem(i) {
    list.splice(i, 1);
    updateList();
}
function setChecked(status, i) {
    if (status.checked)
        list[i].status = 'checked';
    else
        list[i].status = '';
    updateList();
}
