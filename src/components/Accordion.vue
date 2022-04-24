<template>
  <b-card v-if="answer.length > 0" no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle="accordionId">
      <!-- <b-button block v-b-toggle.accordion-1>Accordion 1</b-button> -->
      <p class="p-3 m-0">{{ question }}</p>
    </b-card-header>
    <b-collapse :id="accordionId" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text v-if="typeof answer === 'string'">{{ answer }}</b-card-text>
        <b-card-text v-else>
          <ul v-for="bullet in answer" :key="accordionId + bullet">
            <li>{{ bullet }}</li>
          </ul>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    question: String,
    answer: [String, Array],
    accordionId: String,
  },
  created() {

  }
};
</script>
