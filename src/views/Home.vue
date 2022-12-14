<script>
import SourceData from '@/data.json'
export default {
  data(){
    return{
      destinations: SourceData.destinations
    }
  }
}


</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params:{slug: destination.slug, id: destination.id}}">
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name">
    
    </router-link>

    </div>
   
  </div>
</template>
