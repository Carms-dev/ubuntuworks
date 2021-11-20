<template>
  <div class="d-flex justify-content-between px-3 py-5">
    <b-button
      type="button"
      @click="$router.go(-1)"
      variant="secondary"
    >
      &laquo; Back
    </b-button>
    <b-button type="submit" variant="primary">Next &raquo;</b-button>
  </div>
</template>
