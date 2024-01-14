
function remainingTimeCalc(fixedDate) {
    const dueDate = new Date(fixedDate);
    const currentDate = new Date();
    const differenceMilliseconds = dueDate - currentDate;

    return Math.floor(differenceMilliseconds / 1000);
}

function timeLapse() {

    if (remainingTime > 0) {
        day = Math.floor(remainingTime / (24 * 3600));
        hour = Math.floor((remainingTime % (24 * 3600)) / 3600);
        minute = Math.floor((remainingTime % 3600) / 60);
        second = remainingTime % 60;

        days.textContent = day;
        hours.textContent = hour;
        minutes.textContent = minute;
        seconds.textContent = second;
        remainingTime--;
    } else {
        clearInterval(intervalID);

    }
}

let day, hour, minute, second;

//Seteaza data evenimentului: YYYY/MM/DD
const fixedDate = "2024-04-08T00:00:00";

let remainingTime = remainingTimeCalc(fixedDate);

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const observer = new MutationObserver(function (mutations) {

    mutations.forEach(function (mutation) {

        switch (mutation.target.id) {
            case 'seconds':
                seconds.classList.add('bla-bla');
                setTimeout(function () {
                    seconds.classList.remove('bla-bla');
                }, 650);
                break;
            case 'minutes':
                minutes.classList.add('bla-bla');
                setTimeout(function () {
                    minutes.classList.remove('bla-bla');
                }, 650);
                break;
            case 'hours':
                hours.classList.add('bla-bla');
                setTimeout(function () {
                    hours.classList.remove('bla-bla');
                }, 650);
                break;
            case 'days':
                days.classList.add('bla-bla');
                setTimeout(function () {
                    days.classList.remove('bla-bla');
                }, 650);
                break;
            default:


                break;
        }

    });
});

const config = { childList: true, subtree: true };
observer.observe(seconds, config);
observer.observe(minutes, config);
observer.observe(hours, config);
observer.observe(days, config);
const intervalID = setInterval(timeLapse, 1000);


