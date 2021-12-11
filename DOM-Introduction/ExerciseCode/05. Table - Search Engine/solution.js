function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let table = document.querySelectorAll('table tbody tr')
        let searchText = document.getElementById('searchField')
        table = Array.from(table)
        for (const el of table) {
            if (el.textContent.match(searchText.value)) {
                el.className = 'select'
            }else{
                el.className = ''
            }


        }

    }
}