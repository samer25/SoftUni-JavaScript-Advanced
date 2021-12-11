window.addEventListener('load', solve);

function solve() {
    const typeProduct = document.querySelector('#type-product')
    const description = document.querySelector('#description')
    const clientName = document.querySelector('#client-name')
    const clientPhone = document.querySelector('#client-phone')
    const submitBtn = document.querySelector('form button')
    const receivedOrders = document.querySelector('#received-orders')
    const completedOrders = document.querySelector('#completed-orders')
    const cleanBtn = document.querySelector('.clear-btn')
    const form = document.querySelector('form')

    submitBtn.addEventListener('click', onSubmit)

    function onSubmit(ev){
        ev.preventDefault()
        if (description.value === '' || clientName.value === '' || clientPhone.value === ''){
            return;
        }

        const divElement = document.createElement('div')
        divElement.className = 'container'
        divElement.innerHTML = `
            <h2>Product type for repair: ${typeProduct.value}</h2>
            <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
            <h4>Description of the problem: ${description.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>
        
        `
        receivedOrders.appendChild(divElement)

        form.reset()


        const btns = divElement.querySelectorAll('button')

        const startBtn = btns[0]
        const finishBtn = btns[1]

        startBtn.addEventListener('click', onStart)

        finishBtn.addEventListener('click', onFinish)

        function onStart(ev){
            startBtn.disabled = true
            finishBtn.disabled = false

        }

        function onFinish(ev){
            startBtn.remove()
            finishBtn.remove()
            divElement.remove()
            completedOrders.appendChild(divElement)
        }

        cleanBtn.addEventListener('click', onClean)

        function onClean(){
            completedOrders.removeChild(divElement)
        }

    }
}