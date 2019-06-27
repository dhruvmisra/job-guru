<template>
  <div>
      <!-- Jumbotron -->
      <div class="jumbotron jumbotron-fluid">

        <div class="categories container">
          <div class="row justify-content-around">

            <div class="card category bg-primary">
              <h1 class="card-title">Student</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#studentModal">
                Looking for an internship
              </button>
            </div>

            <!-- Student Modal -->
            <div class="modal fade" id="studentModal" tabindex="-1" role="dialog" aria-labelledby="studentModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalCenterTitle">Looking for an internship?</h4>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary">Register Now</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card category bg-primary">
              <h1 class="card-title">Fresher</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#fresherModal">
                Looking for a job
              </button>
            </div>

            <!-- Fresher Modal -->
            <div class="modal fade" id="fresherModal" tabindex="-1" role="dialog" aria-labelledby="fresherModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalCenterTitle">Looking for a job?</h4>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary">Register Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card category bg-primary">
              <h1 class="card-title">Professional</h1>
              <hr>
              <button type="button" class="btn card-body" data-toggle="modal" data-target="#professionalModal">
                Looking for a job change
              </button>
            </div>

            <!-- Professional Modal -->
            <div class="modal fade" id="professionalModal" tabindex="-1" role="dialog" aria-labelledby="professionalModal" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalCenterTitle">Looking for a job change?</h4>
                  </div>

                  <div class="modal-body">
                    <ul>
                      <li>Some very convincing stuff</li>
                      <li>How can you say no after this point?</li>
                      <li>Just buy it man</li>
                    </ul>
                  </div>
                  <div class="modal-footer mx-auto">
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary">Register Now</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div class="card curve packages">
          <div class="heading main container text-center">
            <h1 class="">Having talent and still not getting suitable jobs?</h1>
            <p class="lead">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
            <!-- <a class="btn btn-primary btn-lg mb-5" href="#" role="button">Sign Up</a> -->
            <button @click="buyNow" class="btn btn-primary btn-lg mb-5">Buy Now</button>
          </div>
        </div>

      </div>

      <!-- What we can do
      <div class="card numbers curve">    
        Numbers
        <div class="container">
          <div class="row justify-content-around">
            
            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">500+</p>
                <p class="number-text">Courses sold</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">340</p>
                <p>Users currently viewing</p>
              </div>
            </div>

            <div class="card number-card">
              <div class="card-body text-center">
                <p class="number">540</p>
                <p>Users currently viewing</p>
              </div>
            </div>

          </div>
        </div>

        <h4 class="text-center">Only a limited registrations available</h4>
        <a class="btn sign-btn sign-btn" 
            style="width: fit-content; margin: 15px auto;" 
            href="#" 
            role="button">Sign Up</a>
      
      </div> -->

      <!-- Packages -->
      <!-- <div class="card curve packages" style="position: absolute">
        <div class="heading main container text-center">
          <h1 class="">Having talent and still not getting suitable jobs?</h1>
          <p class="lead">So here is JobGuru for you to get your dream jobs by hand-crafting your resume.</p>
          <button @click="buyNow" class="btn btn-primary btn-lg mb-5">Buy Now</button>
        </div>
      </div> -->

        <!-- <div class="heading packages text-center">
          <h2><span>Our</span> Packages</h2>
          <p class="text-muted text-sm">The services we provide are unparalleled</p>
        </div>
        

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

        </div> -->


  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    methods: {
      buyNow() {  
        axios.get('http://localhost:4000/paywithpaytm?amount=1')
          .then(res => {
            document.write(res.data);
          })
          .then(res => {
            console.log(res); 
          })
      }

    }
  }
</script>

<style>
  @import "../css/styles-landing.css";
  
  .jumbotron {
    position: relative;
    padding-bottom: 3em;
  }
  .categories {
    padding-bottom: 100px;
  }
  .category {
    width: 320px;
    background: linear-gradient(45deg, #005091 0%, #2EC4B6 100%);
    box-shadow: 0px 0px 25px  rgba(255, 255, 255, 0.20);
    border: none;
    margin: 20px;
    transition: transform 0.2s ease-out;
  }
  .category::before {
    content: '';
    position: absolute;
    right: 30px;
    top: 0;
    width: 80px;
    height: 110px;
    background-color: white;
    opacity: 0.1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
    transition: height 0.2s ease-out;
  }

  .category > .card-title {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
    transition: padding-bottom 0.2s ease-out;
  }
  .category > hr {
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 auto;
    width: 80%;
    height: 0.5px;
  }
  .category > .card-body {
    color: white;
    opacity: 0.8;
    text-align: center;
    padding: 20px;
    margin: 10px 0;
    transition: opacity 0.2s ease-out, background 0.2s ease-out, margin 0.2s ease-out;
  }
  .category:hover {
    transform: scale(1.1);
  }
  .category:hover::before {
    height: 80px;
  }
  .category:hover > .card-title {
    padding-bottom: 5px;
  }
  .category:hover > .card-body {
    opacity: 1;
    cursor: pointer;
    background-color: black;
    margin: 10px 20px;
  }

  .modal-content {
    background: linear-gradient(45deg, var(--dark) 0%, #005091 100%);
    border: none;
  }
  .modal-body > ul {
    list-style-type: none;
  }

  .packages {
    position: absolute;
    color: black;
    bottom: -20em;
  }
  .heading.main {
    margin-top: 8em;
  }

</style>
