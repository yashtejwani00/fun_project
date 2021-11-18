function sendsms(){
    sms = new String(document.getElementById("sms").value);
    sms.replace(" ","+");

    let apiLink = 'https://api.callmebot.com/text.php?user=Yashtejwani00&text='
    apiLink += sms;
    let temp = new XMLHttpRequest();
    temp.open('GET', apiLink);
    temp.send();
    document.getElementById("sms").value="";
    if(sms.length > 0){
        let congo = document.getElementById("congo");
        let congo1 = document.getElementById("congo1");
        congo.style.display = "block";
        congo1.style.display = "block";
    }
}

