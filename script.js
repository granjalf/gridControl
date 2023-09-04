const container = document.getElementById('container');
const divsArray = [];
let timer = null;
let running = false;

for (let index = 0; index < 100; index++) {
    const div = document.createElement('div');
    let id = 's' + index;
    div.setAttribute('id',id);
    div.classList.add('on');
    div.innerText = index;
    container.appendChild(div);
    divsArray.push(div);
}

function toggle(){
    let index = divsArray.findIndex(e => e.classList.contains('on'));
    if (index > -1){
        divsArray[index].classList.remove('on');
        divsArray[(index + 1)%(divsArray.length)].classList.add('on');
    }
    else{
        divsArray[0].classList.add('on');
    }

}

function start(){
    if (!running){
        running = true;
        divsArray.forEach(e => e.classList.remove('on'));
        walk();
    }
    else{
        alert('El programa ya está corriendo');
    }
    
}

function walk(){
    timer = setTimeout(()=>{
        toggle();
        walk();
    },1000);
    
}

function pause(){
    if(timer != null){
        clearTimeout(timer);
        timer = null;
    }
    else if(running){
        walk();
    }
    else{
        alert('Vuelva a iniciar con START');
    }
}

function stop(){
    clearTimeout(timer);
    timer = null;
    running = false;
}


