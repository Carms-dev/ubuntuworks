<template>
  <!-- popover for help text -->
  <b-button
    href="#"
    tabindex="0"
    v-b-popover.focus.bottomright="content"
    :title="title"
    class="ml-4"
    variant="link"
  >
    <b-icon
      class="text-secondary"
      icon="info-circle"
      font-scale="1.5"
    ></b-icon>
  </b-button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {
    };
  },
};
</script>
