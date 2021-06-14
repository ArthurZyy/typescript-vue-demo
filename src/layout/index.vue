<template>
  <div class="app-wrapper">
    <Navbar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixins } from 'vue-class-component'
import { Navbar } from "./components";
    import ResizeMixin from './mixin/resize'

@Component({
  name: "app",
  components: {
    Navbar,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>