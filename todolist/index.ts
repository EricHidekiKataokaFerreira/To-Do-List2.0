let containerItem = document.querySelector('todo__todo-container-item')

let banco = []

const getBanco = () => JSON.parse(localStorage.getItem('todo-list')) ?? []

const setBanco = (banco) => localStorage.setItem('todo-list', JSON.stringify(banco))

function AddItem(tarefa: string, status: string, indice: string){
  const todoList = document.getElementById('todoList')

  var texto =  (<HTMLSelectElement>document.querySelector('#input-text')).value
  
  const item = document.createElement('label')
  item.classList.add('todo__item')
  
  item.innerHTML = `<input type="checkbox"> <div>${texto}</div> <input id='remove-item' type="button" value="excluir">`

  document.getElementById('todo-list').appendChild(item)
  
  banco.push ({'tarefa': texto, 'status': ''})
  setBanco(banco)
  refreshScreen(todoList)
  console.log(banco)
}

const RemoveItem = (evento) => {
  const elemento = evento.target
  const indice = elemento.dataset.indice
  const todoList = document.getElementById('todoList')
  const banco = getBanco()

  console.log('banco', banco)
  banco.splice (indice, 1)
  setBanco(banco)
  refreshScreen(todoList)
}

const refreshScreen = (todoList) => {
  while (todoList.firstChild) { todoList.removeChild(todoList.lastChild) }
  const banco = getBanco()
  banco.forEach ( (item, indice) => AddItem (item.tarefa, item.status, indice))
}

document.getElementById('remove-item').addEventListener('keypress', RemoveItem)