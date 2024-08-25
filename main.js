
let UILoad = document.querySelector('.continue');
let userInputPage = document.querySelector('.userInputPage');
let floors = document.getElementById('floors');
let lifts = document.querySelector('#lifts');

UILoad.addEventListener('click', UIGenerate)

function UIGenerate() {
    let numberOfFloors = floors.value;
    let numberOfLifts = lifts.value;

    userInputPage.innerHTML = "";
    userInputPage.style.height = 'auto';

    let container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    
    for(let i=0; i<numberOfFloors; i++){

        let floorContainer = document.createElement('div');
        floorContainer.classList.add('floorContainer');

        if(i === 0) {
            let downButton = document.createElement('button');
            downButton.textContent = 'Down';
            downButton.classList.add('downButton');
            floorContainer.appendChild(downButton); 
        }

        let floorLines = document.createElement('hr');
        floorLines.classList.add('floorLines');
        floorContainer.appendChild(floorLines);

        if (i === (numberOfFloors-1)){
            let upButton = document.createElement('button');
            upButton.textContent = 'Up';
            upButton.classList.add('upButton');
            document.body.appendChild(upButton); 
        } else if (i > 0){
            let upButton = document.createElement('button');
            upButton.textContent = 'Up';
            upButton.classList.add('upButton');
            document.body.appendChild(upButton); 

            let downButton = document.createElement('button');
            downButton.textContent = 'Down';
            downButton.classList.add('downButton');
            floorContainer.appendChild(downButton); 
        }

        container.appendChild(floorContainer);

    }

}




