<template>
    <div class="dashboard-container"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DashboardAdmin",
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard-container{
    position: relative;
}
</style>