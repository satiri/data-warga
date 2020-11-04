<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import db from '@/firebase/init'
import Header from '@/components/layout/Header'
import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    Header,
    Home,
  },
  data () {
    return {
      warga: []
    }
  },
  created() {
    db.collection('warga').get()
    .then((snapshot) => {
      let wargaFromFirebase = [];
      snapshot.forEach(doc => {
        wargaFromFirebase.push(doc.data());
      });

      console.log(wargaFromFirebase);
      this.warga = wargaFromFirebase;
    })
    .catch((e) => {
      console.log('error', e);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
