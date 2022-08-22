let containerItem = document.querySelector('todo__todo-container-item')

let banco = []

const getBanco = () => JSON.parse(localStorage.getItem('todo-list')) ?? []

const setBanco = (banco) => localStorage.setItem('todo-list', JSON.stringify(banco))

function criarItem() {

}



function AddItem(){
  var texto =  (<HTMLSelectElement>document.querySelector('#input-text')).value
  
  const item = document.createElement('label')
  item.classList.add('todo__item')
  
  item.innerHTML = `<input type="checkbox"> <div">${texto}</div> <input type="button" value="excluir" onClick="${RemoveItem(item)}">`

  document.getElementById('todo-list').appendChild(item)
  
}

function RemoveItem(indice) {

}