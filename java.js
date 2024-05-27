const calories = document.getElementById("resultcal");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const age = document.getElementById("age");
const height = document.getElementById("hi");
const weight = document.getElementById("we");
const activityLevel = document.getElementById("activityLevel");
const goal = document.getElementById("goal");

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
    let goalValue = goal.value;

    if (isNaN(weightValue) || isNaN(heightValue) || isNaN(ageValue)) {
        calories.innerHTML = "Please enter valid numbers for weight, height, and age.";
        return;
    }

    let BMR = calculateBMR(weightValue, heightValue, ageValue, genderValue);
    let activityMultiplier = parseFloat(activityLevel.value);

    if (isNaN(activityMultiplier)) {
        calories.innerHTML = "Please select your activity level.";
        return;
    }

    let TDEE = BMR * activityMultiplier;
    let dailyCaloriesMin, dailyCaloriesMax;
    let message;

  if (goalValue === "maintain") {
    dailyCaloriesMin = TDEE - 100;
    dailyCaloriesMax = TDEE + 100;

} else if (goalValue === "lose") {
    dailyCaloriesMin = TDEE - 600;
    dailyCaloriesMax = TDEE - 400;
   
} else if (goalValue === "gain") {
    dailyCaloriesMin = TDEE + 400;
    dailyCaloriesMax = TDEE + 600;

}

calories.innerHTML = `Your daily calorie intake: ${dailyCaloriesMin.toFixed(2)} to ${dailyCaloriesMax.toFixed(2)} calories/day. `;

    
    

    calories.innerHTML = `Your daily calorie intake: ${dailyCaloriesMin.toFixed(2)} to ${dailyCaloriesMax.toFixed(2)} calories/day. `;
});

clearBtn.addEventListener("click", () => {
    calories.innerHTML = '';
});
