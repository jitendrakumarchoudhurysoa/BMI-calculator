function fun(event) {
    event.preventDefault(); // Prevent form from reloading

    let w = parseFloat(document.querySelector("#weight").value);
    let h = parseFloat(document.querySelector("#height").value);
    let ans = document.querySelector("#find");
    let d = document.querySelector("#des");

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        ans.value = "";
        d.innerHTML = "<center style='color:red;'>Please enter valid height and weight.</center>";
        return false;
    }

    // BMI formula with height in inches
    let bmi = w / ((h * 0.0254) ** 2);
    ans.value = bmi.toFixed(2);

    // Description based on BMI
    if (bmi < 18.5) {
        d.innerHTML = "<center style='color:orange;'>Underweight <br> <i>You should eat a balanced diet and gain weight for better health</i></center>";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        d.innerHTML = "<center style='color:green;'>Normal weight  <br> <i>Great job! Maintain your healthy lifestyle</i></center>";
    } else if (bmi >= 25 && bmi < 29.9) {
        d.innerHTML = "<center style='color:orange;'>Overweight <br>	<i>Consider regular exercise and a healthier diet to lose some weight</i></center>";
    } else if(bmi<40 && bmi > 30){
        d.innerHTML = "<center style='color:red;'>Obese <br> <i>It's important to lose weight to reduce health risks</i></center>";
    }
    else if(bmi>40){
        d.innerHTML = "<center style='color:rgba(126, 12, 12, 1);'><b>very  Obese<b> <br><i>Seek medical advice and adopt serious lifestyle changes</i></center>";
    }

    return false;
}
