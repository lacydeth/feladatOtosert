function keszit() {
    const kockakSzama = document.getElementById("kockakSzama").value,
        kockakMerete = document.getElementById("kockakMerete").value,
        body = document.querySelector("body"); 

    const tabla1 = document.querySelector("table");
    tabla1.remove();
    const tabla = document.createElement("table");
    body.appendChild(tabla);
    for (let indextr = 0; indextr < kockakSzama; indextr++) {
        const tableR = document.createElement("tr");
        for (let index = 0; index < kockakSzama; index++) {
            const tableD = document.createElement("td");
            tableD.style.height = `${kockakMerete}px`;
            tableD.style.width =  `${kockakMerete}px`;
            if ((index+indextr) % 2 == 0) {
                tableD.addEventListener("click", szinez);
                tableD.classList.add("fekete");
            }
           else {
                tableD.addEventListener("click", szinez2);
                tableD.classList.add("feher");
            }
            tableR.appendChild(tableD);
        }
        tabla.appendChild(tableR);
    }
}
function szinez() {
    const RGBColor1 = Math.floor(Math.random()*256),
        RGBColor2 = Math.round(Math.random()*255),
        RGBColor3 = Math.round(Math.random()*255);
    elements = document.getElementsByClassName("fekete");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= `rgb(${RGBColor1},${RGBColor2},${RGBColor3})`;
    }
}
function szinez2() {
    const RGBColor1 = Math.round(Math.random()*256),
        RGBColor2 = Math.round(Math.random()*256),
        RGBColor3 = Math.round(Math.random()*256);
    elements = document.getElementsByClassName("feher");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= 'rgb(' + RGBColor1 + ',' + RGBColor2 + ',' + RGBColor3 + ')';
    }
}
function kockameret() {
    const kockakMerete = document.getElementById("kockakMerete").value;
    const kockakMereteSpan = document.getElementById("kockaMeretSpan");
    
    kockakMereteSpan.textContent = `(${kockakMerete}px)`;
}
function kockaszam() {
    const kockakMerete = document.getElementById("kockakSzama").value;
    const kockakMereteSpan = document.getElementById("kockaSzamaSpan");
    const kockakMereteSpan2 = document.getElementById("kockaSzamaSpan2");
    kockakMereteSpan.textContent = kockakMerete;
    kockakMereteSpan2.textContent = kockakMerete;
}