<template>
  <main>

    <router-link to="/about">About</router-link>
    <div class="wrap-items">
      <cards :data="items"></cards>
    </div>
  </main>
</template>
<script>
import Cards from "@/components/Cards.vue";
export default {
  data() {
    return {
      items: null
    }
  },
  components: {
    cards: Cards,
  },
  methods: {
    async getData() {
      const response = await fetch('https://api.tvmaze.com/shows')
      const data = await response.json()
      this.items = await data.filter(item => item.id <= 50)
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

