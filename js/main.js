let listContainer = document.querySelector('.list ul');
let inputValue  = document.querySelector('.form input');
let clearBtn = document.querySelector('.form .clear');
let addBtn = document.querySelector('.form .add');
let selectOption = document.querySelector('.form .select select');
let clearAllBtn = document.querySelector(".list .title .clear-all");
let itemDeleteBtns;


function createElements(value){
        let item = document.createElement("li");

        let itemCheck = document.createElement("input");
        itemCheck.setAttribute("type", "checkbox");

        let itemLabel = document.createElement("label");
        itemLabel.innerText = value;

        let itemSpan = document.createElement('span');
        let itemBtn = document.createElement('button');
        itemBtn.classList.add("delete")
        itemBtn.onclick = function () {  
            listContainer.removeChild(itemBtn.parentElement.parentElement);
            if(listContainer.childElementCount == 0){
                document.querySelector(".list p").style.display = 'block'
            }
        }
        let itemDeleteImg = document.createElement('img');
        itemDeleteImg.setAttribute("src", "./imgs/icons8-trash-24.png");


        itemBtn.append(itemDeleteImg)
        itemSpan.append(itemBtn)


        item.append(itemCheck);
        item.append(itemLabel);
        item.append(itemSpan)
        return item;
}

addBtn.onclick = function () {
  if (inputValue.value && inputValue.value.length >= 2) {
    let item = createElements(inputValue.value);
    if (listContainer.clientHeight > 500) {
      listContainer.style.cssText = "max-height: 500px;overflow-y: scroll;";
    }
    document.querySelector(".list p").style.display = "none";
    listContainer.append(item);
  } else {
    window.alert("please enter a valid task");
  }
};

clearBtn.onclick = function () {
    inputValue.value = '';
  }

clearAllBtn.onclick = function(){
  let childern = Array.from(listContainer.children);
  childern.forEach(c =>{
    if (c.style.display == "flex") {
      listContainer.removeChild(c);
    }else if(c.style.display== ''){
      listContainer.removeChild(c);
    }
  })
  if(listContainer.childElementCount == 0){
    document.querySelector(".list p").style.display = "block";
  }
}

selectOption.onchange = function(){
  let childern = Array.from(listContainer.children);
  if (selectOption.value == 'in progress') {
    for(let i=0; i<childern.length ; i++){
      if (childern[i].children[0].checked) {
        childern[i].style.display = 'none'
      }
      else{
        childern[i].style.display = "flex";
      }
    }
  }

  else if (selectOption.value == 'done') {
    for(let i=0; i<childern.length ; i++){
      if (!childern[i].children[0].checked) {
        childern[i].style.display = 'none'
      }else{
        childern[i].style.display = "flex";
      }
    }
  }
  else{
    for (let i = 0; i < childern.length; i++) {
      childern[i].style.display = "flex";
    }
  }
}
