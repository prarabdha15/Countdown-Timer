const endDate = '30 September 2024 11:59 PM';
document.getElementById('end-date').innerText= endDate;
const inputs=document.querySelectorAll('input');

function clock (){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;

    if (diff < 0) return;
    var days= Math.floor(diff / 3600 / 24);
    console.log(days);
    inputs[0].value=days;
    var hours = Math.floor((diff/ 3600) % 24);
    console.log(hours);
    inputs[1].value = hours;
    var minutes = Math.floor((diff/60) % 60);
    console.log(minutes);
    inputs[2].value = minutes;
    var seconds= Math.floor((diff) % 60);
    console.log(seconds);
    inputs[3].value = seconds;
}
clock ();

setInterval (
    () => {
        clock ()
    },
    1000
)