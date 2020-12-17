import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [
      {
        nickname: 'Doris',
        make: 'Honda',
        model: 'Odyssey',
        year: '2000',
        color: 'Green',
        licensePlate: '843AYX',
        maintenance: false
      },
      {
        nickname: 'Claire',
        make: 'Honda',
        model: 'CR-V',
        year: '2013',
        color: 'Brown',
        licensePlate: '226WLW',
        maintenance: false
      },
      {
        nickname: 'Carmen',
        make: 'Honda',
        model: 'CR-V',
        year: '2016',
        color: 'Maroon',
        licensePlate: '579RSC',
        maintenance: false
      }
    ],
    mileageData: [
      {
        date: '1/31/2020',
        nickname: 'Doris',
        licensePlate: '843AYX',
        mileage: '266,435'
      },
      {
        date: '1/31/2020',
        nickname: 'Claire',
        licensePlate: '226WLW',
        mileage: '64,246'
      },
      {
        date: '1/31/2020',
        nickname: 'Carmen',
        licensePlate: '579RSC',
        mileage: '43,267'
      },
      {
        date: '2/28/2020',
        nickname: 'Doris',
        licensePlate: '843AYX',
        mileage: '274,786'
      },
      {
        date: '2/28/2020',
        nickname: 'Claire',
        licensePlate: '226WLW',
        mileage: '68,862'
      },
      {
        date: '2/28/2020',
        nickname: 'Carmen',
        licensePlate: '579RSC',
        mileage: '47,892'
      },
      {
        date: '3/31/2020',
        nickname: 'Doris',
        licensePlate: '843AYX',
        mileage: '280,549'
      },
      {
        date: '3/31/2020',
        nickname: 'Claire',
        licensePlate: '226WLW',
        mileage: '70,267'
      },
      {
        date: '3/31/2020',
        nickname: 'Carmen',
        licensePlate: '579RSC',
        mileage: '48,342'
      }
    ],
    repairsData: [
      {
        date: '1/13/2020',
        nickname: 'Doris',
        typeOfRepair: 'Catalytic Converter',
        totalCost: 945.02,
        repairedBy: 'Victory Honda',
        description: 'Catalytic Converter broke.'
      },
      {
        date: '1/20/2020',
        nickname: 'Claire',
        typeOfRepair: 'Windshield Wipers',
        totalCost: 31.26,
        repairedBy: 'Shaker Auto',
        description: 'Windshield Wipers broke in the cold temps.'
      },
      {
        date: '1/28/2020',
        nickname: 'Doris',
        typeOfRepair: 'Door Handle',
        totalCost: 302.41,
        repairedBy: 'Shaker Auto',
        description: 'Door handle broke off in cold. Door had to be taken apart to fix.'
      },
      {
        date: '2/15/2020',
        nickname: 'Carmen',
        typeOfRepair: 'Oil Change and Checkup',
        totalCost: 67.34,
        repairedBy: 'Victory Honda',
        description: 'Standard checkup.'
      },
      {
        date: '3/21/2020',
        nickname: 'Carmen',
        typeOfRepair: 'Brakes',
        totalCost: 494.00,
        repairedBy: 'Shaker Auto',
        description: 'All brakes replaced'
      }
    ]
  },
  mutations: {
    TOGGLE_MAINTENANCE (state, licensePlate) {
      const car = state.cars.find(c => c.licensePlate === licensePlate)
      if (car) {
        car.maintenance = !car.maintenance
      }
    },
    ADD_NEW_CAR (state, newCar) {
      state.cars.push(newCar)
    },
    ADD_NEW_MILEAGE (state, mileageLog) {
      state.mileageData.push(mileageLog)
    },
    ADD_NEW_REPAIR (state, repairLog) {
      state.repairsData.push(repairLog)
    }
  },
  actions: {
  },
  modules: {
  },
  strict: true
})
