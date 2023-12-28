let useg = 1;
const object = document.getElementById('tri')




function press() {
    let fontsDiv = document.getElementById("avral");

    if(useg == 1){
        fontsDiv.style.fontSize = 'large';
        object.style.borderBottomColor = 'red';
        document.getElementById("sq").style.backgroundColor = "transparent";
        document.getElementById("ro").style.backgroundColor = "transparent";
        document.getElementById("cont").style.backgroundColor = "pink";
    }
    if(useg == 2){
        fontsDiv.style.fontSize = 'x-large';
        object.style.borderBottomColor = 'transparent';
        document.getElementById("sq").style.backgroundColor = "green";
        document.getElementById("ro").style.backgroundColor = "transparent";
        document.getElementById("cont").style.backgroundColor = "purple";
    }
    if(useg == 3){
        fontsDiv.style.fontSize = 'xx-large';
        object.style.borderBottomColor = 'transparent';
        document.getElementById("sq").style.backgroundColor = "transparent";
        document.getElementById("ro").style.backgroundColor = "yellow";
        document.getElementById("cont").style.backgroundColor = "blue";
    }
    if(useg == 4){
        fontsDiv.style.fontSize = 'x-large';
        object.style.borderBottomColor = 'red';
        document.getElementById("sq").style.backgroundColor = "transparent";
        document.getElementById("ro").style.backgroundColor = "transparent";
        document.getElementById("cont").style.backgroundColor = "pink";
    }
    if(useg == 5){
        fontsDiv.style.fontSize = 'large';
        object.style.borderBottomColor = 'transparent';
        document.getElementById("sq").style.backgroundColor = "green";
        document.getElementById("ro").style.backgroundColor = "transparent";
        document.getElementById("cont").style.backgroundColor = "purple";
    }
    if(useg == 6){
        useg = 0;
        object.style.borderBottomColor = 'transparent';
        document.getElementById("sq").style.backgroundColor = "transparent";
        document.getElementById("ro").style.backgroundColor = "yellow";
        document.getElementById("cont").style.backgroundColor = "blue";
    }

    useg++;
 }