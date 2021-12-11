function search() {
    let towns = document.querySelectorAll('#towns li')
    let searchText = document.getElementById('searchText')
    let result = document.getElementById('result')
    let count = 0
    towns = Array.from(towns)
    for (const t of towns) {
        if(t.textContent.match(searchText.value)){
            t.style.fontWeight = 'bold'
            t.style.textDecoration = 'underline'
            count++
        }else{
            t.style.fontWeight = ''
            t.style.textDecoration = 'none'
        }
        result.textContent = `${count.toString()} matches found`
    }

}
