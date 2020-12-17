<template>
    <div class="carCard" v-bind:class="{maintenance: car.maintenance}">
        <br>
        <img src="https://cars.usnews.com/static/images/Auto/izmo/355192/2013_honda_cr_v_angularfront.jpg" />
        <h2 class="car-name">Nickname: {{car.nickname}}</h2>
        <h2 class="car-make">Make: {{car.make}}</h2>
        <h2 class="car-model">Model: {{car.model}}</h2>
        <h2 class="car-year">Year: {{car.year}}</h2>
        <h2 class="car-color">Color: {{car.color}}</h2>
        <h2 class="car-licensePlate">License Plate: {{car.licensePlate}}</h2>
        <!-- <img v-if="car.make && car.model && car.year" v-bind:src="'https://www.autobytel.com/' + car.make + '/' + car.model + '/' + car.year" /> -->
        <!-- <button class="buttons" v-bind:value="car.maintenance ? 'Need Maintenance Yes' : 'Need Maintenance No'" v-bind:class="{'need-maintenance-no': !car.maintenance, 'need-maintenance-yes': car.maintenance}">Need Maintenance? Yes</button> -->
        <h2>Needs Maintenance? <input type="checkbox" id="maintenanceCheckbox" check="unchecked" /></h2>
        <!-- <button class="buttons" @click="goToMileage()">Go To Mileage</button>
        <button class="buttons" @click="goToRepairs()">Go To Maintenance</button> -->
        <div class="button-div">
        <button class="buttons"><a href="#repair">Go To Maintenance</a></button>
        <button class="buttons"><a href="#mileage">Go To Mileage</a></button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'each-car',
  props: {
    car: Object
  },
  methods: {
    toggleMaintenance () {
      this.$store.commit('TOGGLE_MAINTENANCE', this.car.licensePlate)
    }
    // goToRepairs () {
    //   this.$router.push('/repairs').catch(() => {})
    // },
    // goToMileage () {
    //   this.$router.push('/mileage').catch(() => {})
    // }
  }
}
</script>

<style>
img {
display: block;
margin-left: auto;
margin-right: auto;
max-width: 70%;
height: auto;
border: 3px solid rgb(64, 65, 66);
}

h2 {
text-align: center;
font-size: 24px;
}

h3 {
text-align: center;
font-size: 20px;
}

.button-div {
margin-top: 0px;
margin-bottom: 10px;
}

.buttons {
display: block;
justify-content: center;
align-items: center;
margin: 3px auto;
margin-bottom: 8px;
padding: 3px 3px 3px 3px;
font-size: 18px;
height: 35px;
width: 180px;
}

.carCard {
border: 3px solid rgb(64, 65, 66);
border-radius: 10px;
width: 370px;
height: 715px;
margin: 20px;
background-color: rgb(222, 231, 231);
}

/* .carCard .car-name {
font-size: 1.5em;
}

.carCard .car-info {
font-size: 1em;
} */
</style>
