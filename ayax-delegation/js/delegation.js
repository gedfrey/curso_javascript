
// variables globales

const mainButton = document.querySelector("#mainButton");
const secondButtons = document.querySelector('#secondaryButtons');
const bodyColor = document.querySelector('#background-color');

(()=>{
    let backgroundColor = localStorage.getItem('background-color');
    if(backgroundColor !== null){
        bodyColor.className = backgroundColor;
    }
    mainButton.addEventListener('click', addButtons);
    secondButtons.addEventListener('click', delegateFunction);
})();

function delegateFunction(e){
    e.preventDefault();
    let element = e.target.classList[1];
    //let classElement = "."+element;
    console.log(element);
    switch(element){
        case('btn-primary'):
            localStorage.setItem('background-color','bg-primary');
            bodyColor.className = 'bg-primary';
            break;
        
            case('btn-secondary'):
                localStorage.setItem('background-color','bg-secondary');
                bodyColor.className = 'bg-secondary';
                break;

                case('btn-danger'):
                    localStorage.setItem('background-color','bg-danger');
                    bodyColor.className = 'bg-danger';
                    break;

                    case('btn-success'):
                        localStorage.setItem('background-color','bg-success');
                        bodyColor.className = 'bg-success';
                        break;

                        case('btn-warning'):
                            localStorage.setItem('background-color','bg-warning');
                            bodyColor.className = 'bg-warning';
                            break;

                            default:
                                console.log("default");
                                break;
            
    }
    
}

function addButtons(e){
    e.preventDefault();
    secondButtons.innerHTML = `
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
    `
}

// LocalStorage Example

//const nombre = "daniel"; 
//localStorage.setItem('nameUser',nombre);
//localStorage.removeItem('nameUser');
// let nameUser = localStorage.getItem('nameUser');
// console.log(nameUser);
