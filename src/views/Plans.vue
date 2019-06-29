<template>
    <div>
      <!-- Jumbotron -->
      <div class="jumbotron jumbotron-fluid">
        <div class="jumbo-text container">
          <div class="heading text-center">
            <h2><span>Choose</span> <br>your plan</h2>
            <p class="text-muted text-sm">The services we provide are unparalleled</p>
          </div>
        </div>
      </div>

      <div class="card curve">
        <div class="row justify-content-center">
            <div class="card package standard">
              <div class="card-body">
                <h2 class="price">₹799</h2>
                <ul class="package-info align-middle pb-3 pt-2">
                  <li>Resume Building</li>
                  <li>Personality Development Course</li>
                </ul>
                <button class="btn buy-btn">Buy Now</button>
              </div>
            </div>
            
            <div class="card package premium">
              <div class="card-body">
                <h2 class="price">₹1,499</h2>
                <ul class="package-info align-middle">
                  <li>Resume Building</li>
                  <li>Personality Development Course</li>
                  <li>Specialised Support</li>
                </ul>
                <button class="btn buy-btn">Buy Now</button>
              </div>
            </div>

            <div class="card package premium">
              <div class="card-body">
                <h2 class="price">₹1,499</h2>
                <ul class="package-info align-middle">
                  <li>Resume Building</li>
                  <li>Personality Development Course</li>
                  <li>Specialised Support</li>
                </ul>
                <button class="btn buy-btn">Buy Now</button>
              </div>
            </div>

        </div>
      </div>

    </div>
</template>

<script>
  export default {
      
  }
</script>

<style scoped>
  .jumbotron {
    padding-top: 2em;
    padding-bottom: 6em;
  }
  
  .curve > .row {
    margin-top: 10em;
  }

</style>
