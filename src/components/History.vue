<template>
    <div class="history">
        <ul>
            <li v-for="(bill, index) in bills" :key="index">
                <h3>{{ bill.data }}</h3>
                <div v-for="(b, index) in bill.bill" :key="index">
                    <div class="info" v-for="(a, index) in b" :key="index">
<!--                        {{ a.name }} {{ a.price }}-->
                        {{a}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  import db from '../fb.js';
  import moment from "moment";
  import {dollars} from '../filters.js';

  export default {
    name: "History",
    data() {
      return {
        bills: []
      }
    },
    filters: {
      formatTime(value) {
        return moment(value).format('MMMM Do, h:mm');
      },
      dollars
    },
    created() {
      db.collection("history")
        .get()
        .then(querySnapshot => {
          this.bills = querySnapshot.docs.map(doc => doc.data());
          console.log(this.bills);

        });
    }
  }
</script>

<style lang="scss">

</style>