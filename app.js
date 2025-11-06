//TODO: fix divs so they stay bounded within the frame
const draggable = document.getElementById('draggable');
const draggableAbout = document.getElementById('draggableAbout');
const draggableExperience = document.getElementById('draggableExperience');
const draggableProjects = document.getElementById('draggableProjects');

let offsetX, offsetY;

function draggableDiv(divName){
divName.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - divName.getBoundingClientRect().left;
    offsetY = e.clientY - divName.getBoundingClientRect().top;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});

function mouseMoveHandler(e) {
    divName.style.left = `${e.clientX - offsetX}px`;
    divName.style.top = `${e.clientY - offsetY}px`;
    divName.style.position = 'absolute';
}

function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}
}

function toggleDiv(divName){

    // get display property of the target div
    var displaySetting = divName.style.display;

    // toggle the display settings 
    if (displaySetting == 'block') {
      divName.style.display = 'none';
      divName.style.right = 0;
    }
    else {
      divName.style.display = 'block';
      
    }
}

function toggleRight(divName){
    divName.style.right = 'auto';
}

//draggableDiv(draggable)
draggableDiv(draggableAbout)
draggableDiv(draggableExperience)
draggableDiv(draggableProjects)

//Projects - remember to add project links