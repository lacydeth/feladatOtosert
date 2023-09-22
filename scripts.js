function keszit() {
    const kockakSzama = document.getElementById("kockakSzama").value,
        kockakMerete = document.getElementById("kockakMerete").value;

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
            if ((index+indextr) % 2 == 1) {
                tableD.addEventListener("click", szinez2);
                tableD.classList.add("feher");
            }
            tableR.appendChild(tableD);
        }
        document.getElementById("tabla").appendChild(tableR);
    }
}
function szinez() {
    elements = document.getElementsByClassName("fekete");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="blue";
    }
}
function szinez2() {
    elements = document.getElementsByClassName("feher");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="red";
    }
}