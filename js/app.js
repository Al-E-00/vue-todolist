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
        inputText: newItem,
        textInside: ""
    },
    methods: {
        deleteItem(index) {
            this.toDoListItem.splice(index, 1);
        },
        addNewItem(){
            this.toDoListItem.push(
                {
                    text: this.textInside,
                    done: false,
                }
                ),
                this.textInside = ""
            }
    }
})

