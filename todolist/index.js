var containerItem = document.querySelector('todo__todo-container-item');
var banco = [];
var getBanco = function () { var _a; return (_a = JSON.parse(localStorage.getItem('todo-list'))) !== null && _a !== void 0 ? _a : []; };
var setBanco = function (banco) { return localStorage.setItem('todo-list', JSON.stringify(banco)); };
function criarItem() {
}
function AddItem() {
    var texto = document.querySelector('#input-text').value;
    var item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = "<input type=\"checkbox\"> <div\">".concat(texto, "</div> <input type=\"button\" value=\"excluir\" onClick=\"").concat(RemoveItem(item), "\">");
    document.getElementById('todo-list').appendChild(item);
}
function RemoveItem(indice) {
}
