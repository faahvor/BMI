const form = document.getElementById("form");
const bmi = document.getElementById("bmi");

function bmi_calc(e) {
    e.preventDefault();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
 const heightInMeters = height / 100;
 const totalBMI= (weight / (heightInMeters * heightInMeters)).toFixed(3);
 if(totalBMI < 18.5){
    bmi.textContent = `Your BMI is ${totalBMI} Underweight`;
    bmi.style.backgroundColor = "yellow";
    bmi.style.color = "black";
 }else if(totalBMI >= 18.5 && totalBMI <= 24.9){
  bmi.textContent = `Your BMI is ${totalBMI} Normalweight`;
  bmi.style.backgroundColor = "green";
  bmi.style.color = "black";
 }else if(totalBMI >= 25.0 && totalBMI <= 29.9){
  bmi.textContent = `Your BMI is ${totalBMI} Overweight`;
  bmi.style.backgroundColor = "red";
  bmi.style.color = "black";
 }else if(totalBMI > 30.0){
  bmi.textContent = `Your BMI is ${totalBMI} Obese`;
  bmi.style.backgroundColor = "red";
  bmi.style.color = "black";
 }else if(totalBMI > 40.0){
  bmi.textContent = `Your BMI is ${totalBMI} Morbidly Obese`;
  bmi.style.backgroundColor = "red";
  bmi.style.color = "black";
 }

}
