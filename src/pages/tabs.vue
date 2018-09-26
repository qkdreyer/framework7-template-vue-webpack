<template>
  <f7-page>
    <f7-navbar back-link>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-tabs routable>
      <f7-tab id="tab1"/>
      <f7-tab id="tab2"/>
    </f7-tabs>
  </f7-page>
</template>
<script>
export default {}
</script>
