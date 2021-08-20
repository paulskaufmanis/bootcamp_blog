<template>
    <form>
        <div>
        <label>Email</label>
        <input type="email" v-model="email" require>
        </div>

        <div>
        <label>Password</label>
        <input type="email" v-model="password" require>
        </div>

        <!-- <div>
        <label>Password check</label>
        <input type="email" require>
        </div> -->
        <button>{{authType.title}}</button>
    </form>
</template>

<script>
    export default {
        name: 'Form',
        // props:{
        //     authType:{
        //         title: String,
        //         callBack: Function
        //     }
        // }   
        data(){
            return{
                email: "",
                password: "",
            }
        }   
    }
</script>