<template>
    <navigation></navigation>
    <div class="wrap-items" v-if="result" >
        <Cards :data="result" ></Cards>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import Cards from "@/components/Cards.vue";
export default{
    components: {
        navigation: Nav,
        Cards
    },
    data() {
        return {
            result:null,    
            status: false
        }
    },
    methods: {
        async search(){
            this.status = false 
            const response = await fetch(`https://api.tvmaze.com/search/${this.$route.query.type}?q=${this.$route.query.q}`)
            const data = await response.json()
            // if (this.$route.query.type === 'shows   ') {
                this.result = data.map(item => ({
                ...item.show
            }))    
            // }else {
            //     this.result = data.map(item => ({
            //     ...item.person
            // }))
            // }
            this.status = true 
            
        }
    },
    mounted() {
        this.status = false 
        this.search()
    }

}
</script>