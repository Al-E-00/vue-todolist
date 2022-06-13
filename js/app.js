let toDoList = [
    {
        text: "Clean the room",
        done: false,
    },
    {
        text: "Buy a new car",
        done: false,
    },
    {
        text: "Do homework",
        done:false,
    },
    {
        text: "Finish the exercise",
        done: false,
    },
]

new Vue ({

    el: "#app",
    data: {
        toDoListItem: toDoList,
    },
    methods: {
        deleteItem(index) {
            this.toDoListItem.splice(index, 1);
        }
    }
})

/* 
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, 
senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
*/