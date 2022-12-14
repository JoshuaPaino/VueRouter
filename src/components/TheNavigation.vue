<template >
   
   <div id="nav">
    <router-link to="/" id="logo">Travel</router-link>
    <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params:{slug: destination.slug, id: destination.id}}">
      {{destination.name}}
    </router-link>
 
</div>

</template>
<script>
import SourceData from '@/data.json'
export default{
    data(){
        return {
            destinations: SourceData.destinations
        }
    }
}

</script>
<style lang="css">
#nav .vActiveLink{
    color:red;
    border-bottom: 2px solid red;
}
    
</style>