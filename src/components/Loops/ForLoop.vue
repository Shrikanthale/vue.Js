<template>
    <div>
        <table>
            <tr>
              <td>id</td>
               <td>name</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td> {{user.id}} </td>
                <td> {{user.name}} </td> 
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'ForLoop',
    props:{
        msg: String
    },
    data() {
        return{
            users: [
                {id: 1,name:'sam'},
                {id: 2,name:'Tom'}
            ],
        }
    }
}
</script>