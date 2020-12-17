<template>
    <div class="car-container">
        <each-car v-for="c in $store.state.cars" v-bind:key="c.licensePlate" v-bind:car="c"/>
    </div>
</template>

<script>
import EachCar from '../components/EachCar.vue'

export default {
  name: 'cars',
  components: {
    EachCar
  }
}
</script>

<style>
.car-container {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
