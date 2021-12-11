function solve() {
    let text = document.getElementById('text').value
    let command = document.getElementById('naming-convention').value
    let result = document.getElementById('result')
    let newText = ''
    if (command === 'Camel Case') {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                newText += text[i + 1].toUpperCase()
                i++;
            } else {
                newText += text[i].toLowerCase()
            }
        }
    } else if (command === 'Pascal Case') {
        for (let i = 0; i < text.length; i++) {
            if (i === 0) {
                newText += text[0].toUpperCase()
                i++;
            }
            if (text[i] === ' ') {
                newText += text[i + 1].toUpperCase()
                i++;
            } else {
                newText += text[i].toLowerCase()
            }
        }
    } else {
        newText = 'Error!'
    }
    result.textContent = newText
}