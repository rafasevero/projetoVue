<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img src="../../public/img/logo.png" alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/characters">Characters</router-link> |
        <router-link to="/favorites">Favorites</router-link>

    </div>
</template>

<script>
    export default{
        name: "Navbar",
        props:["logo","alt"]

    }
</script>

<style scoped>
    #nav{
        background-color: #000000;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content:flex-start;
        align-items: center;
    }

    #nav #logo-url{
        margin:auto;
        margin-left: 0;
    }

    #logo{
        width: 170px;
        height: 80px;
    }

    #nav a{
        color: #d41414;
        text-decoration: none;
        margin:12px;
        transition: .5s;
    }

    #nav a:hover{
        color: #FFF;
    }

</style>