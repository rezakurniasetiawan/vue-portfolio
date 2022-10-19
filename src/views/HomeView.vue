<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-lg-evenly mt-lg-5">
        <div class="col-lg-7 py-5 mt-lg-3">
          <div class="row">
            <div class="col-12 col-lg-10 offset-lg-1 text-black">
              <h1 class="display-4 my-4">Hello,<br />I'am Reza Kurnia <br />Web & Apps Developer</h1>
              <a href="#" class="btn btn-brand">Download CV</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img src="../assets/img/about.png" alt="">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="intro">
            <h1>About</h1>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8">
          <div class="team-member">
            <div class="image">
              <img src="../assets/img/reza.jpg" alt="">
              <div class="social-icons">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>
                <a href="#"><i class='bx bxl-instagram'></i></a>
                <a href="#"><i class='bx bxl-pinterest'></i></a>
              </div>
              <div class="overlay"></div>
            </div>

            <h5>Reza Kurnia Setiawan</h5>
            <p>Jombang , Jawa Timur</p>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6 col-md-8">
          <div class="pt-lg-4 ">
            <h3>I am Reza Kurnia Setiawan</h3>
            <p class="mx-auto">I born in Jombang on November 14, 2000. I am 21
              years old. Now I'm studying at the State University of Surabaya majoring in Manajemen
              Informatika. My habit is facing the computer to write several programs. I like to learn new
              things about the computer world. Not only computers, I am also interested in science and
              knowledge in this world.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="intro">
            <h1>Skills</h1>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Flutter</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Dart</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>C#</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Laravel</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>PHP</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Unity</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>SQL</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Postman</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service">
            <h5>Rest API</h5>
          </div>
        </div>
      </div>
      <div class="container mt-lg-5">
            <div class="row text-center justify-content-center gy-4">
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">40+</h1>
                    <p class="mb-0">Happy Clients</p>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <h1 class="display-4">67+</h1>
                    <p class="mb-0">Repositories</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }

}
</script>

<style >

</style>