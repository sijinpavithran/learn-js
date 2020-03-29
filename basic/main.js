//Examin the document object

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//Get element by ID
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


//Get elements from classname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i =0; i < items.length; i++){
//     items[i].style.backgroundColor = 'grey';
// }

//Get elements by tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (let i =0; i < li.length; i++){
//     li[i].style.backgroundColor = 'grey';
// }

//Query selector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem= document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'orange';

// Query selector all 
// var titles = document.querySelectorAll('.title');

// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// var even = document.querySelectorAll('.list-group-item:nth-child(even)');

// for(var i =0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';

// }

//Traversing the DOM

// var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);


//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);


// Next Siblings
// console.log(itemList.nextSibling);
//next element sibling
// console.log(itemList.nextElementSibling);

//Previous siblings
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//Create element

// Create a div

// var newDiv= document.createElement('div');

// //Add class
// newDiv.className = 'hello';

// //Add ID
// newDiv.id = 'hello1';

// //Add attribute
// newDiv.setAttribute('title', 'Hello Div')

// var newDivText = document.createTextNode('Hello World');

// //addd text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// Events

// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
//     // console.log('button cliecked!');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id +'</h3>';
//     // console.log(e.type);

//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);


// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
    // e.preventDefault();
    // console.log('EVENT TYPE: ' + e.type);

    // console.log(e.target.value);

    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // output.innerHTML= '<h3>MouseX: '+ e.offsetX + '</h3> <h3> MouseY: '
    // +e.offsetY+'</h3>';
    // box.style.backgroundColor = "rgb("+e.offsetX + ","+e.offsetY+",40)";
// }

/////// Basic App

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    // console.log(1);

    //get input value
    var newItem = document.getElementById('item').value;

    //Create new LI element

    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button elelment
    var deleteBtn = document.createElement('button');

    //Add classname to dleete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    //Add li to list
    itemList.appendChild(li);
}

function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}


function filterItems(e){
    // covert to lower case
    var text = e.target.value.toLowerCase();
    //Get list
    var items = itemList.getElementsByTagName('li');

    //Convert to arry
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}