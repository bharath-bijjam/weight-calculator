let inputEl = document.getElementById("input");
let Weightvalue = document.getElementById("Weightvalue");
let errorEl = document.getElementById("error");

//Initialising errorTime and resultTime used to store unique id of setTimeout()
let errorTime;
let resultTime;



function UpdateValues(){
    if(inputEl.value <= 0){
          errorEl.textContent="Please Enter a Valid Value";
          clearInterval(errorTime)
          errorTime=setTimeout(()=>{
                inputEl.value="";
                errorEl.textContent=""
          },5000)
    }
    else{
        errorEl.textContent=" "
        let res=(inputEl.value/2.2).toFixed(2);
        Weightvalue.textContent=res;
        clearInterval(resultTime)
        resultTime=setTimeout(()=>{
            inputEl.value="";
            Weightvalue.textContent="";
        },10000)

    }
}

inputEl.addEventListener("input",UpdateValues)
