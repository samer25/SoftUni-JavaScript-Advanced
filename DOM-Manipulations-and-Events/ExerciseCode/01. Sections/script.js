function create(words) {
    let content = document.getElementById('content');
    for (const word of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        content.appendChild(div)
        p.textContent = word
        div.appendChild(p)
        p.style.display = 'none';
        div.addEventListener('click', show)
    }

    function show(ev) {
        ev.target.children[0].style.display = 'block'
    }
}