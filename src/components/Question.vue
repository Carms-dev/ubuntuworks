<template>
  <b-form-group
    :id="'input-group-' + index"
    :label="question.label"
    :label-for="'input-' + index"
  >
    <!-- Input -->
    <b-form-input
      v-if="question.type === 'input'"
      :id="'input-' + index"
      v-model="form[question.key]"
      :required="question.required ? true : false"
    >
    </b-form-input>

    <!-- Radio -->
    <b-form-radio-group
      v-else-if="question.type === 'radio'"
      v-model="form[question.key]"
      :options="question.options"
      :name="'radios-' + index"
    >
      <template v-if="question.required">
        <b-form-invalid-feedback :state="Boolean(form[question.key])">
          Please select one
        </b-form-invalid-feedback>

        <b-form-valid-feedback :state="Boolean(form[question.key])">
          Nice!
        </b-form-valid-feedback>
      </template>
    </b-form-radio-group>

    <!-- Checkbox group -->
    <b-form-checkbox-group
      v-else-if="question.type === 'checkbox-group'"
      v-model="form[question.key]"
      :id="'checkboxes-' + index"
      :aria-describedby="question.label"
    >
      <div
        v-for="option in question.options"
        :key="question.key + '-' + option.value"
      >
        <b-form-checkbox
          :value="option.value"
          :checked="option.checked"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </b-form-checkbox>
      </div>
    </b-form-checkbox-group>

    <!-- Select -->
    <b-form-select
      v-else-if="question.type === 'select'"
      :id="'input-' + index"
      v-model="form[question.key]"
      :options="question.options"
      :required="question.required"
    ></b-form-select>

    <!-- Custom Checkbox for Module Selection -->
    <b-form-checkbox-group
      v-else-if="question.type === 'module-checkbox-group'"
      v-model="form[question.key]"
      :id="'checkboxes-' + index"
      :aria-describedby="question.label"
      class="row py-4"
    >
      <div
        v-for="module in modules"
        :key="module.key"
        class="col-12 col-sm-6 col-md-4 col-xl-3 pb-2"
      >
        <b-form-checkbox
          :value="module.key"
          :checked="module.checked"
          :disabled="module.disabled"
          class="d-flex flex-sm-column align-items-center text-center m-0"
        >
          <img :src="getImgUrl(module.image.file)" :alt="module.image.alt" style="width: 100%;" class="my-2">
          {{ module.name }}
        </b-form-checkbox>
      </div>
    </b-form-checkbox-group>



  </b-form-group>
</template>

<script>
import modules from "../data/modules";

export default {
  data() {
    return {
      modules,
    };
  },
  props: {
    question: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  methods: {
    getImgUrl(file) {
      return require("@/assets/" + file)
    },
  }

};
</script>

<style scoped>
  .custom-control-label {
    font-size: 5rem;
  }
</style>
