<template>
    <nav>
        <div class="wrapper-nav">
            <h2 @click="reloadPage">TV.Maze</h2>
            <div class="rouuut">
            <router-link to="/">Home</router-link>
            <router-link to="/about">Stars</router-link>
            <router-link to="/movie">Movies</router-link>
            </div>
            <div>
                <input type="text" v-model="searchTerm" placeholder="...search">
                <select v-model="searchType">
                    <option value="shows">Movie</option>
                    <option value="people">People</option>
                </select>
                <button @click="search">search</button>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            searchTerm:'',
            searchType: 'shows'
        }
    },
    // props:{
    //     items: {
    //         type:Array,
    //         default: []
    //     }
    // },
    methods: {
        reloadPage() {
        // window.location.reload()
        },
        search() {
            this.$router.push({
                path:`/search`, 
                query: { q: this.searchTerm, type: this.searchType }})
        },
        
    },
    mounted(){

    },
    
}
</script>

<style scoped>
h2{
    color: white ;
    cursor: pointer;
}
nav{
    background: #008F7A;
}
.wrapper-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
}
.rouuut{
    display: flex;
    justify-content: space-between;
    width: 200px;
}
.rouuut a {
    font-size: 18px;
    font-weight: 500;
    color: white ;
    text-decoration: none ;
    animation: 0.5s linear;
}
.rouuut a:hover{
    text-decoration: underline;
}
</style>