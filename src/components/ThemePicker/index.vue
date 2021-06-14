<template>
  <el-color-picker
    v-model="theme"
    :predefine="[
      '#409EFF',
      '#1890ff',
      '#304156',
      '#212121',
      '#11a983',
      '#13c2c2',
      '#6959CD',
      '#f5222d',
    ]"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { SettingsModule } from "@/store/modules/settings";

const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color

@Component({
  name: "ThemePicker",
})
export default class extends Vue {
  private chalk = "";
  private theme = "";

  get defaultTheme() {
    return SettingsModule.theme;
  }

  @Watch("defaultTeme", { immediate: true })
  private onDefaultThemeChange(value: string) {
    this.theme = value;
  }

  @Watch("theme")
  private async onThemeChange(value: string) {
    if (!value) return;

    const oldValue = this.chalk ? this.theme : ORIGINAL_THEME;
    const themeCluster = this.getThemeCluster(value.replace("#", ""));
    const originalCluster = this.getThemeCluster(oldValue.replace("#", ""));
    const message = this.$message({
      message: "  Compiling the theme",
      customClass: "theme-message",
      type: "success",
      duration: 0,
      iconClass: "el-icon-loading",
    });

    if (!this.chalk) {
      const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
                await this.getCSSString(url, 'chalk')
    }

    // const getHandler = ()
  }

  private getThemeCluster(theme: string) {
    const tintColor = (color: string, tint: number) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);
      if (tint === 0) {
        return [red, green, blue].join(",");
      } else {
        red += Math.round(tint * (255 - red));
        green += Math.round(tint * (255 - green));
        blue += Math.round(tint * (255 - blue));
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
      }
    };
  }

  private getCSSString(url: string, variable: string) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          (this as any)[variable] = xhr.responseText.replace(
            /@font-face{[^}]+}/,
            ""
          );
          resolve(true);
        }
      };
      xhr.open("GET", url);
      xhr.send();
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
}
</style>