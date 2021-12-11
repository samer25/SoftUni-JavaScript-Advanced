window.addEventListener('load', solve);

function solve() {

    const allHits = document.querySelector('#all-hits .all-hits-container')
    const savedHits = document.querySelector('#saved-hits .saved-container')
    const likeCount = document.querySelector('#total-likes .likes p')
    let likes = 0
    const genre = document.querySelector('#genre')
    const name = document.querySelector('#name')
    const author = document.querySelector('#author')
    const date = document.querySelector('#date')
    const addBtn = document.querySelector('#add-btn')


    addBtn.addEventListener('click', addSong)

    function addSong(ev) {
        ev.preventDefault()


        if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
            return;
        }

        const divElement = document.createElement('div')
        divElement.className = 'hits-info'

        divElement.innerHTML = `
            <img src="./static/img/img.png">
            <h2>Genre: ${genre.value}</h2>
            <h2>Name: ${name.value}</h2>
            <h2>Author: ${author.value}</h2>
            <h3>Date: ${date.value}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>
        `

        allHits.appendChild(divElement)

        const saveBtn = divElement.querySelector('.save-btn')
        const likeBtn = divElement.querySelector('.like-btn')
        const deleteBtn = divElement.querySelector('.delete-btn')

        saveBtn.addEventListener('click', onSave)

        likeBtn.addEventListener('click', onLike)

        deleteBtn.addEventListener('click', onDelete)

        function onSave(ev){
            divElement.remove()
            saveBtn.remove()
            likeBtn.remove()
            savedHits.appendChild(divElement)

        }

        function onDelete(ev){
            divElement.remove()
        }

    }

    function onLike(ev){
        ev.target.disabled = true
        likes += 1
        likeCount.textContent = `Total Likes: ${likes}`
       
    }
}