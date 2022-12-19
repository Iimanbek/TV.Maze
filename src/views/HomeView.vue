<template>
  <navigation @CustomEventInputChanged="doSomething"></navigation>
  <main>
    <select>
      <option  value="all">-select the genre-</option>
      <option  value="Romance">Romance</option>
      <option  value="Drama">Drama</option>
      <option  value="Science-Fiction">Science-Fiction</option>
      <option  value="Thriller">Thriller</option>
      <option  value="Action">Action</option>
      <option  value="Crime">Crime</option>
      <option  value="Horror">Horror</option>
      <option  value="Mystery">Mystery</option>
      <option  value="Adventure">Adventure</option>
      <option  value="History">History</option>
      <option  value="War">War</option>
    </select>
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
      items: null,
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
      // console.log(this.items);
    },
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="css">
.wrap-items {
  gap: 20px;
  padding: 30px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>

