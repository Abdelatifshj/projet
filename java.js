const calories = document.getElementById("resultcal");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const age = document.getElementById("age");
const height = document.getElementById("hi");
const weight = document.getElementById("we");

function calculateBMR(weight, height, age, gender) {
    if (gender === "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    }
    return 10 * weight + 6.25 * height - 5 * age - 161;
}

calculateBtn.addEventListener("click", () => {
    let genderValue = document.querySelector(".calories-cal input[name='gender']:checked").value;
    let weightValue = parseFloat(weight.value);
    let heightValue = parseFloat(height.value);
    let ageValue = parseFloat(age.value);

    if (isNaN(weightValue) || isNaN(heightValue) || isNaN(ageValue)) {
        calories.innerHTML = "Please enter valid numbers for weight, height, and age.";
        return;
    }

    let BMR = calculateBMR(weightValue, heightValue, ageValue, genderValue);
    let calo = BMR * 1.4;
    calories.innerHTML = `Your daily calorie intake: ${calo} calories/day.`;
});

clearBtn.addEventListener("click", () => {
    weight.value = '';
    height.value = '';
    age.value = '';
    calories.innerHTML = '';
});



