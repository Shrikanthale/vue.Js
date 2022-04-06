import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

var routes=[
    
   
]

import TodoApp from './src/components/TodoList/todo.js'
addRoutes(TodoApp)


function addRoutes(RoutesArr){
    RoutesArr.forEach((route)=>{
      routes.push(route);
    })
}