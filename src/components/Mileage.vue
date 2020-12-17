<template>
<Main>
    <div>
      <h3 id="mileage">Mileage Record</h3>
    <div id="mileage-table">
    <!-- <button v-on:click="getAllRepairs()">Open Repairs Table</button> -->
    <table>
      <tr>
        <th>Date</th>
        <th>Nickname</th>
        <th>License Plate</th>
        <th>Mileage</th>
      </tr>
      <!-- v-bind:repair="repair" v-for="repair in listofRepairs" v-bind:key="repair.repairId" -->
      <tr >
        <td>{{ mileageLog.date }}</td>
        <td>{{ mileageLog.nickname }}</td>
        <td>{{ mileageLog.licensePlate }}</td>
        <td>{{ mileageLog.mileage }}</td>
      </tr>

      <!-- <div class="repair-buttons">
        <button class="button" v-on:click="editRepair(repair.repairId)">
          Edit Repair
        </button> -->
        <!--check this-->
        <!-- <span> </span>
        <button class="button" v-on:click="deleteRepair(repair.repairId)">
          Delete Repair
        </button> -->
        <!--check this-->
      <!-- </div> -->
      <!-- <button v-on:click="getAddRepairForm()" class="Form-Button">Open To Add New Repair</button> -->
      <!-- <repairs/ > -->
    </table>
  </div>
      <div class="add-mileage">
        <!-- <button v-on:click.prevent="showForm = true" v-show="!showForm" class="Form-Button">Record New Mileage</button> -->
        <form name="newMileage" class="new-mileage-form" v-on:submit.prevent="addNewMileage">
          <h3>Add New Mileage</h3>
          <div class="form-element">
                <label for="date">Date: </label><br>
                <input type="date" id="date" class="form-control" v-model="mileageLog.date" />
          </div>
          <div class="form-element">
                <label for="nicknamecar">Nickname: </label><br>
                <input type="text" id="nicknamecar" class="form-control" v-model="mileageLog.nickname" />
          </div>
          <div class="form-element">
                <label for="licensePlateCar">License Plate: </label><br>
                <input type="text" id="licensePlateCar" class="form-control" v-model="mileageLog.licensePlate" />
          </div>
          <div class="form-element">
                <label for="mileage">Mileage: </label><br>
                <input type="text" id="mileage" class="form-control" v-model="mileageLog.mileage" />
          </div>
          <input type="submit" value="Save Mileage" class="car-button"/>

          <!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="addNewRepair(newRepair)"
            @submit.prevent="addNewRepair"
          >Add Mileage</button>
          <button type="button" @click="clearForm">Cancel</button> -->
        </form>
      </div>
    </div>
</Main>
</template>

<script>
export default {
  name: 'Mileage',
  data () {
    // fullMileageLog: []
    return {
      showForm: false,
      mileageLog: {
        date: '',
        nickname: '',
        licensePlate: '',
        mileage: ''
      }
    }
  },
  methods: {
    addNewMileage () {
      if (this.mileageLog) {
        this.$store.commit('ADD_NEW_MILEAGE', this.mileageLog)
        this.resetForm()
      }
    },
    resetForm () {
      this.mileageLog = {}
    }
  },
  computed: {
    date: {
      get () {
        return this.$store.state.form.date
      },
      set (value) {
        this.$store.commit('updateDate', value)
      }
    }
  }
}
</script>

<style>
.car-button {
  width: 120px;
  height: 30px;
  font-size: 18px;
  display: inline-block;
  margin-top: 10px;
  justify-items: center;

}
.form-control {
  width: 250px;
}

table, th, td {
  border: 1px solid rgb(64, 65, 66);
  text-align: center;
}

th {
  height: 70px;
  background-color: #e9c46a;
  color: #222221;
}

td {
  text-align: center;
  height: 50px;
}

th, td {
  padding: 15px;
  text-align: center;
}
table {
border-collapse: collapse;
width: 80%;
margin-left: auto;
margin-right: auto;
border: 3px solid rgb(64, 65, 66);
border-radius: 10px;
background-color:rgb(222, 231, 231);
}

form {
position: relative;
justify-self: center;
justify-content: space-between;
}

</style>
