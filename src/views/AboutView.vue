<template>
  <main>

    <router-link to="/">Home</router-link>
    <navigation></navigation>
    <div>
      <button @click="filterP('Male')">m</button>
      <button @click="filterP('Female')">g</button>
    </div>
    <div class="wrap-items" v-if="items">
      <cards :data="items"></cards>
    </div>
  </main>
</template>
<script>
import Cards from "@/components/Cards.vue";
import Nav from "../components/Nav.vue"
export default {
  data() {
    return {
      items: null,
      logon:'People'
    }
  },
  components: {
    cards: Cards,
    navigation: Nav
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

</style>
