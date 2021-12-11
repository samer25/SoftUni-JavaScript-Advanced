function encodeAndDecodeMessages() {
    let messageFields = [...document.querySelectorAll('#main div textarea')]
    let btns = document.querySelectorAll('#main div button')
    btns[0].addEventListener('click', encode)
    btns[1].addEventListener('click', decode)
    let receiveField = messageFields[1]
    let encoded = []
    let decoded = []


    function encode(){
        let messageField = messageFields[0].value
        decoded = []
        messageFields[1].value = ''
        for (let i = 0; i < messageField.length; i++) {
            encoded.push(messageField.charCodeAt(i) + 1)

        }
        messageFields[0].value = ''
        decoded = encoded
        for (const en of encoded) {
            let text = String.fromCharCode(en)
            receiveField.value += text
        }
        encoded = []
    }

    function decode(){
        let newText = ''
        for (const en of decoded) {
            let text = String.fromCharCode(en-1)
            newText += text
        }
        receiveField.value = newText


    }

}