// Get all icon elements
const icons = document.querySelectorAll('.ms95DesktopIcon');
const ms95FileExplorerWindow = document.querySelector(".ms95FileExplorerWindow");
const ms95FileExplorerWindowHeader = document.querySelector(".ms95FileExplorerWindowHeader");
const ms95FileExplorerWindowHeaderCloseButton = document.querySelector(".ms95FileExplorerWindowHeaderClose");
const ms95FileExplorerWindowHeaderMaximizeButton = document.querySelector(".ms95FileExplorerWindowHeaderMaximize");
const ms95FileExplorerWindowHeaderMinimizeButton = document.querySelector(".ms95FileExplorerWindowHeaderMinimize");
const ms95DesktopIconMyComputer = document.querySelector("#thispc");
const ms95DesktopIconRecycleBin = document.querySelector("#recyclebin");
const ms95DesktopIconInternetExplorer = document.querySelector("#internetexplorer");
const ms95DesktopIconWordPadDoc = document.querySelector("#wordpad-doc");
const ms95WordPadApp = document.querySelector(".wordpad");
const win95StartButton = document.querySelector(".ms95StartButton");
const win95StartMenu = document.querySelector(".ms95Start");
const ms95TaskbarTime = document.querySelector(".ms95TaskbarTime");
const ms95LoadingOverlay = document.querySelector(".ms95LoadingOverlay");
const ms95DocumentTaskbarIcon = document.querySelector("#doc");
const ms95DefragDesktopIcon = document.querySelector("#defrag");
const bsodOverlay = document.querySelector(".bsod-overlay");
const ms95FileExplorerWindowContentLetter = document.querySelector("#explorer-doc");
const ms95TaskbarIconComputer = document.querySelector("#com");

document.addEventListener("keypress", function onEvent(event) {
    bsodOverlay.style.display = "none";
});

ms95DefragDesktopIcon.addEventListener("dblclick", () => {
    bsodOverlay.style.display = "block";
    setTimeout(() => {
        bsodOverlay.style.display = "none";
    }, 10000);
});


ms95FileExplorerWindowContentLetter.addEventListener("dblclick", () => {
    ms95WordPadApp.style.display = "block";
    ms95DocumentTaskbarIcon.style.display = "flex";
});



// wait 5 seconds before removing the loading overlay
setTimeout(() => {
    ms95LoadingOverlay.style.display = "none";
}, 500);

ms95TaskbarIconComputer.addEventListener("click", () => {
    ms95FileExplorerWindow.classList.remove("minimized");
});


ms95FileExplorerWindowHeaderCloseButton.addEventListener("click", () => {
    ms95FileExplorerWindow.style.display = "none";
});

ms95FileExplorerWindowHeaderMaximizeButton.addEventListener("click", () => {
    ms95FileExplorerWindow.classList.toggle("maximized");
});

ms95FileExplorerWindowHeaderMinimizeButton.addEventListener("click", () => {
    ms95FileExplorerWindow.classList.add("minimized");
});

ms95DesktopIconMyComputer.addEventListener("dblclick", () => {
    ms95FileExplorerWindow.style.display = "block";
    ms95TaskbarIconComputer.style.display = "flex";

});

ms95DesktopIconWordPadDoc.addEventListener("dblclick", () => {
    ms95WordPadApp.style.display = "block";
    ms95DocumentTaskbarIcon.style.display = "flex";
});

win95StartButton.addEventListener("click", () => {
    if (win95StartMenu.style.display === "block") {
        win95StartMenu.style.display = "none";
    } else {
        win95StartMenu.style.display = "block";
    }
});

ms95DocumentTaskbarIcon.addEventListener("click", () => {
    ms95WordPadApp.classList.remove("minimized");
    console.log("clicked");
});



// Update the time every second to human readable 12 hour format 
setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    ms95TaskbarTime.innerHTML = hours + ":" + minutes + " " + ampm;
}, 1000);




/*
let isDragging = false;
let offsetX, offsetY;

ms95FileExplorerWindowHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - ms95FileExplorerWindow.getBoundingClientRect().left;
    offsetY = e.clientY - ms95FileExplorerWindow.getBoundingClientRect().top;
    ms95FileExplorerWindow.classList.add("draggable");
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    ms95FileExplorerWindow.style.left = newX + "px";
    ms95FileExplorerWindow.style.top = newY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    ms95FileExplorerWindow.classList.remove("draggable");
});

*/

let isDragging = false;
let offsetX, offsetY;
let activeElement = null;
let zIndexCounter = 1;

// Function to initialize the dragging for an element
function initializeDrag(element, e) {
    isDragging = true;
    activeElement = element;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;

    // Set a higher z-index for the active window
    zIndexCounter += 1;
    element.style.zIndex = zIndexCounter;
    

    element.classList.add("draggable");
}

// Add mousedown event listener to each draggable element
const draggableElements = document.querySelectorAll(".draggable-element");

draggableElements.forEach(element => {
    element.addEventListener("mousedown", (e) => {
        initializeDrag(element, e);
    });
});

// Add mousemove event listener to the document
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    activeElement.style.left = newX + "px";
    activeElement.style.top = newY + "px";
});

// Add mouseup event listener to the document
document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        activeElement.classList.remove("draggable");
    }
    activeElement = null;
});





