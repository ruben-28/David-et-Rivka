let countDown = new Date("Nov 27, 2024 18:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDown - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#timer").innerHTML = `
        <div class='tag'>
            <span class='value'>${days}</span> 
            <span class='label'>Days</span>
        </div>
        <div class='tag'>
            <span class='value'>${hours}</span>  
            <span class='label'>Hours</span>
        </div>
        <br>
        <div class='tag'>
            <span class='value'>${minutes}</span> 
            <span class='label'>Minutes</span>  
        </div>
        <div class='tag'>
            <span class='value'>${seconds}</span> 
            <span class='label'>Seconds</span>   
        </div>
    `;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "EXPIRED";
    }
}, 1000);