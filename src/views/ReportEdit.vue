<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update Report</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Event Name</label>
          <input
            type="text"
            class="form-control"
            v-model="report.eventName"
            required
          />
        </div>

        <div class="form-group">
          <label>Event Type</label>
          <input
            type="text"
            class="form-control"
            v-model="report.eventType"
            required
          />
        </div>

        <div class="form-group">
          <label>Event Mode</label>
          <input
            type="text"
            class="form-control"
            v-model="report.eventMode"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Update Report</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebaseDb";

export default {
  data() {
    return {};
  },
  created() {
    let dbRef = db.collection("reports").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("reports")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("Report successfully updated!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
