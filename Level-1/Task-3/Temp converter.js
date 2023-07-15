const calculateTemp=() => {
    const inputTemp=document.getElementById('temp').value;
    

    const tempSelected =document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].
    value;
    //celsius to fahrenheit
    const celsToFahr =(cels) =>{
        let Fahrenheit=((cels * 9/5)+ 32).toFixed(1);
        return Fahrenheit;
    }
    //fahrenheit to celsius
    const fahrToCels =(fahr) =>{
        let celsius=((fahr-32)* 5/9).toFixed(1);
        return celsius;
    }
    if (valueTemp=='cels'){
        document.getElementById("result").innerHTML=celsToFahr
        (inputTemp)+ "&#176; Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML=fahrToCels
        (inputTemp)+"&#176; celsius";
    }
}