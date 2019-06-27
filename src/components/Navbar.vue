<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- <a class="navbar-brand" href="./">JobGuru</a> -->
    <router-link to="/" tag="a" class="navbar-brand">JobGuru</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <!-- <a class="nav-item nav-link" href="./.html">Why Us</a>
        <a class="nav-item nav-link" href="./case-studies.html">Case Studies</a>
        <a class="nav-item nav-link" href="./about-us.html">About Us</a> -->
        <router-link to="/why-us" tag="a" class="nav-item nav-link">Why Us</router-link>
        <router-link to="/case-studies" tag="a" class="nav-item nav-link">Case Studies</router-link>
        <router-link to="/about-us" tag="a" class="nav-item nav-link">About Us</router-link>
        <!-- <button class="btn btn-outline-primary mx-2" type="button">Sign Up</button>      -->
        <router-link to="/signup" tag="button" class="btn btn-outline-primary mx-2">Sign Up</router-link>
 
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style>


</style>


