export default [
    {
        path: '/TodoList/TodoApp',
        name: 'TodoApp',
        component: () => import(/* webpackChunkName: "frontend" */ './TodoApp.vue')
    }
]