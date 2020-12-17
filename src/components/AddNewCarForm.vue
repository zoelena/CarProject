<template>
    <div>
        <form name="newcar" class="new-car-form" v-on:submit.prevent="addNewCar">
            <div class="form-element">
                <label for="nickname">Nickname: </label><br>
                <input type="text" id="nickname" class="form-control" v-model="newCar.nickname" required/>
            </div>
            <div class="form-element">
                <label for="make">Make: </label><br>
                <input type="text" id="make" class="form-control" v-model="newCar.make" />
            </div>
            <div class="form-element">
                <label for="model">Model: </label><br>
                <input type="text" id="model" class="form-control" v-model="newCar.model" />
            </div>
            <div class="form-element">
                <label for="year">Year: </label><br>
                <input type="year" id="year" class="form-control" v-model="newCar.year" />
            </div>
            <div class="form-element">
                <label for="color">Color: </label><br>
                <input type="text" id="color" class="form-control" v-model="newCar.color" />
            </div>
            <div class="form-element">
                <label for="licensePlate">License Plate: </label><br>
                <input type="text" id="licensePlate" class="form-control" v-model="newCar.licensePlate" />
            </div>
            <input type="submit" value="Save Car" class="car-button"/>
        </form>
    </div>
</template>

<script>
export default {
  name: 'AddNewCarForm',
  data () {
    return {
      newCar: {
        nickname: '',
        make: '',
        model: '',
        year: '',
        color: '',
        licensePlate: '',
        maintenance: false
      }
    }
  },
  methods: {
    addNewCar () {
      if (this.newCar) {
        this.$store.commit('ADD_NEW_CAR', this.newCar)
        this.resetCar()
      }
    },
    resetCar () {
      this.newCar = {}
    }
  }
}
</script>

<style>
textarea {
height: 150px;
width: 250px;
}

.form-control {
  width: 250px;
}

div {
text-align: center;
margin: 20px auto;
}

form {
display: inline-block;
}

.car-button {
display: inline-block;
justify-items: center;

}
</style>
