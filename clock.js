let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(()=>{
    let curantTime = new Date();

    hrs.innerHTML = (curantTime.getHours()<10?"0":"") + curantTime.getHours();
    min.innerHTML = (curantTime.getMinutes()<10?"0":"") + curantTime.getMinutes();
    sec.innerHTML = (curantTime.getSeconds()<10?"0":"") + curantTime.getSeconds();
},1000)


