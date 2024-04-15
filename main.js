var gross=document.getElementById("numberField");
var extra=document.getElementById("extra");
var ageselect=document.getElementById("ageselect");
var deduction=document.getElementById("deduction");

var deductionValue = parseFloat(deduction.value) || 0;

//Tax Calculator Formula
function calculate(){
    var total = parseFloat(gross.value) + parseFloat(extra.value) - parseFloat(deduction.value);
    var ans=0;
    if(total>800000){
        if(ageselect.value==1){
            ans=(0.3)*total;
        }else if(ageselect.value==2){
            ans=(0.4)*total;
        }else{
            ans=(0.1)*total;
        }
    }
    document.getElementById("result").innerText=total-ans;
    saveNoOfObjectInStorage();  // will save the number of object in local Storage (index for each row).
    saveData(total-ans);    // will save the data in local storage as well as generate row table in html.
}


let dataStorage=[];

// Get index and no. of Calculation in total have been done
function saveNoOfObjectInStorage(){
    let noOfObject;
    if(localStorage.getItem("noOfObject")===null){
        noOfObject=0;
    }else{
        noOfObject=parseInt(localStorage.getItem("noOfObject"));
    }
    localStorage.setItem("noOfObject",noOfObject+1);
}

// Save Data to Local Browser Storage and also generate it's row in table to show in History's Modal
function saveData(ans){
    const inputData={
        gross: gross.value,
        extra: extra.value,
        ageselect: ageselect.value,
        deduction: deductionValue,
        ans: ans
    }
    dataStorage.push(inputData);
    localStorage.setItem("taxData", JSON.stringify(dataStorage));
    addRowInTable(inputData)
}

const data=JSON.parse(localStorage.getItem('taxData')) || [] ;
// console.log(data);
const dataTable=document.getElementById("tableBody");

function generateTableRowUI(rowData){
    let index=localStorage.getItem("noOfObject");
    return `
        <tr>
            <th scope="row">${index}</th>
            <td>${rowData.gross}</td>
            <td>${rowData.extra}</td>
            <td>${rowData.ageselect}</td>
            <td>${rowData.deduction}</td>
            <td>${rowData.ans}</td>
        </tr>
    `;
}

function addRowInTable(inputData){
    tableBody.innerHTML += generateTableRowUI(inputData);
}

var checkInputGross=false;
var checkInputExtra=false;
var checkInputDeduction=false;

// Validate Number as per that show Error Icon and tooltip
function validateNumber(input) {
    var value = input.value;
    var errorIcon = document.getElementById("errorIcon");
    var errorTooltip = document.getElementById("errorTooltip");

    if (isNaN(value)) {
        errorIcon.classList.remove("hidden");
        errorTooltip.classList.remove("hidden");
    } else {
        errorIcon.classList.add("hidden");
        errorTooltip.classList.add("hidden");
    }
}

// Error Icon and Tooltip
document.getElementById("errorIcon").addEventListener("mouseover", function() {
    var tooltip = document.getElementById("errorTooltip");
    tooltip.style.display = "block";
});

document.getElementById("errorIcon").addEventListener("mouseout", function() {
    var tooltip = document.getElementById("errorTooltip");
    tooltip.style.display = "none";
});

// Help Icon and Tooltip
var helpIcons = document.getElementsByClassName("help-icon");

for (var i = 0; i < helpIcons.length; i++) {
  helpIcons[i].addEventListener("mouseover", function() {
    var tooltip = this.nextElementSibling;
    tooltip.style.display = "block";
  });

  helpIcons[i].addEventListener("mouseout", function() {
    var tooltip = this.nextElementSibling;
    tooltip.style.display = "none";
  });
}


// Make Submit Button eneable or Disable

// Get the input fields, select element, and submit button
const inputFields = document.querySelectorAll('.form-control');
const ageSelect = document.getElementById('ageselect');
const submitButton = document.getElementById('submit-btn');

// Function to check if a value is a number
function isNumber(value) {
  return /^-?\d*\.?\d+$/.test(value);
}

// Function to check if the age selection is valid
function isValidAgeSelection() {
  return ageSelect.value !== "0";
}

// Function to check if all input fields contain numbers and age selection is valid
function shouldEnableSubmitButton() {
  const allFieldsContainNumbers = [...inputFields].every(field => isNumber(field.value.trim()));
  return allFieldsContainNumbers && isValidAgeSelection();
}

// Add event listener to each input field
inputFields.forEach(input => {
  input.addEventListener('input', function() {
    // Enable or disable the submit button based on input fields and age selection
    submitButton.disabled = !shouldEnableSubmitButton();
  });
});

// Add event listener to the select element
ageSelect.addEventListener('change', function() {
  // Enable or disable the submit button based on input fields and age selection
  submitButton.disabled = !shouldEnableSubmitButton();
});

// Add a check when the page loads to see if the submit button should be enabled
document.addEventListener('DOMContentLoaded', function() {
  submitButton.disabled = !shouldEnableSubmitButton();
});
