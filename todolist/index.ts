// const texto = (<HTMLSelectElement>document.querySelector('#input-text')).value
const texto: any = document.querySelector('#input-text')
const addButton: any = document.querySelector('#add-button')
const ulList = document.querySelector('#list')

interface IItem {
  name: string
  status: string
}

var list: IItem[] = []

texto.addEventListener('keypress', (e: any) => {
  if (e.key == "Enter" && texto.value !== '') {
    addItemList()
  }
})

addButton.onclick = () => {
  if (texto.value !== '') {
    addItemList()
  }
}

function refreshList () {
  ulList.innerHTML = ''

  list = JSON.parse(localStorage.getItem('todoList')) ?? []
  list.forEach((item: IItem, i ) => {
    addItemOnScreen({name: item.name, status: item.status}, i)
  })
}

function addItemOnScreen (item: IItem, i: number) {
  const li = document.createElement('li')
  li.classList.add('todo__item');

  li.innerHTML = `
  <div class="todo__item-content">
    <input type="checkbox" ${item.status} data-i=${i} onchange="done(this, ${i});" />
    <p data-si=${i}>${item.name}</p>
    </div>
    <button class='todo__remove-item' onclick="removeItem(${i})" data-i=${i}><i></i></button>
  `

  ulList.appendChild(li)

  texto.value = ''
}

function updateList () {
  localStorage.setItem('todoList', JSON.stringify(list))
  refreshList()
} 

function addItemList (){
  list.push( { 'name': texto.value, 'status': '' } )
  updateList()
}

function removeItem (i: number) {
  list.splice(i, 1)
  updateList()
}

function setChecked (status, i) {
  if (status.checked) list[i].status = 'checked'
  else list[i].status = ''
}
