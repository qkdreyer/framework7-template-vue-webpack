<template>
  <f7-page>
    <f7-block>
      <div>Tab2 #{{id}}</div>
      <f7-link :href="`/tab2/${id}`">
        Increment Tab
      </f7-link>
    </f7-block>
  </f7-page>
</template>

<script>
  export default {
    name: 'Tab2Page',
    computed: {
      id() {
        return Number(this.$f7route.params.id || 0) + 1;
      }
    },
  };
</script>

