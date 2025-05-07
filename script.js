// make the element draggable
Draggable.create('.draggable');

function togglePopup(el) {
    const popupText = el.querySelector('.popuptext');
    popupText.classList.toggle('show');
  }

  let myWindow;
  let bigWindow;

      function openmyWin() {
      myWindow = window.open("https://shery1-11.github.io/Project2/", "", "width=500px, height=100px");
      }

      function openbigWin(){
      bigWindow = window.open("https://shery1-11.github.io/Project2/");
      }
  
