let list = [];
let valueName = document.querySelector("input");
let ul = document.querySelector("ul");
function add() {
    let task = {
        id: new Date().getTime(),
        value: valueName.value,
    };
    list.push(task);
    ul.innerHTML += `<li> ${task.value}
   <span> <i onClick="remove(${task.id})" class="fa-solid fa-trash"></i>
   <i onClick="edit(${task.id})" class="fa-solid fa-pen-nib"></i></span>
</li>`;

    valueName.value = "";
}
function update() {
    ul.innerHTML = "";
    list.forEach((item) => {
        ul.innerHTML += ` <li> ${item.value}
       <span> <i onClick="remove(${item.id})" class="fa-solid fa-trash"></i>
       <i onClick="edit(${item.id})" class="fa-solid fa-pen-nib"></i></span>
    </li>`;
    });
}
function remove(id) {
    //lấy ra item.id nào mà không bằng với id tạo ra mmang còn bằng thì xóa đi
    list = list.filter((item) => {
        return item.id !== id;
    });
    update();
}
let ID = "";
function edit(id) {
    const findValue = list.find((value) => value.id === id);
    const fix = document.querySelector(".fix");
    fix.classList.add("active");
    valueName.value = findValue.value;
    ID = id;
}
function fix() {
    const fixValue = list.find((item) => item.id === ID);
    fixValue.value = valueName.value;
    update();
    const fix = document.querySelector(".fix");
    fix.classList.remove("active");
}
