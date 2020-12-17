<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <hr class="Horizontal-Line-2" />
    <h3>Your Cars</h3>
    <ul>
      <cars-container />
    </ul>
    <h3>Add A Car</h3>
      <add-new-car-form />
      <br>
      <div class="maintenance-container">
      <hr class="Horizontal-Line-2" />
      <maintenance />
      </div>
      <br>
      <hr class="Horizontal-Line-2" />
      <mileage />
      <br>
      <hr class="Horizontal-Line-2" />
    <h3>Useful Links</h3>
    <ul>
      <li><a href="https://www.google.com/search?safe=active&rlz=1C1CHBD_enUS883US883&sxsrf=ALeKk03JO3ileLSmt3sovKAvo5TpimKn5A%3A1607884232990&ei=yF3WX5bwO4TcsAXhu53ACQ&q=Car+parts+near+me&oq=Car+parts+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6BQgAEJECOgcIABCxAxBDOgUIABCxAzoCCC46CAguELEDEIMBOgsILhCxAxDHARCjAjoICAAQsQMQkQI6BwgAEBQQhwI6DgguELEDEIMBEMcBEKMCOggIABCxAxCDAToHCAAQsQMQCjoECAAQCjoGCAAQChADOgcIABDJAxAKOggILhDHARCjAjoECAAQA1D3QFi3eWDEe2gHcAF4AIABogGIAaEUkgEENi4xN5gBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=psy-ab&ved=0ahUKEwiW9K_Ey8vtAhUELqwKHeFdB5gQ4dUDCA0&uact=5" target="_blank" rel="noopener">Search for Car Parts Near You</a></li>
      <li><a href="https://www.google.com/search?safe=active&rlz=1C1CHBD_enUS883US883&sxsrf=ALeKk02ran_hcftIk_SNtZN3ITrebSQYZA%3A1607884292336&ei=BF7WX-KGFMqQsAWF8ZewBw&q=mechanic+near+me&oq=mechanic+near+me&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzICCAAyBwgAEBQQhwIyBwgAEBQQhwIyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgjECc6CwguELEDEMcBEKMCOg4ILhCxAxCDARDHARCjAjoFCAAQsQM6CAguEMcBEKMCOggIABCxAxCDAToECC4QQzoECAAQQzoNCC4QsQMQxwEQowIQQzoICAAQsQMQkQI6BwguELEDEEM6BQguELEDUL61BFirxgRg7scEaABwBHgAgAGPAYgB9QySAQM5LjeYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjimNbgy8vtAhVKCKwKHYX4BXYQ4dUDCA0&uact=5" target="_blank" rel="noopener">Search For Mechanic Near You</a></li>
      <li><a href="https://www.google.com/search?safe=active&rlz=1C1CHBD_enUS883US883&sxsrf=ALeKk03_sP809KSLZwfnoPaBm5A7xhow5A%3A1607884368662&ei=UF7WX-X7J9DisAXD9onQCw&q=dealerships+near+me&oq=dealerships+near+me&gs_lcp=CgZwc3ktYWIQAzIICAAQsQMQyQMyBQgAEJIDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgjECc6BQgAELEDOggILhCxAxCDAToOCC4QsQMQgwEQxwEQowI6CwguELEDEMcBEKMCOg0ILhDHARCjAhAnEJMCOgoILhDHARCjAhAnOgoILhCxAxCDARBDOgQIABBDOgcIABCxAxBDOgoIABCxAxDJAxBDOgcILhCxAxBDOgcIABAUEIcCUOf2AlijjANgn40DaABwBXgAgAGeAYgB6g-SAQQxMS44mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjl44iFzMvtAhVQMawKHUN7AroQ4dUDCA0&uact=5" target="_blank" rel="noopener">Search For Dealerships Near You</a></li>
      <li><a href="https://www.google.com/search?safe=active&rlz=1C1CHBD_enUS883US883&sxsrf=ALeKk03njOK16UDtY5hAbaxfe0aD83fYJw%3A1607884712830&ei=qF_WX7f5MdC4sQW24pfQCA&q=tire+repair+near+me&oq=tire+repair+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEEM6BQgAEJECOgsILhDHARCvARCRAjoOCC4QsQMQgwEQxwEQowI6CAguELEDEIMBOgcIABCxAxBDOgUIABCxAzoKCAAQsQMQFBCHAjoFCC4QsQM6CwguELEDEMcBEKMCOggILhDHARCjAjoICC4QxwEQrwE6CggAEMkDEBQQhwI6BwgAEBQQhwJQ3B5Y9DJg3zNoAHABeACAAZABiAH0DpIBBDEwLjmYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwi37ZapzcvtAhVQXKwKHTbxBYoQ4dUDCA0&uact=5" target="_blank" rel="noopener">Tire Repair Near You</a></li>
      <li><a href="https://www.google.com/search?safe=active&rlz=1C1CHBD_enUS883US883&sxsrf=ALeKk000XC4tZcI-KJJrRVgmSoVUzngaPw%3A1607884805359&ei=BWDWX6m_FcmOtQXam5vIAg&q=car+windshield+repair+near+me&oq=car+windshield+repair+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB46BAgAEEc6BwgjELACECc6BAgAEA06CAgAEAgQBxAeOggIABAHEAUQHlD7Dlj-JGDFJ2gBcAJ4AIABb4gB_waSAQM1LjSYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjp1abVzcvtAhVJR60KHdrNBikQ4dUDCA0&uact=5" target="_blank" rel="noopener">Windshield Repair Near You</a></li>
      <li><a href="https://www.kbb.com/?&psid=20003&siomid=77vKRwBE_dc|439240646531|kelly%20blue%20book|e|26285ajd51861|prgrid|105599840601|ptaid|kwd-14391031|&segment=&enhancedvs=&gclid=CjwKCAiAlNf-BRB_EiwA2osbxSyahT2dHGlItYZHVDIN3Eqjp-2xBzDezqBTXDCWwL5b0NCHEgYFJhoCbIMQAvD_BwE" target="_blank" rel="noopener">Kelly Blue Book</a></li>
      <li><a href="https://www.carfax.com/" target="_blank" rel="noopener">Search CARFAX For a New Used Car</a></li>
    </ul>
  </div>
</template>

<script>
import CarsContainer from '../components/CarsContainer.vue'
import AddNewCarForm from '../components/AddNewCarForm.vue'
import Maintenance from '../components/Maintenance.vue'
import Mileage from '../components/Mileage.vue'

export default {
  name: 'CarsHome',
  components: {
    CarsContainer,
    AddNewCarForm,
    Maintenance,
    Mileage
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  font-family: 'Monoton', cursive;
  font-size: 1.75em;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
}
li {
  display: inline-block;
  margin: 0 15px;
  margin-bottom: 30px;
}

.Horizontal-Line-2 {
  display: block;
  height: 1px;
  border: 0;
  border-top: 5px solid rgb(185, 64, 16);
  margin: 0;
  margin-top: 15px;
  margin-bottom: 1px;
  margin-left: -15px;
  padding: 0;
}
</style>
