function notify(message) {
  let divNotification = document.getElementById('notification')
  divNotification.textContent = message
  divNotification.style.display = 'block'
  console.log(message)
  divNotification.addEventListener('click', hideIt)

  function hideIt(){
    divNotification.style.display = 'none'
  }

}