<template>
    <div id="main-banner">
       
    </div>
</template>

<script>
    export default{
        name: "Banner"
    }


</script>

<style scoped>
    #main-banner{
        object-fit: cover;
        background-image: url('../../public/img/banner.jpg');
        background-position: 0 -10px;
        background-size:cover;
        background-repeat:no-repeat;
        height: 800px;

    }

    #main-banner h1{
        color: #FFF;
        text-align: center;
        font-size: 60px;
        background-color: #222;
        padding: 20px 40px;
    }



</style>