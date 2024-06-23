<template>
<header>
  <h1 id="logo">Linker</h1>
<nav id="nav">
<router-link to="/linker" class="links">panel</router-link>
<router-link to="/about" class="links">about</router-link>
<router-link to="/design" class="links">bad design?</router-link>
</nav>
</header>
<div id="main">
  <div id="outh1">
    <h1 id="mainh1">link to everywhere</h1>
  </div>
    <div id="outbtn">
<router-link to="/linker" id="mainbtn">Start</router-link>	
    </div>
</div>
<div id="main-infos-out">
  <div id="main-infos">
    <div class="center">
      <h1 id="main-infos-h1">Do you know this problem?</h1>
    </div>
    <div class="center">
    <img id="img1" src="../assets/full.png" alt="">
  </div>
  </div>

</div>



<footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">panel</a></li>
      <li class="menu__item"><a class="menu__link" href="#">bad design?</a></li>
      <li class="menu__item"><a class="menu__link" href="#">components</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  background-color: black;
}
footer{
  border-top: 2px solid gray;
  
}
#main-infos-out{
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main-infos{
  width: 80%;
  background-color: rgb(20, 20, 20);
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 19px 15px rgba(25,96,255,0.84); 
  box-shadow: 0px 0px 19px 15px rgba(25,96,255,0.84);
}
#main-infos-h1{
font-size: 70px;
margin-top: 20px;
text-align: center;
}
.center{
  display: flex;
  justify-content: center;
  background-color: transparent;
}
#img1{
  width: 90%;
  border-radius: 20px;
  margin-top: 40px;
  height: auto;
  margin-bottom: 20px;
}

h1{
  color: white;
  background-color: transparent;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#logo{
color: white;
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box{
  width: 100px;
  height: 100px;
}
#nav{
  display: flex;
  justify-content: center;
  align-items: center;
}
.links{
  color: white;
  margin: 20px;
  text-decoration: none;
  font-family: sans-serif;
}
.links:hover{
  text-decoration: underline;
}
#main{
width: 100%;
height: 70vh;
margin-top: 200px;
}
#mainh1{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 100px;
  text-align: center;
}
#outh1{
width: 100%;
display: flex;
justify-content: center;
}
#outbtn{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#mainbtn{

  display: inline-block;
                outline: 0;
                cursor: pointer;
                border: none;
                padding: 0 56px;
                height: 45px;
                line-height: 45px;
                border-radius: 7px;
                background-color: #0070f3;
                color: white;
                font-weight: 400;
                font-size: 16px;
                box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
                transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;  
                margin: 50px;    
                text-decoration: none;    
                font-family: san;   
}
#mainbtn:hover{
                  background: rgba(0,118,255,0.9);
                  box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
              }







              @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}



.footer {
  margin-top: 400px;
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
  background-color: transparent;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}





</style>


<script>
// @ is an alias to /src



export default {
  components: {
    
  }
}
</script>
