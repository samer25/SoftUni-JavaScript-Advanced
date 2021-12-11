function addItem() {
    let select = document.getElementById('menu')
    let text = document.getElementById('newItemText')
    let value = document.getElementById('newItemValue')
    let options = document.createElement('option')
    let result = `${text.value}: ${value.value}`
    options.textContent = result
    select.appendChild(options)
    text.value = ''
    value.value = ''
}