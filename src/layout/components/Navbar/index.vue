<template>
  <div class="navbar">Navbar</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
// import { UserModule } from "@/store/modules/";

@Component({
  name: "Navbar",
  components: {},
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

  private async logout(){
      UserModule.ResetToken()
  }

  private themeChange(value: string){
      
  }
}
</script>

<style lang="scss" scoped>
.navbar {
}
</style>