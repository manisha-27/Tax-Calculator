var gross=document.getElementById("gross");
var extra=document.getElementById("extra");
var ageselect=document.getElementById("ageselect");
var deduction=document.getElementById("deduction");

var deductionValue = parseFloat(deduction.value) || 0;

function calculate(){
    var total = parseFloat(gross.value) + parseFloat(extra.value) - deductionValue;
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
    console.log(ans+" in calculate() ");
    saveNoOfObjectInStorage();  // will save the number of object in local Storage (index for each row).
    saveData(total-ans);    // will save the data in local storage as well as generate row table in html.
}

let dataStorage=[];

function saveNoOfObjectInStorage(){
    let noOfObject;
    console.log("Heyooo")
    if(localStorage.getItem("noOfObject")===null){
        noOfObject=0;
    }else{
        noOfObject=parseInt(localStorage.getItem("noOfObject"));
    }
    localStorage.setItem("noOfObject",noOfObject+1);
}

function saveData(ans){
    const inputData={
        gross: gross.value,
        extra: extra.value,
        ageselect: ageselect.value,
        deduction: deductionValue,
        ans: ans
    }
    console.log(ans+" in saveData() ");
    dataStorage.push(inputData);
    localStorage.setItem("taxData", JSON.stringify(dataStorage));
    addRowInTable(inputData)
}

// push data to html from local data storage
const data=JSON.parse(localStorage.getItem('taxData')) || [] ;
console.log(data);
const dataTable=document.getElementById("tableBody");

function generateTableRowUI(rowData){
    console.log("====")
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

function validateNumber(input) {
    var value = input.value;
    var errorIcon = document.getElementById("errorIcon");
    var errorTooltip = document.getElementById("errorTooltip");

    if (isNaN(value)) {
        errorIcon.classList.remove("hidden");
        errorTooltip.classList.remove("hidden");
        checkInputGross=true;
        validateNumber1();
    } else {
        errorIcon.classList.add("hidden");
        errorTooltip.classList.add("hidden");
    }
}

// function validateNumber1(input) {
//     var value = input.value;
//     if (isNaN(value)) {
//         checkInputExtra=true;
//         checkIfSubmitEnabled();
//     }
// }

function validateNumber1() {
    // if (isNaN(value)) {
    //     checkInputExtra=true;
    //     checkIfSubmitEnabled();
    // }
    var input1 = document.getElementById("gross").value;
  var input2 = document.getElementById("extra").value;
  var input3 = document.getElementById("deduction").value;
    // var submitButton = document.getElementById("submit-btn");
    console.log(input1+" - "+input2+" - "+input3);
    
    // // Regular expression to match only numbers
    // var regex = /^[0-9]*$/;
    
    // // Check if all input fields contain only numbers
    // if (regex.test(input1) && regex.test(input2) && regex.test(input3)) {
    //     submitButton.disabled = false; // Enable the button
    // } else {
    //     submitButton.disabled = true; // Disable the button
    // }
}

// function validateNumber2(input) {
//     var value = input.value;
//     if (isNaN(value)) {
//         checkInputDeduction=true;
//         checkIfSubmitEnabled();
//     }
// }

function checkIfSubmitEnabled(){
    console.log("Heyyooooooooooooooo")
    if(checkInputDeduction && checkInputExtra && checkInputGross){
        var submitbtn =document.getElementById("submit-btn");
        // submitbtn.classList.remove("disabled");
        submitbtn.disabled=true;
    }
}


document.getElementById("errorIcon").addEventListener("mouseover", function() {
    var tooltip = document.getElementById("errorTooltip");
    tooltip.style.display = "block";
});

document.getElementById("errorIcon").addEventListener("mouseout", function() {
    var tooltip = document.getElementById("errorTooltip");
    tooltip.style.display = "none";
});


document.getElementById("help-icon").addEventListener("mouseover", function() {
    var tooltip = document.getElementById("helpTooltip");
    tooltip.style.display = "block";
});

document.getElementById("help-icon").addEventListener("mouseout", function() {
    var tooltip = document.getElementById("helpTooltip");
    tooltip.style.display = "none";
});