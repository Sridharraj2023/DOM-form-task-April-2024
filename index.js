
let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];

let n = 1;
let x = 0;


function addRow() {


let table = document.getElementById('my-table');

let row = table.insertRow(n);

list1[x] = document.getElementById('fname').value;
list2[x] = document.getElementById('lname').value;
list3[x] = document.getElementById('age').value;
list4[x] = document.getElementById('sex').value;
list5[x] = document.getElementById('place').value;


let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);

cell1.innerHTML = list1[x];
cell2.innerHTML = list2[x];
cell3.innerHTML = list3[x];
cell4.innerHTML = list4[x];
cell5.innerHTML = list5[x];

n++;
x++;

if(x > 2) {
    document.querySelector('tbody').append(tableRow)
  }else{
    alert("Must choose at least 2 out of 5 options")
  }


}





