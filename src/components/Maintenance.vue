<template>
<Main>
    <div>
      <h3 id="repair">Repairs & Maintenance Record</h3>
    <div id="repair-table">
    <!-- <button v-on:click="getAllRepairs()">Open Repairs Table</button> -->
    <table>
      <tr>
        <th>Date</th>
        <th>Nickname</th>
        <th>Type of Repair</th>
        <th>Total Cost</th>
        <th>Repaired By</th>
        <th>Description</th>
      </tr>
      <!-- v-bind:repair="repair" v-for="repair in listofRepairs" v-bind:key="repair.repairId" -->
      <tr >
        <td>{{ repairLog.date }}</td>
        <td>{{ repairLog.nickname }}</td>
        <td>{{ repairLog.typeOfRepair }}</td>
        <td>{{ repairLog.totalCost }}</td>
        <td>{{ repairLog.repairedBy }}</td>
        <td>{{ repairLog.description }}</td>
      </tr>
    </table>
  </div>
      <div class="add-repair">
        <!-- <button v-on:click.prevent="showForm = true" v-show="!showForm" class="Form-Button">Record A New Repair</button> -->
        <form name="newRepair" class="new-repair-form" v-on:submit.prevent="addNewRepair">
          <h3>Add New Repair</h3>
          <div class="form-element">
                <label for="date">Date: </label><br>
                <input type="date" id="date" class="form-control" v-model="repairLog.date" />
          </div>
          <div class="form-element">
                <label for="nickname">Nickname: </label><br>
                <input type="text" id="nickname" class="form-control" v-model="repairLog.nickname" />
          </div>
          <div class="form-element">
                <label for="typeOfRepair">Type of Repair: </label><br>
                <input type="text" id="typeOfRepair" class="form-control" v-model="repairLog.typeOfRepair" />
          </div>
          <div class="form-element">
                <label for="cost">Total Cost: </label><br>
                <input type="text" id="cost" class="form-control" v-model="repairLog.totalCost" />
          </div>
          <div class="form-element">
                <label for="repairedBy">Repaired By: </label><br>
                <input type="text" id="repairedBy" class="form-control" v-model="repairLog.repairedBy" />
          </div>
          <div class="form-element">
                <label for="description">Description: </label><br>
                <textarea id="description" class="form-control" v-model="repairLog.description" />
          </div>
          <input type="submit" value="Save Repair" class="car-button"/>
          <!-- <button class="btn btn-lg btn-primary btn-block" type="submit" @click="addNewRepair()"
            @submit.prevent="addNewRepair"
          >Add Repair</button> -->
          <!-- <button type="button" @click="clearForm">Cancel</button> -->
        </form>
      </div>
    </div>
</Main>
</template>

<script>
export default {
  name: 'Repairs',
  data () {
    return {
      showForm: false,
      repairLog: {
        date: '',
        nickname: '',
        typeOfRepair: '',
        totalCost: '',
        repairedBy: '',
        description: ''
      }
    }
  },
  methods: {
    addNewRepair () {
      if (this.repairLog) {
        this.$store.commit('ADD_NEW_REPAIR', this.repairLog)
        this.resetRepair()
      }
    },
    resetRepair () {
      this.repairLog = {}
      this.showForm = false
    }
  }
}
</script>

<style>
textarea {
  height: 150px;
  width: 250px;
  margin-top: 10px;
}

.form-control {
  width: 250px;
}

h3 {
  margin: 40px 0 0;
  font-family: 'Monoton', cursive;
  font-size: 1.75em;
}
table, th, td {
  border: 1px solid rgb(111, 113, 114);
  text-align: center;
}

th {
  height: 40px;
  /* color: white; */
}

td {
  text-align: center;
  height: 40px;
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

.car-button {
width: 120px;
height: 30px;
font-size: 18px;
display: inline-block;
margin-top: 10px;
justify-items: center;
}

</style>
