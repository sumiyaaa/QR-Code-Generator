const qrinput = document.getElementById("qr_input");
const qrimg = document.getElementById("qr_img");
const qrbutton = document.getElementById("qr_button");

console.log(qrinput , qrimg , qrbutton);
qrbutton.addEventListener('click' , ()=>{

    const inputValue = qrinput.value;
    console.log(inputValue);


    if( !inputValue){
        alert('please enter a valid URL');
        return;
    }else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR code for ${inputValue}`;
    }
});