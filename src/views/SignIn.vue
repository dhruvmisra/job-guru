<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbo-text container">
        <div class="heading text-center">
          <h1><span>Sign </span> In</h1>
          <p class="text-muted text-sm">Take a step closer...</p>
        </div>
      </div>
    </div>
    <div class="card curve">
      <form class="mx-auto col-sm-5">
        <div class="form-group" :class="{invalid: $v.email.$error}">
          <label for="email">Email address</label>
          <input type="email"
                  class="form-control" 
                  id="email" 
                  @blur="$v.email.$touch()"
                  v-model="email" 
                  placeholder="Enter email">
          <small v-if="$v.email.$error">Please enter a valid Email address</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
        <div class="form-check my-4">
          <input type="checkbox" class="form-check-input" id="terms">
          <label class="form-check-label" for="terms">Terms and conditions</label>
        </div>
        <button @click.prevent="signin" type="button" class="btn btn-primary">Sign In</button>
      </form>
      
      <router-link to="/signup" tag="a" class="link mx-auto">Create a new account</router-link>
    </div>
  </div>
</template>

<script>
  import firebase from '../firebase';
  import {required, email} from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    validations: {
      email: {
        required,
        email
      }
    },
    methods: {
      signin() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user.user);
            this.$router.go({path: this.$router.path});
          },
          err => {
            alert(err.message);
          })
      }
    }
  }
</script>

<style scoped>
  .jumbotron {
    padding-top: 1em;
    padding-bottom: 8em;
  }
  form {
    margin-top: 10em;
  }
  .invalid small {
    color: red;
  }
  .invalid input {
    border: 1px solid red;
  }
  .link {
    padding-top: 20px;
    text-decoration: none;
  }
</style>

