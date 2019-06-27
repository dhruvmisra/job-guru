<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbo-text container">
        <div class="heading text-center">
          <h2><span>What we can</span> <br> do for you</h2>
          <p class="text-muted text-sm">The services we provide are unparalleled</p>
        </div>
      </div>
    </div>

    <!-- Serivices -->
    <div class="card curve services">

      <div class="row justify-content-center">
        <div class="card service">
          <div class="card-body text-muted">
            <img src="../assets/service_resume.png" alt="resume" class="service-img mx-auto">
            <h4 class="text-center py-2">Resume Building</h4>
            <div class="service-info">
              <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <button class="d-flex mx-auto btn btn-primary btn-center">Learn More</button>
            </div>
          </div>
        </div>
        
        <div class="card service">
          <div class="card-body text-muted">
            <img src="../assets/service_pd.png" alt="resume" class="service-img mx-auto">
            <h4 class="text-center py-2">Personality Development</h4>
            <p class="text-center">We will provide a Personality Development training course to help you stand out from the crowd</p>
            <button class="d-flex mx-auto btn btn-primary btn-center">Learn More</button>
          </div>
        </div>

        <div class="card service">
          <div class="card-body text-muted">
            <img src="../assets/service_job.png" alt="resume" class="service-img mx-auto">
            <h4 class="text-center py-2">Specialised Support</h4>
            <div class="service-info">
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button class="d-flex mx-auto btn btn-primary btn-center">Learn More</button>
              </div>
            </div>
        </div>

      </div>
    
    </div>

    <!-- Resume section -->
    <div class="card resume curve">
        <p class="fact col-md-6 mx-auto text-center text-muted">According to a study/research, it is found that over 
          65% of the candidates don’t get an interview call because of how their resume is built.</p>
          
      <div class="row justify-content-center pt-5">
        <div class="col-md-4 resume-img">
          <img src="../assets/resume.png" alt="" class="h-100">
        </div>

        <div class="col-md-5">
            <div class="heading">
              <h2><span>The service</span> <br>we provide to create a resume</h2>
              <p class="text-muted text-sm">We will create a professional looking resume for you 
                mentioning all the relevant information</p>
            </div>
            <ul class="points">
              <li>
                <p>
                  Build a professional resume <br>
                  <span class="text-muted text-sm"></span>
                </p>
              </li>
              <li>
                  <p>
                    Guidance for future resume building <br>
                    <span class="text-muted text-sm">Guidance for future resume building</span>
                  </p>
      
              </li>
            </ul>

            <button class="btn template-btn mt-5">View a template</button>
        </div>
      </div>
    </div>

    <!-- PD section -->
    <div class="card pd curve">
      <p class="fact col-md-6 mx-auto text-center text-muted">Over 70% of the candidates are rejected 
        within the initial five seconds of the interview because they lack the right attitude and 
        personality to impress the recruiter/interviewee.</p>
      
      <div class="row justify-content-center pt-5">
        <div class="col-md-5">
            <div class="heading">
              <h2><span>Personality Development </span> <br>course to shape your future</h2>
              <p class="text-muted text-sm">We give you the best personality development course
                which will help you get closer to your dream job.</p>
            </div>
            <ul class="points">
              <li>Unnecessary information</li>
              <li>Some more unnecessary information</li>
              <li>Making no sense whatsoever</li>
            </ul>

        </div>

        <div class="col-md-3">
          <img src="../assets/pd.png" alt="" class="resume-img">
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
  padding-bottom: 15em;
}
.curve:nth-child(odd) {
    background-color: var(--light);
}

/* Services */
.services {
    margin-top: -15em;
    /* background-color: rgb(255, 255, 255); */
}
.services > .row {
    margin-top: 10em;
}
.service.card {
    position: relative;
    font-size: 0.9em;
    margin: 30px;
    width: 300px;
    border: none;
    transition: box-shadow 0.2s ease-out;
}
.service.card:hover {
    box-shadow: 2px 2px 8px rgb(226, 226, 226);
}
.service-img {
    display: block;
    width: 80px;
    height: 80px;
    /* filter: drop-shadow(1px 1px 1px rgb(194, 194, 194)) */
}
.service-info {
    position: absolute;
    bottom: 20px;
}
.service > .card-body > h4 {
    font-size: 1.5em;
}

/* Resume */
.resume-img {
    width: 350px;
    height: 350px;
}
.resume-img::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 100px;
    width: 200px;
    height: 300px;
    opacity: 0;
    background-color: rgba(46, 196, 181, 0.5);
    z-index: -1;
    animation: fade-in-up 0.6s ease-out forwards;
}
@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: rotate(30deg) translateY(100px);
    }
    70% {
        transform: rotate(30deg) translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: rotate(30deg) translateY(0);
    }
}

</style>
