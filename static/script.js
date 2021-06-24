var elem = document.getElementById('Time');
var remainingTime = 30;
function makeTimer(){
    document.body.style.backgroundColor = "#FBF2DE";
    var timer = setInterval(countdown,1000);
        function countdown() {
            if (remainingTime != -1){
                elem.innerHTML = remainingTime + ' seconds';
                remainingTime--;
            }
            else {
                document.body.style.backgroundColor = "#FF6800";
                clearTimeout(timer);
                remainingTime = 30;
                
        }
    }
}

function pullData(){
    document.body.style.backgroundColor = "#FBF2DE";
    let url = 'https://bye-connor.herokuapp.com/turn';
    var cat = document.getElementById('category');
    var roll = document.getElementById('roll');
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        cat.innerHTML = 'Category: ' + data['category'];
        roll.innerHTML = 'Roll: ' + data['roll'];
    });
}