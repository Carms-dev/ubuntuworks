<template>
  <div class="row">
    <div class="col-md-12">
      <p>{{ report.report_id }}</p>
      <p>{{ report.event.name }}</p>
      <p>{{ report.event.type }}</p>
      <p>{{ report.event.mode }}</p>
      <!-- TODO: Add Auth -->
      <!-- TODO: Add Update & Delete -->
      <!-- <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">
              Edit
            </router-link>
            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button> -->
    </div>
  </div>
</template>


<script>
import db from "../firebaseDb";

export default {
  data() {
    return {
      report: {},
    };
  },
  created() {
    db.collection("reports")
      .doc(this.$route.params.report_id)
      .get()
      .then((snapshot) => {
        this.report = {
          ...snapshot.data(),
          report_id: this.$route.params.report_id,
        };
      });
  },
  methods: {
    // deleteUser(id){
    //   if (window.confirm("Do you really want to delete?")) {
    //     db.collection("users").doc(id).delete().then(() => {
    //         console.log("Document deleted!");
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    //   }
    // }
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>
