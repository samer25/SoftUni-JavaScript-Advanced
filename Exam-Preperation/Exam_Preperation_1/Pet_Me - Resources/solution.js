function solve(){
    const inputs = document.querySelectorAll('#container input')
    const btnAdd = document.querySelector('#container button')
    const form = document.querySelector('form')

    btnAdd.addEventListener('click', add)

    function add(ev){
        ev.preventDefault()
        const name = inputs[0].value
        const age = Number(inputs[1].value)
        const kind = inputs[2].value
        const currOwner = inputs[3].value

        if (name === '' || Number.isNaN(age) || inputs[1].value === '' || kind === '' || currOwner === ''){
            return;
        }

        const adoptionUl = document.querySelector('#adoption ul')

        const liElement = document.createElement('li')
        const btnElement = document.createElement('button')
        btnElement.textContent = 'Contact with owner'

        liElement.innerHTML = `
            <p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p>
            <span>Owner: ${currOwner}</span>
        `
        liElement.appendChild(btnElement)
        adoptionUl.appendChild(liElement)
        form.reset()


        btnElement.addEventListener('click', contactOwner)

        function contactOwner(){
            const divElement = document.createElement('div')

            const inputNewOwner = document.createElement('input')
            inputNewOwner.placeholder = 'Enter your names'
            const adoptBtn = document.createElement('button')
            adoptBtn.textContent = 'Yes! I take it!'

            liElement.querySelector('button').remove()
            divElement.appendChild(inputNewOwner)
            divElement.appendChild(adoptBtn)
            liElement.appendChild(divElement)

            adoptBtn.addEventListener('click', onTake)


            function onTake(){
                if (inputNewOwner.value === ''){return}
                const adopted = document.querySelector('#adopted ul')
                const checkBtn = document.createElement('button')
                liElement.querySelector('span').textContent = `New Owner: ${inputNewOwner.value}`
                checkBtn.textContent = 'Checked'
                divElement.remove()
                liElement.appendChild(checkBtn)
                adopted.appendChild(liElement)

                checkBtn.addEventListener('click', ()=>{
                    liElement.remove()
                })
            }
        }
    }
}

