<template>
<div class="footer">
    <footer>
        <p>This project is made by Team4 in Accenture bootcamp Javascript(Kurzeme)</p>
        <p> &copy; Copyright 2021</p>
    </footer>
</div>

</template>

<script>
 export default{
     name: 'Footer'
 }
</script>

<style scoped>
    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #DFB6AE;
        padding: 25px;
        /* position: absolute; */
        width: 100vw;
        bottom: 0;
        right: 0.5rem;
    }
    p{
        padding: 4px;
        margin: 0;
    }
</style>