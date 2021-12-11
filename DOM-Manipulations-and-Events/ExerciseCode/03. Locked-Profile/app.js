function lockedProfile() {
    let btn = document.getElementsByTagName('button')
    for (const btnElement of btn) {
        btnElement.addEventListener('click', show)
    }

    function show(ev) {
        if (ev.target.parentElement.children[4].checked) {
            if (ev.target.textContent === 'Show more') {
                ev.target.previousElementSibling.style.display = 'block'
                ev.target.textContent = 'Hide it'
            } else {
                ev.target.previousElementSibling.style.display = 'none'
                ev.target.textContent = 'Show more'
            }
        }

    }
}