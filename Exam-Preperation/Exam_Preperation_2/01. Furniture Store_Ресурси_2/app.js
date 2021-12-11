window.addEventListener('load', solve);

function solve() {

    let model = document.querySelector('#model')
    let year = document.querySelector('#year')
    let description = document.querySelector('#description')
    let price = document.querySelector('#price')
    const button = document.querySelector('#add')
    const tbody = document.querySelector('#furniture-list')
    let totalSum = 0


    button.addEventListener('click', onAdd)
    function onAdd(ev){
        ev.preventDefault()
        if (model.value === '' || description.value === '' || Number(year.value) < 0 || Number(price) < 0 || year.value === '' || price.value === '') {
            return
        }

        let trElement = document.createElement('tr')
        trElement.className = 'info'
        let trMore = document.createElement('tr')
        trMore.className = 'hide'

        trElement.innerHTML = `
            <td>${model.value}</td>
            <td>${Number(price.value).toFixed(2)}</td>
            <td>
                <button class="moreBtn">More Info</button>
                <button class="buyBtn">Buy it</button>
            </td>
        `
        tbody.appendChild(trElement)

        trMore.innerHTML = `
            <td>Year: ${year.value}</td>
            <td colspan="3">Description: ${description.value}</td>
        `
        tbody.appendChild(trMore)


        let buttons = trElement.querySelectorAll('button')
        let moreBtn = buttons[0]
        let buyBtn = buttons[1]

        moreBtn.addEventListener('click', onMore)
        buyBtn.addEventListener('click', buyFur)

        model.value = ''
        year.value = ''
        description.value = ''
        price.value = ''

    }

    function onMore(ev){
        const hiddenContent = ev.target.parentElement.parentElement.nextElementSibling
        if (ev.target.textContent === 'More Info'){
            ev.target.textContent = 'Less Info'
            hiddenContent.style.display = 'contents'
        }else{
            ev.target.textContent = 'More Info'
            hiddenContent.style.display = 'none'
        }
    }

    function buyFur(e) {
        const totalPrice = document.querySelector('.total-price')
        totalSum += Number(e.target.parentElement.previousElementSibling.textContent)
        totalPrice.textContent = totalSum.toFixed(2)
        e.target.parentElement.parentElement.nextElementSibling.remove()

        e.target.parentElement.parentElement.remove()

    }

}