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
})

/* 
Print inside a list, a item for every todo.
If done propriety = true -> show the text barred

*/