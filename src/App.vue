<template>
  <div id="app">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">

      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
        integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
        crossorigin="anonymous"
      />
    </head>
    <h1 id="welcome">Welcome to Car Tracker!</h1>
      <hr class="Horizontal-Line-1" />
    <cars-home id="slogan" msg="Your convenient Mileage and Maintenance Pit Stop!"/>
    <router-view />
  </div>
</template>

<script>
import CarsHome from './views/CarsHome.vue'

export default {
  name: 'App',
  components: {
    CarsHome
  }
}
</script>

<style>
#welcome {
font-size: 4.5em;
font-family: 'Monoton', cursive;
display: flex;
align-items: flex-start;
margin-left: 60px;
}

#app {
font-family: 'Bebas Neue', cursive;
text-align: center;
margin-top: 60px;
}

html {
font-size: 16px;
}

Button {
width: 120px;
height: 32px;
opacity: 90%;
background: #f4a261;
color: #1a1818;
border-color: #232323;
border-width: 1px;
border-style: solid;
border-radius: 10px 10px 10px 10px;
font-size: 14px;
text-align: center;
}

#slogan {
font-size: 1.5em;
text-align: left;
margin-left: 120px;
}

.Horizontal-Line-1 {
display: block;
width: 1400px;
border: 0;
border-top: 5px solid rgb(185, 64, 16);
margin: 0px;
padding: 5px;
}

body {
  background-image: linear-gradient(to right, #e76f51,#e9c46a);
}

a {
  color: rgb(36, 35, 34);
}

a:visited {
  text-decoration: none;
  color: rgb(36, 35, 34);
}
a:hover {
  text-decoration: none;
  color: rgb(75, 73, 69);
}

* {
font-family: 'Bebas Neue', cursive;
  color: rgb(42, 40, 40);
}

header {
  height: 70px;
}

</style>
