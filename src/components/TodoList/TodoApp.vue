<template>
    <div>
        <h1>Grocery App</h1>
        <div v-for="todo in todos" v-bind:key="todo.id" >
            {{ todo.text }}
            <button @click="removeTodo(todo.id)" > REMOVE </button>
        </div>
        <div>
            <input type="text" v-model="todo" placeholder="Enter item" />
            <button @click="addTodo" >Add</button> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'TodoApp',
    todo:'',
    data(){
        return{
            todos:[
                // {
                //     id:Math.random(),
                //     text:'Apple',
                // },
                // {
                //     id:Math.random(),
                //     text:'Mango',
                // }
            ],
        }
    },
    //    mounted(){
    //         this.getData()
    //     }, 
    methods:{
        // getData(){
        //     axios.get("http://localhost:3000/todos")
        //     .then((response)=>{
        //         this.todos = response.data;
        //         console.log(response.data,"===todos")
        //     })
        // },
        addTodo(){
            if(this.todo.length === 0){
                return;
            }else {
                this.todos.push({
                    id:Math.random(),
                    text:this.todo,
                });
            }
            this.todo=''
        },
        removeTodo(todoId) {
            this.todos = this.todos.filter(todo => todo.id != todoId);
        }
    }
};
</script>