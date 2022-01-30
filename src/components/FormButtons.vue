<template>
  <div class="d-flex justify-content-between px-3 py-5">
    <!-- TODO: save on click -->
    <b-button
      v-if="!isFirst"
      type="button"
      variant="secondary"
      @click="$router.go(-1)"
    >
      &laquo; Back
    </b-button>
    <b-button type="submit" variant="primary">{{ isLast ? 'Finish' : 'Next' }} &raquo;</b-button>
  </div>
</template>

<script>
export default {
  props: {
    isFirst: Boolean,
    isLast: Boolean
  }
};
</script>
