<template>
  <div class="row">
    <!-- Left Panel -->
    <div class="col-12 col-lg-3 d-none d-lg-block" style="padding-right: 2rem">
      <div v-for="module in selectedModules" :key="module.key">
        <router-link
          :to="`/reports/${reportId}/modules/${module.key}`"
          :class="'btn-module p-3' + [currentModule.key === module.key ? ' selected' : '']"
        >
          <img :src="getImgUrl(module.image.file)" :alt="module.image.alt" style="width: 100%">
          <p>{{ module.name }}</p>
        </router-link>
      </div>
    </div>

    <!-- Form -->
    <b-form @submit="onFormSubmit" class="col-12 col-lg-8 bg-light border mb-5 p-4 p-lg-5">
      <h1 class="display-4 mb-3">{{ currentModule.name }}</h1>
      <p class="lead mb-5" v-if="currentModule.description">{{ currentModule.description }}</p>

      <div
        class="d-flex justify-content-between align-items-start py-3"
        v-for="(question, index) in questions"
        :key="question.key"
      >
        <Question :form="form" :question="question" :index="index" />

        <InfoPopover
          v-if="question.help"
          :content="question.help"
          :title="'Information'"
        />
      </div>

      <!-- buttons -->
      <FormButtons />
    </b-form>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
  </div>

</template>

<script>
import db from "../firebaseDb";
import allModules from "../data/modules";
import modulesQuestions from "../data/modulesQuestions";
import InfoPopover from "../components/InfoPopover.vue";
import Question from "../components/Question.vue";
import FormButtons from "../components/FormButtons.vue";

export default {
  components: {
    InfoPopover,
    Question,
    FormButtons,
  },
  data() {
    return {
      // params
      reportId: this.$route.params.report_id,
      currentModule: allModules.find(({key}) => key === this.$route.params.module_key),
      questions: modulesQuestions[this.$route.params.module_key],
      form: modulesQuestions[this.$route.params.module_key].reduce((a, v) => ({ ...a, [v.key]: v.initial }), {}),
      selectedModules: [],
      report: {},
      isLast: null,
    };
  },
  created() {
    db.collection("reports")
      .doc(this.reportId)
      .get()
      .then((snapshot) => {
        this.report = snapshot.data()
      })
      .then(() => {
        const selectedModulesKeys = JSON.parse(JSON.stringify(this.report.basic.selected_modules))
        this.selectedModules = allModules.filter(({ key }) => selectedModulesKeys.includes(key))
        this.isLast = selectedModulesKeys.at(-1) === this.currentModule.key
      })
  },
  methods: {
    getImgUrl(file) {
      return require("@/assets/" + file)
    },
    onFormSubmit(event) {
      event.preventDefault();
      const updatedReport = { ...this.report, [this.currentModule.key]: this.form };

      // Update report
      db.collection("reports")
        .doc(this.reportId)
        .update(updatedReport)
        .then(() => {
          // db.collection("reports")
          //   .doc(this.reportId)
          //   .get()
          //   .then((snapshot) => {
          //     console.log(snapshot.data());
          //   });

          // Routing
          // Reached last module, direct to Reports Show
          const selectedModuleKeys = this.report.basic.selected_modules
          if (this.isLast) {
            this.$router.push(`/reports/${this.reportId}`);
          // Otherwise go to the next module
          } else {
            const nextIndex = selectedModuleKeys.indexOf(this.currentModule.key) + 1
            this.$router.push(`/reports/${this.reportId}/modules/${selectedModuleKeys[nextIndex]}`);
            // Dirty fix, forcereload
            // this.$router.go(this.$router.currentRoute)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
