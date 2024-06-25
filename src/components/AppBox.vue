<template>
  <div class="box">

    <div id="editmenue" v-if="isBoxVisible">
      <div class="center">
        <input placeholder="name" type="name" class="input" v-model="nameinp">
      </div>
      <div class="center">
        <input placeholder="url" type="name" class="input" v-model="urlinp">
      </div>
      <div id="boxdel" class="center">
        <h2 class="h2">delete box?</h2>
        <input class="checkbox" placeholder="box löschen?" checked="" type="checkbox" v-model="isChecked">

      </div>

      <div class="center">
        <button @click="changesettings" class="btn">Fetig</button>
      </div>
    </div>


    <div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
    <img id="img" :src="favurl" alt="Wrong URL">
  </div>
  <span> {{ name }}</span>
  <a :href="formattedUrl()" class="job"> gehe zu {{ name }}</a>
  <button @click="edit"> Edit
  </button>
</div>




  </div>
</template>
<style scoped>
#img{
  width: 50px;
  height: 50px;
}
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
#boxdel{
  margin-top: 20px;
}

.card {
 width: 200px;
 height: 300px;
 background: #3405a3;
 border-radius: 15px;
 box-shadow: 1px 5px 60px 0px #100a886b;
 font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.card .card-border-top {
 width: 60%;
 height: 3%;
 background: #6b64f3;
 margin: auto;
 border-radius: 0px 0px 15px 15px;
}

.card span {
 font-weight: 600;
 color: white;
 text-align: center;
 display: block;
 padding-top: 10px;
 font-size: 16px;
}

.card .job {
 font-weight: 400;
 color: white;
 display: block;
 text-align: center;
 padding-top: 3px;
 font-size: 12px;
}

.card .img {
 width: 70px;
 height: 80px;
 background: #6b64f3;
 border-radius: 15px;
 margin: auto;
 margin-top: 25px;
}

.card button {
 padding: 8px 25px;
 display: block;
 margin: auto;
 border-radius: 8px;
 border: none;
 margin-top: 30px;
 background: #6b64f3;
 color: white;
 font-weight: 600;
}

.card button:hover {
 background: #534bf3;
}


.outh1{
  width: 200px;
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: green;
}
.outa{
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 70px;
}

h1 {
  color: white;
}

a {
  color: white;
}


#editmenue {
  position: fixed;
  width: 200px;
  height: 300px;
  background-color: #3405a3;
  border-radius: 20px;
}

.btn {
  margin-top: 20px;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: #6b64f3;
  color: white;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  margin: 50px;
  text-decoration: none;
  font-family: sans-serif;
}

.btn:hover {
  background-color: #534bf3;
  box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
}

.input {
  margin-top: 20px;
  border: 2px solid transparent;
  width: 197px;
  height: 2.5em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
}
.center{
  width: 200px;
  display: flex;
  justify-content: center;
}

.input:hover,
.input:focus {
  border: 2px solid #4A9DEC;
  box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
  background-color: white;
}

.checkbox {
  width: 25px;
  height: 25px;
}

.h2 {
  color: white;
  font-family: sans-serif;
  margin-right: 5px;
}
</style>

<script>


export default {
  name: 'AppBoxComponent',
  props: {
    boxnum: {
      type: String, // or whatever type you expect boxnum to be
      required: true
  },
    name: {
      type: String,
      required: true,
      
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isBoxVisible: false,
      isChecked: false,
      boxes: [],
      urlinp: '',
      nameinp: '',
      favurl: '',
    }
  },
  mounted() {
    try {
        let url = new URL(this.url);
        url.pathname = '/favicon.ico';
        url.search = '';
        url.hash = '';
        this.favurl=  url.toString();
        return this.favurl;
      } catch (error) {
        console.error('Invalid URL:', error);
        return this.favurl = `https://${this.url}/favicon.ico`;
      }
    },
  methods: {
    formattedUrl() {
      if (!/^https?:\/\//.test(this.url)) {
        return 'https://' + this.url;
      }
      return this.url;
    },
    edit() {
      this.isBoxVisible = true
      console.log('boxnum ' + this.boxnum)
    },
    changesettings() {
      this.isBoxVisible = false
      if (this.nameinp != '') {
        this.boxes = localStorage.getItem('boxes').split(',');
        this.boxes.splice(this.boxnum, 1, this.nameinp);
        localStorage.setItem('boxes', this.boxes)
        location.reload()
      }
      if (this.urlinp != '') {
        this.urls = localStorage.getItem('urls').split(',');
        this.urls.splice(this.boxnum, 1, this.urlinp);
        localStorage.setItem('urls', this.urls)
        location.reload()
      }
      if (this.isChecked === true) {
        this.boxes = localStorage.getItem('boxes').split(',');
        this.urls = localStorage.getItem('urls').split(',');
        this.boxes.splice(this.boxnum, 1);
        this.urls.splice(this.boxnum, 1);
        localStorage.setItem('boxes', this.boxes)
        localStorage.setItem('urls', this.urls)
        location.reload();
      }
    }
  }
}

</script>