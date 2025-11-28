
const fieldType = document.getElementById('fieldType')
const inputText = document.querySelector('.inputText')
const addBtn = document.querySelector('.addBtn')
const formPreview = document.querySelector('.formPreview')
const clearBtn = document.querySelector('.clearBtn')
const submitBtn = document.querySelector('.submitBtn')
const error = document.querySelector('.error')

let fields = [];

addBtn.onclick =()=>{
  const type = fieldType.value;
  const label = inputText.value.trim();
  error.textContent = "";

  if(label === ""){
      error.textContent = "Labal cannot be empty!";
      return;
  }
  if(fields.some(f => f.label == label)){
    error.textContent = "This label already exists!"
    return;
  }
  if(fields.length>=8){
    error.textContent = "Only 8 feilds are allowed!";
    return;
  }

  fields.push({type, label});
  renderFeilds();
  inputText.value = "";
}

function renderFeilds(){
    formPreview.innerHTML =  "";

    fields.forEach((field, index)=>{
        const div = document.createElement("div");
        div.className = "box";
        div.innerHTML = `
           <label for="Name">${field.label}</label>
        ${createInput(field.type)}
        <div class="field-Action">
            <button onclick = "removeField(${index})">Remove</button>
            ${index>0?`<button onclick="moveUp(${index})">Move Up</button>`:""}
            ${index<fields.length-1?`<button onclick="moveDown(${index})">Move Down</button>`:""}
        </div>
        `;
        
     formPreview.appendChild(div);
    })
}


function createInput(type){
     switch (type){
        case "Text":
            return`<input type="text" class="inputField">`;
 
        case "Email":
            return`<input type="email" class="inputField">`;
 
        case "Number":
            return`<input type="number" class="inputField">`;
 
        case "Textarea":
            return`<textarea class="inputField"></textarea>`;
 
        case "Checkbox":
            return`<input type="checkbox" class="inputField">`;
 
     }

}

function removeField(i){
    fields.splice(i, 1);
    renderFeilds();
}

function moveUp(i){
    [fields[i-1], fields[i]] = [fields[i], fields[i-1]]
    renderFeilds();
}
function moveDown(i){
    [fields[i], fields[i+1]] = [fields[i+1], fields[i]]
    renderFeilds();
}

submitBtn.onclick= ()=>{
    
    const inputs = document.querySelectorAll(".inputField");
    let message = "";

    for(let i = 0; i<fields.length;i++){
        let f = fields[i];
        let val = inputs[i].type == "checkbox"?inputs[i].checked:inputs[i].value;
        if(f.type !== "checkbox" && val === ""){
             alert(`Please fill:${f.label}`);
             return;
        }
        message += `${f.label} : ${val}\n`

    }
   alert(message);
   
}

clearBtn.onclick = ()=>{
    fields = [];
    formPreview.innerHTML = ""
}