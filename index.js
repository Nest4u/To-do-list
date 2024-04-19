"use strict";
function createTodoList() {
    let todos = [];

    return {
        addTodo: function(item) {
            if (typeof item !== 'string') {
                console.log("Помилка: Елемент списку повинен бути строковим типом.");
                return;
            }
            todos.push(item);
            console.log(`Додано: '${item}'`);
        },

        removeTodo: function(index) {
            if (index < 0 || index >= todos.length) {
                console.log("Помилка: Недійсний індекс.");
                return;
            }
            const removedItem = todos.splice(index, 1);
            console.log(`Видалено: '${removedItem}'`);
        },

        displayTodos: function() {
            if (todos.length === 0) {
                console.log("Список справ порожній.");
                return;
            }
            console.log("Список справ:");
            todos.forEach((todo, index) => {
                console.log(`${index + 1}: ${todo}`);
            });
        }
    };
}


const myTodos = createTodoList();
myTodos.addTodo("Купити молоко");
myTodos.addTodo("Прочитати книгу");
myTodos.displayTodos();
myTodos.removeTodo(0);
myTodos.displayTodos();
myTodos.addTodo(10); 
myTodos.removeTodo(2); 
