<template>
  <div class="container col-sm-5 mt-5">
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="terms">
        <label class="form-check-label" for="terms">Terms and conditions</label>
      </div>
      <button @click.prevent="signin" type="button" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>

<script>
  import firebase from '../firebase';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signin() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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

