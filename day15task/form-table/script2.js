let submit=document.getElementById('submit');
submit.addEventListener('click',handler);
function handler(){
    let tfirst=document.getElementById('tfirst');
    tfirst.textContent= first.innerText;

    let tlast=document.getElementById('tlast');
    tlast.textContent= last.innerText;

    let taddress=document.getElementById('taddress');
    taddress.textContent= address.innerText;

    let tpincode=document.getElementById('tpincode');
    tpincode.textContent= pincode.innerText;

    let tgender=document.querySelectorAll('form-check');
    tgender.textContent= getSelection("input");

    let tstate=document.getElementById('tstate');
    tstate.textContent= state.innerText;

    let tcountry=document.getElementById('tcountry');
    tcountry.textContent= country.innerText;
    
}
