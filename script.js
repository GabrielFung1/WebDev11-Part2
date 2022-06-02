function call(){



var text = document.getElementById("call").value;
fetch('https://api.agify.io?name=' + text)
.then(response => response.json())
.then(data => age(data)
);


fetch('https://api.genderize.io?name=' + text)
.then(response => response.json())
.then(data => gender(data)
);
fetch('https://api.nationalize.io?name=' + text)
.then(response => response.json())
.then(data => country(data)
);

document.getElementById("button").onclick = function() {
    //disable
    this.disabled = true;
}

}

function age(data){
//console.log(data);
if(data.count < 1){
document.getElementById("predictions").innerHTML = "No one by that name found";
}else{
document.getElementById("predictions").innerHTML += "<br>Predicted Age: " + data.age;

}
}
function gender(data){
//console.log(data);
if(data.count < 1){
document.getElementById("predictions").innerHTML = "No one by that name found";
}else{
document.getElementById("predictions").innerHTML += "<br> Predicted Gender: " + data.gender;


}
}
 function country(data){
	 console.log(data);
	 var country = data.country[0].country_id;
 console.log(country);
 document.getElementById("predictions").innerHTML += "<br> Predicted Nationality: " + country;
 }
 


