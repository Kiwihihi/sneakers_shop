let index = 0;
let nextImg = function () {
 
    let states = [
        {
            path:"./assets/img/layer/greenLayer/sneaker2-1.png",
            color: "#19e490",
            name: "AIR FORCE ONE MID",
            price: "$140"
        },
        {
            path:"./assets/img/layer/sneaker-1.png",
            color: "#ff8e74",
            name: "AIR JORDAN 1 HIGH OG",
            price: "$150"

        }
    ]
    index++;
    if(index == -1) index = 1;
    if(index == 2) index = 0;
    document.getElementById('shoes-1').src = states[index].path;
    document.getElementById('price').style.color = states[index].color;
    document.getElementById('price').innerHTML = states[index].price;
    document.getElementById('shoesName').innerHTML = states[index].name;
    document.getElementById('circle').style.backgroundColor = states[index].color;
}
setInterval(nextImg,5000);