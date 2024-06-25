<template>
<h1>Design</h1>
<div class="out"><p>Yes, the design is bad, but i dont have the money for some good illustrator tools like the creative cloud because i am only 15years old</p></div>
<h1 >🥲</h1>
<wave></wave>
</template>
<style scoped>
h1{
    color: white;
    font-size: 70px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}
p{
    color: white;
    text-align: center;
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 60%;
}
.out{
    margin-top: 50px;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
<script>
import wave from '@/components/Wave.vue';
export default {
    name: 'design',
    components: {
    wave
  }
}
</script>