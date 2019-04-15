<template>
  <div>
    <app-header />
    <app-sidebar />
  </div>
</template>
<script>
import AppHeader from '~/components/Header-user.vue'
import AppSidebar from '~/components/Sidebar-user.vue'
export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
