var containerItem = document.querySelector('todo__todo-container-item');
var banco = [];
var getBanco = function () { var _a; return (_a = JSON.parse(localStorage.getItem('todo-list'))) !== null && _a !== void 0 ? _a : []; };
var setBanco = function (banco) { return localStorage.setItem('todo-list', JSON.stringify(banco)); };
function AddItem(tarefa, status, indice) {
    var todoList = document.getElementById('todoList');
    var texto = document.querySelector('#input-text').value;
    var item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = "<input type=\"checkbox\"> <div\">".concat(texto, "</div> <input id='remove-item' type=\"button\" value=\"excluir\">");
    document.getElementById('todo-list').appendChild(item);
    banco.push({ 'tarefa': texto, 'status': '' });
    setBanco(banco);
    refreshScreen(todoList);
    console.log(banco);
}
var RemoveItem = function (evento) {
    var elemento = evento.target;
    var indice = elemento.dataset.indice;
    var todoList = document.getElementById('todoList');
    var banco = getBanco();
    console.log('banco', banco);
    banco.splice(indice, 1);
    setBanco(banco);
    refreshScreen(todoList);
};
var refreshScreen = function (todoList) {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
    var banco = getBanco();
    banco.forEach(function (item, indice) { return AddItem(item.tarefa, item.status, indice); });
};
document.getElementById('remove-item').addEventListener('keypress', RemoveItem);
