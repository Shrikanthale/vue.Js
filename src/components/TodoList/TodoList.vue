<template>
    <div>
       <h1>Todo List</h1>

        <div :if="isEditing">
            <input type="text" :model="todo">
            <input type="submit" value="add" @click="storeTodo">
        </div>

        <div else>
           <input type="text" :model="todo">
           <input type="submit" value="submit" @click="storeTodo">
        </div>
       
       <ol>
           <li :for="(todo,index) in todos" >
                {{todo}} 

                <button @click="editTodo(index,todo)" >Edit</button>
                <button @click="deleteTodo" >Delete</button>
            </li>
       </ol>
    </div>
</template>

<script>
export default {
    name:'TodoList',
    data(){
        return {
            isEditing:false,
            selectedIndex:null,
            todo:'',
            todos: ['apple' , 'mango'],
        }
    },
    methods:{
        storeTodo(){
            this.todos.push(this.todo)
            this.todo = ''
        },

        editTodo(index,todo){
            this.todo = todo,
            this.selectedIndex = index
            this.isEditing = true
        },

        updateTodo(){
            this.todos.splice(this.selectedIndex,1,this.todo)
            this.isEditing=false
        },

        deleteTodo(index){
            this.todos.splice(index,1)
        }
    }
}
</script>