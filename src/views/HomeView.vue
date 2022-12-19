<template>
  <navigation></navigation>
  <main>
    <select class="selel" @change="filtera($event)">
      <option v-for="option in options" :value="option.value">{{ option.text }}</option>
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
      selectedOption: '',
       options: [
        { text: 'all', value: 'all' },
        { text: 'Romance', value: 'Romance' },
        { text: 'Drama', value: 'Drama' },
        { text: 'Science', value: 'Science' },
        { text: 'Thriller', value: 'Thriller' },
        { text: 'Action', value: 'Action' },
        { text: 'Crime', value: 'Crime' },
        { text: 'Horror', value: 'Horror' },
        { text: 'Mystery', value: 'Mystery' },
        { text: 'History', value: 'History' },
        { text: 'War', value: 'War' },
        { text: 'Adventure', value: 'Adventure' }
      ]
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
    },
    async filtera(event) {
      let value1 = event.target.value
      console.log(value1);
      await this.getData()
      this.items = this.items.filter((item) => {
      return item.genres.includes(value1);
      });
      console.log(this.items);
    },
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="css">
.selel{
  text-align: center;
  display: flex;
  margin-left: 45%;
}
.wrap-items {
  gap: 20px;
  padding: 30px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>

