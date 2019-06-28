<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbo-text container">
        <div class="heading text-center">
          <h1><span>Sign </span> Up</h1>
          <p class="text-muted text-sm">Take a step closer...</p>
        </div>
      </div>
    </div>

    <div class="card curve">
      <form class="mx-auto col-sm-5">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <input type="password" class="form-control" id="password" v-model="cpassword" placeholder="Enter same password">
        </div>
        <div class="form-group">
          <label for="number">Contact Number</label>
          <input type="tel" class="form-control" id="number" v-model="cpassword" placeholder="Number">
        </div>
        <div class="form-check my-4">
          <input type="checkbox" class="form-check-input" id="terms">
          <label class="form-check-label" for="terms">Terms and conditions</label>
        </div>
        <button @click.prevent="signin" type="button" class="btn btn-primary">Sign Up</button>
      </form>
      
      <router-link to="/signin" tag="a" class="link mx-auto">Already have an account?</router-link>
    </div>
  </div>
</template>

<script>
  import firebase from '../firebase';

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user.user);
            this.$router.push('/');
          },
          err => {
            alert(err.message);
          })
      }
    }
  }
</script>

<style>
  .jumbotron {
    padding-top: 1em;
    padding-bottom: 8em;
  }
  form {
    margin-top: 10em;
  }
  .link {
    padding-top: 20px;
    text-decoration: none !important;
  }
</style>

