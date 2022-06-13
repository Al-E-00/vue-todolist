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

/* 
Predisporre un campo di input 
testuale (sempre visibile) e un pulsante 
“aggiungi”: cliccando sul pulsante, il testo
 digitato viene letto e utilizzato per creare un nuovo todo, 
 che quindi viene aggiunto alla lista dei todo esistenti.
*/