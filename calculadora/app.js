
let buttons = document.querySelectorAll("button");

let pantalla = document.getElementById("display");
console.log(pantalla)

buttons.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if(btn.id === '='){
            pantalla.value = eval(pantalla.value);

        }else if(btn.id === 'ac'){
            pantalla.value = '';

        }else{
            pantalla.value = pantalla.value + btn.id;
        }
    })
} )













