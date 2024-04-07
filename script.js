let [hours , mins , secs] = [0 , 0 , 0]
let [st1h , st1m , st1s] = [0 , 0 , 0]
let [st2h , st2m , st2s] = [0 , 0 , 0]
let count = 0

let timer = document.querySelector(".timer")
let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let restart = document.querySelector(".restart")
let table = document.querySelector("table")
let lap = document.querySelector(".lap")

function Watch() {
    secs++;
    if(secs == 60){
        secs = 0;
        mins++
        if(mins == 60){
            mins = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = mins < 10 ? "0" + mins : mins
    let s = secs < 10 ? "0" + secs : secs

    timer.innerHTML = h + ":" + m + ":" + s
}

const StartWatch = () => {
    intervalId = setInterval(Watch , 1000)
    play.style.display = "none"
    pause.style.display = "block"
}
const StopWatch = () => {
    clearInterval(intervalId)
    pause.style.display = "none"
    play.style.display = "block"
}
const reload = () =>{
    location.reload()
}

function Laps() {
    count++;
    st2h = st1h
    st1h = hours
    st2m = st1m
    st1m = mins
    st2s = st1s
    st1s = secs
    
    console.log(st1h , st1m , st1s , st2h ,st2m ,st2s)
    let difh = st1h - st2h
    let difm = st1m - st2m
    let difs = st1s - st2s
    if (difs < 0) {
        difs = difs + 60;
        difm = difm -1;
    }
    if (difm < 0) {
        difm = difm + 60;
        difh = difh - 1;
    }
    let laph = difh < 10 ? "0" + difh : difh
    let lapm = difm < 10 ? "0" + difm : difm
    let lapsec = difs < 10 ? "0" + difs : difs
    let coun = count < 10 ? "0" + count : count

    let hm = hours < 10 ? "0" + hours : hours
    let mm = mins < 10 ? "0" + mins : mins
    let sm = secs < 10 ? "0" + secs : secs

    table.insertAdjacentHTML("beforeend" , 
    `<tr>
    <td>${coun}</td>
    <td id="shift">${laph}:${lapm}:${lapsec}</td>
    <td>${hm}:${mm}:${sm}</td>
</tr>`)
}

play.addEventListener("click" , StartWatch)
pause.addEventListener("click" , StopWatch)
restart.addEventListener("click", reload)
lap.addEventListener("click", Laps)
