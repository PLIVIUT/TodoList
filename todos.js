let input = prompt('What would you like to do?');
const todos = ['Collect Wood', 'Collect Coal', 'Collect cobblestone'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************')
    }

    else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if (input === 'delete') {
        const deleteTodo = parseInt(prompt('Ok, what do you want to delete?'));
        if (!Number.isNaN(deleteTodo)) {
            const deleted = todos.splice(deleteTodo, 1);
            console.log(`Ok, deleted ${deleted}`);
        }
        else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?')
}
console.log('You exit the app.')