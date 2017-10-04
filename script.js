// document.getElementById('add').onclick

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

// var todoList = {
//   todos: [],
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//   },
//   toggleAll: function() {
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;
    
//     // Get number of completed todos.
//     // for (var i = 0; i < totalTodos; i++) {
//     //   if (this.todos[i].completed === true) {
//     //     completedTodos++;
//     //   }
//     // }
    
//     this.todos.forEach(function(todo) {
//       if (todo.completed === true) {
//         completedTodos++;
//       }
//     });
    
//     // Case 1: If everything’s true, make everything false.
//     // if (completedTodos === totalTodos) {
//     // this.todos.forEach(function(todo) {
//     //   todo.completed = false;
//     // });
//     //   for (var i = 0; i < totalTodos; i++) {
//     //     this.todos[i].completed = false;
//     //   }
    
//     // Case 2: Otherwise, make everything true.    
//   // } else {
//   //     this.todos.forEach(function(todo) {
//   //       todo.completed = true;
//   //     });
//     // } else {
//     //   for (var i = 0; i < totalTodos; i++) {
//     //     this.todos[i].completed = true;
//     //   } 
//   //   }
//     this.todos.forEach(function(todo) {
//       // Case 1: if everything is true, make everything false
//       if (completedTodos === totalTodos) {
//         todo.completed = false;        
//       // Case 2: otherwise, make everything true.
//       } else {
//         todo.completed = true;
//       }
//     });
//   }
// };

// var handlers = {
//   addTodo: function() {
//     var addTodoTextInput = document.getElementById('addTodoTextInput');
//     todoList.addTodo(addTodoTextInput.value);
//     addTodoTextInput.value = '';
//     view.displayTodos();
//   },
//   changeTodo: function() {
//     var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
//     var changeTodoTextInput = document.getElementById('changeTodoTextInput');
//     todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
//     changeTodoPositionInput.value = '';
//     changeTodoTextInput.value = '';
//     view.displayTodos();
//   },
//   deleteTodo: function(position) {
//     todoList.deleteTodo(position);
//     view.displayTodos();
//   },
//   toggleCompleted: function() {
//     var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
//     todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
//     toggleCompletedPositionInput.value = '';
//     view.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//     view.displayTodos();
//   }  
// };

// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector('ul');
//     todosUl.innerHTML = '';
// //     for (var i = 0; i < todoList.todos.length; i++) {
// //       var todoLi = document.createElement('li');
// //       var todo = todoList.todos[i];
// //       var todoTextWithCompletion = '';

// //       if (todo.completed === true) {
// //         todoTextWithCompletion = '(x) ' + todo.todoText;
// //       } else {
// //         todoTextWithCompletion = '( ) ' + todo.todoText;
// //       }
      
// //       todoLi.id = i;
// //       todoLi.textContent = todoTextWithCompletion;
// //       todoLi.appendChild(this.createDeleteButton());
// //       todosUl.appendChild(todoLi);
// //     }
//     todoList.todos.forEach(function(todo, position) {
//       var todoLi = document.createElement('li');
//       var todoTextWithCompletion = '';

//       if (todo.completed === true) {
//         todoTextWithCompletion = '(x) ' + todo.todoText;
//       } else {
//         todoTextWithCompletion = '( ) ' + todo.todoText;
//       }
      
//       todoLi.id = position;
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }, this);
//   },
//   createDeleteButton: function() {
//     var deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.className = 'deleteButton';
//     return deleteButton;
//   },
//   setUpEventListeners: function() {   
//     var todosUl = document.querySelector('ul');

//     todosUl.addEventListener('click', function(event) {  
//     // get the element that was clicked on.
//       var elementClicked = event.target;
//     //check if element clicked is a delete button
//       if (elementClicked.className === 'deleteButton') {
//         handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
//       } 
//     });
//   } 
//  };

// view.setUpEventListeners();