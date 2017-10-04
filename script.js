//user clicked on the "Add" button
//if there is any text in the item field, add that text to the To Do list
document.getElementById('add').addEventListener('click', function() {
var value = document.getElementById('item').value;
	if (value) {
		addItemTodo(value);
		document.getElementById('item').value = '';
	}  
// console.log(value);
});

function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
	// console.log(this.parentNode.parentNode);
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;

	// check to see if item should be added to completed list or re-added to todo list
	var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

// Add a new item to the To Do list
function addItemTodo(text) {
	var list = document.getElementById('todo');
	var item = document.createElement('li');
	item.innerText = text;
	console.log(item);

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	// remove.innerHTML = removeSVG;

	// add click event for removing item
	remove.addEventListener('click', removeItem);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	// complete.innerHTML = completeSVG;

	// add click event for completing an item
	complete.addEventListener('click', completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}