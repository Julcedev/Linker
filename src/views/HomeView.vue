<template>
<header>
  <h1 id="logo">Linker</h1>
<nav id="nav">
<router-link to="/linker" class="links">panel</router-link>
<router-link to="/comp" class="links">components</router-link>
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


<wave></wave>

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
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}








</style>


<script>
// @ is an alias to /src

import wave from '@/components/Wave.vue'

export default {
  components: {
    wave
  }
}
</script>
