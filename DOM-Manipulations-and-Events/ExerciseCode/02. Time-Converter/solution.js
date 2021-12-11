function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type="button"]')
    for (const btn of btns) {
        btn.addEventListener('click', convert)
    }

    function convert(ev) {
        let days = document.getElementById('days')
        let hours = document.getElementById('hours')
        let minutes = document.getElementById('minutes')
        let seconds = document.getElementById('seconds')
        if (ev.target.id === 'daysBtn') {
            hours.value = Number(days.value) * 24
            minutes.value = Number(hours.value) * 60
            seconds.value = Number(minutes.value) * 60
        }
        if (ev.target.id === 'daysBtn') {
            hours.value = Number(days.value) * 24
            minutes.value = Number(hours.value) * 60
            seconds.value = Number(minutes.value) * 60
        }
        if (ev.target.id === 'hoursBtn') {
            days.value = Number(hours.value) / 24
            minutes.value = Number(hours.value) * 60
            seconds.value = Number(minutes.value) * 60
        }
        if (ev.target.id === 'minutesBtn') {
            seconds.value = Number(minutes.value) * 60
            hours.value = Number(minutes.value) / 60
            days.value = Number(hours.value) / 24

        }
        if (ev.target.id === 'secondsBtn') {
            minutes.value = Number(seconds.value) / 60
            hours.value = Number(minutes.value) / 60
            days.value = Number(hours.value) / 24
        }

    }
}