<template>
<div class="item">
    <div>
    <img :src="image" alt="">
    </div>
    <p>{{ title }}</p>
</div>
</template>
<script>
export default {
props: {
    title: {
    type: String,
    default: ''
    },
    image: {
    type: String,
    default: ''
    }
}
}
</script>