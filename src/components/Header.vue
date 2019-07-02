<template>
    <div>
        <h1>Katie Salk</h1>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/paintings">Paintings</router-link></li>
            <li><router-link to="/ceramics">Ceramics</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
    li:hover {
        cursor: pointer;
        background-color: blue;
    }
    li {
        display: inline;
        background-color: aqua;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    router-link {
        color: black;
    }
   
</style>
