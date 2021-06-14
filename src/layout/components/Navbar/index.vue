<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb 
    id="breadcrumb-container"
    class="breadcrumb-container"
     />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
import { SettingsModule } from "@/store/modules/settings";

import Breadcrumb from "@/components/Breadcrumb/index.vue";
import Hamburger from "@/components/Hamburger/index.vue";

@Component({
  name: "Navbar",
  components: {
    Breadcrumb,
    Hamburger,
  },
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get device() {
    return AppModule.device.toString();
  }

  get avatar() {
    return require("@/assets/avatar.gif");
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar(false);
  }

  private async logout() {
    UserModule.ResetToken();
  }

  private themeChange(value: string) {
    SettingsModule.changeSetting({ key: "theme", value });
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>