<template>
<div class="footer">
    <footer>
        <p>This project is created by Team4 within Accenture bootcamp Javascript(Kurzeme)</p>
        <small> &copy; Copyright 2021</small>
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
        padding: 15px;
        width: 100vw;
        bottom: 0;
        right: 0.5rem;
        width: 100%;
        background: rgba(14, 13, 14, .8);
    }
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p, small{
        padding: 4px;
        margin: 0;
        color: white;
        text-align: center;
    }
    p {
        font-size: 12px;
    }
    small {
        font-size: 8px;
    }
</style>