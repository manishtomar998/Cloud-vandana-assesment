function resetForm(event) {
    document.querySelector('#firstName').value = "";
    document.querySelector('#lastName').value = "";
    document.querySelector('#city').value = "";
    document.querySelector('#country').value = "";
}

function fieldFocus(event) {
    event.target.style.border = "1px solid black";
}

function validateForm() {
    let fields = document.forms['myForm'];
    let errorFields=false;
    fields.querySelectorAll('input').forEach(element => {
        if (element.value === "") {
            element.style.border = "1px solid red";
            errorFields=true;
        }
    });
    return !errorFields;
}

function addRowToBottom(event) {
    event.preventDefault();
    if (validateForm()) {
        let table = document.querySelector('table');
        let table_row = table.querySelectorAll('tr');
        let firstNameInput = document.querySelector('#firstName').value;
        let lastNameInput = document.querySelector('#lastName').value;
        let cityInput = document.querySelector('#city').value;
        let countryInput = document.querySelector('#country').value;
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerText = table_row.length;
        cell2.innerText = firstNameInput;
        cell3.innerText = lastNameInput;
        cell4.innerText = cityInput;
        cell5.innerText = countryInput;
        resetForm();
    }
    else {
        window.alert("Please enter all the required fields");
    }

}

function addRowToTop(event) {
    event.preventDefault();
    if (validateForm()) {
        let table = document.querySelector('table');
        let table_row = table.querySelectorAll('tr');
        let firstNameInput = document.querySelector('#firstName').value;
        let lastNameInput = document.querySelector('#lastName').value;
        let cityInput = document.querySelector('#city').value;
        let countryInput = document.querySelector('#country').value;
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerText = "1";
        cell2.innerText = firstNameInput;
        cell3.innerText = lastNameInput;
        cell4.innerText = cityInput;
        cell5.innerText = countryInput;
        for (let i = 1; i < table_row.length; i++) {
            table_row[i].querySelectorAll("td")[0].innerText = i + 1;
        }
        resetForm();
    }
    else{
        window.alert("Please enter all the required fields");
    }

}

