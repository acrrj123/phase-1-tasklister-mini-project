document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    buildToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildToDo(todo) {
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  list.textContent = `${todo} `
  list.appendChild(btn)
  document.querySelector('#tasks').appendChild(list)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}



