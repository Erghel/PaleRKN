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
  const Words = [
    "facebook", 
    "facbok", 
    "aboba", 
    "афсуищщл", 
    "facebook",
    "FACEBOOK", 
    "Facebook",
    "FAcebook",
    "FACebook",
    "FACEbook", 
    "FACEBook", 
    "FACEBOok",
    "FACEBOOk",
    "FACEBOOK",
    "fACEBOK",
    "faCEBOOK",
    "facEBOOK",
    "faceBOOK",
    "facebOOK",
    "faceboOK",
    "facebooK",
    "FaCeBoOk",
    "fAcEbOoK",
    "fAcEBOOK",
    "faceboo",
    "facbook",
    "fcbook", 
    "facebok",
    "фейсбук",
    "феисбук",
    "файсбук",
    "фаисбук"];
   
  let q = document.querySelector("input[name=\"q\"]").value; // значение инпута поиска
  let searchResults = document.querySelector("#js-result");
 
  function test() {
    return Words.some(function (word) {
        return q.toLowerCase().includes(word.toLowerCase());
    });
}
 
if (test()) {
    searchResults.innerHTML =
        `<li id="js-result_0" class="result__li App-result" number="0"><div><div class="js-snippet-container"><h3 class="SnippetResultTitle-title result__title"><a class="Link-root SnippetResultTitle-link light-link Link-hoverable Link-visitable" href="https://facebook.com/" data-comeback-disabled="true" target="_blank" data-selector="SnippetResultTitle-link" data-pxt="c4|http://facebook.com/|6|extern">Facebook</a></h3><div class="SnippetResultInfo-info"><a class="Link-root SnippetResultInfo-favicon Link-hoverable Link-visitable" href="https://facebook.com/" target="_blank" data-pxt="c4|u:=http://facebook.com/|p:=6|?WS"><img data-selector="Favicon-image" class="Favicon-image" src="https://www.google.com/s2/favicons?domain=facebook.com" alt="favicon"></a><span class="SnippetResultInfo-leftBlock"><a class="Link-root SnippetResultInfo-url Link-hoverable" href="https://facebook.com/" data-comeback-disabled="true" data-selector="SnippetResultInfo-externalLink" data-pxt="c4s|u:=http://facebook.com/|p:=6|?WS" target="_blank"><span>facebook.com</span></a></span></div><div data-selector="SnippetResult-result" class="SnippetResult-result"><span>Ссылка на официальный сайт Facebook, добавленная расширением.</span></div></div></div></li>` +
        searchResults.innerHTML;
}
}
 
if (window.location.host == "yandex.ru") {
  classForRemove = "Warning_type_roskomnadzor";
  const Words = [
  "facebook", 
  "facbok", 
  "aboba", 
  "афсуищщл", 
  "facebook",
  "FACEBOOK", 
  "Facebook",
  "FAcebook",
  "FACebook",
  "FACEbook", 
  "FACEBook", 
  "FACEBOok",
  "FACEBOOk",
  "FACEBOOK",
  "fACEBOK",
  "faCEBOOK",
  "facEBOOK",
  "faceBOOK",
  "facebOOK",
  "faceboOK",
  "facebooK",
  "FaCeBoOk",
  "fAcEbOoK",
  "fAcEBOOK",
  "faceboo",
  "facbook",
  "fcbook", 
  "facebok",
  "фейсбук",
  "феисбук",
  "файсбук",
  "фаисбук"];
 
let q = document.querySelector("#uniq16487568328601").value; // значение инпута поиска
let searchResults = document.querySelector("#search-result");
 
function test() {
    return Words.some(function (word) {
        return q.toLowerCase().includes(word.toLowerCase());
    });
}
 
if (test()) {
    searchResults.innerHTML =
        `<li class="serp-item desktop-card" data-fast="1" data-cid="0" data-log-node="emqg54"><div class="Organic organic Typo Typo_text_m Typo_line_s i-bem" data-bem="{&quot;organic&quot;:{}}"><div class="VanillaReact OrganicTitle OrganicTitle_wrap Typo Typo_text_l Typo_line_m organic__title-wrapper"><a target="_blank" class="Link Link_theme_normal OrganicTitle-Link organic__url link i-bem" accesskey="9" tabindex="0" href="https://facebook.com/" data-counter="[&quot;b&quot;]" data-log-node="emqgw0a-00"><div class="Favicon Favicon_size_m favicon"><div class="Favicon-Icon favicon__icon" style="background-position-y:0;width:16px;height:16px"><img src="https://www.google.com/s2/favicons?domain=facebook.com" alt=""></div></div><h2 class="OrganicTitle-LinkText Typo Typo_text_l Typo_line_m organic__url-text"><span class="OrganicTitleContentSpan organic__title" role="text">Facebook</span></h2></a></div><div class="Organic-Subtitle Organic-Subtitle_noWrap Typo Typo_type_greenurl organic__subtitle"><div class="Path Organic-Path path organic__path"><a class="Link Link_theme_outer Path-Item link path__item link organic__greenurl i-bem" tabindex="0" href="https://facebook.com/" data-counter="[&quot;b&quot;]" data-log-node="emqgw0a-02" target="_blank" role="text"><b>facebook.com</b></a></div></div><div class="Organic-ContentWrapper organic__content-wrapper"><div class="TextContainer OrganicText organic__text text-container Typo Typo_text_m Typo_line_m"><span role="text" class="OrganicTextContentSpan"><label class="ExtendedText extended-text"><input type="checkbox" class="ExtendedText-Control"><span class="ExtendedText-Short extended-text__short" aria-hidden="true">Официальная ссылка на Facebook.<!-- --> <span class="Link Link_theme_normal ExtendedText-Toggle link extended-text__toggle i-bem" aria-hidden="true" data-counter="[&quot;b&quot;]" data-log-node="emqgw0a-05" target="_blank">Читать ещё</span></span><span class="ExtendedText-Full extended-text__full">Официальная ссылка на Facebook, добавленная с помощью расширения!<!-- --> <span class="Link Link_theme_normal ExtendedText-Toggle link extended-text__toggle i-bem" aria-hidden="true" data-counter="[&quot;b&quot;]" data-log-node="emqgw0a-07" target="_blank">Скрыть</span></span></label></span></div></div></div></li>` +
        searchResults.innerHTML;
}
 
}
 
if (classForRemove) removeElement();

