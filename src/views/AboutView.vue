<template>
  <header>
    <navigation></navigation>
    <div class="filt">
      <button @click="filterP('Male')">Male</button>
      <button @click="filterP('Female')">Female</button>
      <button @click="filterL()">All</button>
    </div>    
  </header>
  <main>
    <div class="wrap-items" v-if="items">
      <cards :data="items"></cards>
    </div>
  </main>
</template>
<script>
import Cards from "@/components/Cards.vue";
export default {
  data() {
    return {
      items: null,
    }
  },
  components: {
    cards: Cards
  },
  methods: {
    async getData() {
      const response = await fetch('https://api.tvmaze.com/people')
      const data = await response.json()
      this.items = await data.filter(item => item.id <= 50)
    },
    async filterP(value) {
      await this.getData()
      this.items = await this.items.filter(item => item.gender === value)
    },
    async filterL() {
      await this.getData()
      this.items = await this.items.filter(item => item.gender)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="css">
.wrap-items {
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.filt{
  display: flex;
  justify-content: center;
}
.filt button{
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #008F7A;
  background: white;
  color: #008F7A;
}
.filt button:hover{
  background: #008F7A;
  color: white;
}
</style>
