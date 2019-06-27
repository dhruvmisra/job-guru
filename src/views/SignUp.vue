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
      <button @click="register" type="button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        let credentials = {
          email: this.email,
          password: this.password
        }

        axios.post('http://localhost:4000/signup', credentials)
          .then(res => {
            console.log(res);
          });
      }
    }
  }
</script>

