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

<style>
</style>
