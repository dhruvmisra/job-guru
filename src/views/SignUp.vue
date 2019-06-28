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

        <div class="form-group" :class="{invalid: ($v.email.$error) && ($v.email.$model!='')}">
          <label for="email">Email address</label>
          <input type="email" 
                  class="form-control" 
                  id="email" 
                  @blur="$v.email.$touch()"
                  v-model="email" 
                  placeholder="Enter email">
          <small v-if="($v.email.$error) && ($v.email.$model!='')">Please enter a valid Email address</small>
        </div>

        <div class="form-group" :class="{invalid: ($v.password.$error) && ($v.password.$model!='')}">
          <label for="password">Password</label>
          <input type="password" 
                  class="form-control" 
                  id="password" 
                  @blur="$v.password.$touch()"
                  v-model="password" 
                  placeholder="Password">
          <small v-if="($v.password.$error) && ($v.password.$model!='')">Password must be atleast {{ $v.password.$params.minLen.min }} characters long</small>
        </div>
        
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <input type="password" class="form-control" id="password" v-model="cpassword" placeholder="Enter same password">
        </div>
        <div class="form-group" :class="{invalid: ($v.contact.$error) && ($v.contact.$model!='')}">
          <label for="number">Contact Number</label>
          <input type="tel" 
                  class="form-control" 
                  id="number" 
                  @blur="$v.contact.$touch()"
                  v-model="contact" 
                  placeholder="Number">
          <small v-if="($v.contact.$error) && ($v.contact.$model!='')">Please enter a valid Contact number</small>

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
  import {required, email, numeric, maxLength, minLength} from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        contact: null
      }
    },
    validations: {
      email: {
        required,
        email
      },
      contact: {
        required,
        numeric,
        maxLen: maxLength(10),
        minLen: minLength(10),
      },
      password: {
        required,
        minLen: minLength(6),
      },
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
    text-decoration: none !important;
  }
</style>

