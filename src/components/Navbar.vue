<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- <a class="navbar-brand" href="./">JobGuru</a> -->
    <router-link to="/" tag="a" class="navbar-brand">JobGuru</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <router-link to="/why-us" tag="a" class="nav-item nav-link mx-md-auto">Why Us</router-link>
        <router-link to="/case-studies" tag="a" class="nav-item nav-link mx-md-auto">Case Studies</router-link>
        <router-link to="/about-us" tag="a" class="nav-item nav-link mx-md-auto">About Us</router-link>
        <router-link to="/signin" v-if="!isLoggedIn" tag="button" class="btn btn-outline-primary mx-2 mx-md-auto">Sign In</router-link>
 
        <a class="nav-link dropdown-toggle mx-md-auto" v-if="isLoggedIn" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ currentUser.email }}
        </a>
        <div class="dropdown-menu dropdown-menu-right mx-md-auto" aria-labelledby="navbarDropdownMenuLink">
          <router-link to='/resume' tag="button" class="dropdown-item">My Resume</router-link>
          <button class="dropdown-item">My Orders</button>
          <button @click="logout" class="dropdown-item">Logout</button>
        </div>      

      </div>
    </div>
  </nav>
</template>

<script>
  import firebase from '../firebase';

  export default {
    data() {
      return {
        isLoggedIn: false,
        currentUser: null
      }
    },
    created() {
      if(firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser;
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/signin');
        })
      }
    }
  }
</script>

<style>


</style>


