function onSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        let sentence = document.getElementById("sentence").value;
        let letter = document.getElementById("letter").value;
        let result = sentence.substring(sentence.indexOf(letter) + 1);
        let result_text = document.getElementById("result");
        if(sentence.indexOf(letter)===-1){
            result_text.innerText = "The letter does not exist in the sentence";
        }
        else{
            result_text.innerText = result;
        }
    }
    else {
        window.alert("Please enter the required fields");
    }
}

function fieldFocus(event) {
    event.target.style.border = "1px solid black";
}

function validateForm() {
    let fields = document.forms['myForm'];
    let errorFields = false;
    fields.querySelectorAll('input').forEach(element => {
        if (element.value === "") {
            element.style.border = "1px solid red";
            errorFields = true;
        }
    });
    return !errorFields;
}