<template>  
<card v-for="item in data"
          :title="item?.name"
          :image="item?.image?.medium">
</card>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
props: {
    data: {
    type: Array,
    default: []
    }
},
components: {
    Card
}
}
</script>
<style lang="css">
.item {
width: 200px;
margin-bottom: 20px;
}
</style>