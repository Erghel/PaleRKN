// yandex - class = "Warning-Item", "Warning_type_roskomnadzor"
// mailru - class = "App-RKN"

// if (window.location.host == "go.mail.ru") {
//     let element = document.getElementsByClassName("App-RKN");
// while (element.length) {
//   element[0].parentNode.removeChild(element[0]);
// }
// }

// if (window.location.host == "yandex.ru") {
//     let element = document.getElementsByClassName("Warning_type_roskomnadzor");
// while (element.length) {
//   element[0].parentNode.removeChild(element[0]);
// }
// }

let classForRemove;
let element;
 
function removeElement(elementClass) {
  element = document.querySelectorAll(`.${classForRemove}`);
  element.forEach((elem) => {
    elem.parentNode.removeChild(elem);
  });
}
 
if (window.location.host == "go.mail.ru") {
  classForRemove = "App-RKN";
}
 
if (window.location.host == "yandex.ru") {
  classForRemove = "Warning_type_roskomnadzor";
}
 
if (classForRemove) removeElement();