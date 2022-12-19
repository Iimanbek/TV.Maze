<template>
    <header>
        <navigation></navigation>
    </header>
    <main>
        <h1>Welcome to my web page</h1>
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus velit tenetur a enim animi neque blanditiis. Reprehenderit vel veritatis eveniet consequatur perferendis enim aperiam illum suscipit consequuntur molestiae! Sequi, consequuntur!</p>
        </div>
    </main>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    data() {
        return{

        }
    },
    components: {
        navigation: Nav
    }
}

</script>

<style scoped>
    h1{
        text-align: center;
    }
</style>