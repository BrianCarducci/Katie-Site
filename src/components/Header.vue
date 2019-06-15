<template>
    <div>
        <h1>Katie Salk</h1>
        <ul>
            <li><router-link to="/">Bio</router-link></li>
            <li><router-link to="/art">Paintings</router-link></li>
            <li>Sculptures</li>
            <li>Contact</li>
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
   
</style>
