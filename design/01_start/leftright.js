const btn = document.querySelector("button");
function addElement() {
    const sec = document.querySelector("button");
    const para = document.createElement('p');
    para.textContent = "Welcome to our website";
    sec.appendChild(para);
}
btn.addEventListener("click", addElement);