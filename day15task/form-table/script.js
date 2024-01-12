let button=document.getElementById('submit');
button.addEventListener('click',handler);
function handler(){
    let first = document.getElementById('firstname');
    let tr = document.createElement(tr);
    let td = document.createElement(td);

    tbody.appendChild(tr);
    tr.appendChild(td);
    td.textContent= first.textContent;
}





