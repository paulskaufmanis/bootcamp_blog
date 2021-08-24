<template>
    <div class="dropdown">
        <ul>
            <li
            v-for="option in options"
            :key="option.title"
            >
                <a :href="option.url">{{option.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: {
            options: Array,
        },
    }
</script>

<style scoped>
.dropdown {
        position: absolute;
        top: 4.5rem;
        right: 0.5rem;
        width: 20rem;
        background: #FFF;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        z-index: 1;
    }
    ul {
        list-style: none;
        line-height: 2rem;
        margin: 0;
        padding: 0;
    }
    li {
        padding: 0.5rem 1rem;
    }
    li:hover {
        background: #DBE2EF;
        cursor: pointer;
    }
    a {
        color: #222;
        text-decoration: none;
    }    
</style>
