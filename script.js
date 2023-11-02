function createElement(ele){
   return document.createElement(`${ele}`)
}

const title = createElement("h1")
title.id="title"
title.textContent="DOM Manipulation with Forms"
title.className = "title"
document.body.appendChild(title)


const container = document.getElementById("container")
document.body.appendChild(container)

const submitbtn = document.getElementById("submit");

submitbtn.addEventListener('click', function (e) {
    e.preventDefault();
    displayDetails();
})
function displayDetails(){

    const form = document.getElementById("form");

    const firstname = document.getElementById("first-name").value
    const lastname = document.getElementById("last-name").value
    const Address = document.getElementById("address").value
    const pincode = document.getElementById("pincode").value
    const Gender = document.querySelector('input[name="Gender"]:checked').value;
    const selectedFood = Array.from(document.getElementById("foodOption").selectedOptions).map(option => option.value).join(', ');
    const state = document.getElementById("State").value
    const Country = document.getElementById("Country").value

    var displayData = document.getElementById("display").value

    const tableBody = document.querySelector('table tbody');
    
    let newRow = tableBody.insertRow()
    const cells = [firstname, lastname, Address, pincode, Gender, selectedFood, state, Country]

    cells.forEach((cell, index)=>{
        const newCell = newRow.insertCell(index);
        newCell.textContent = cell;
    })

    form.reset();
    
}
