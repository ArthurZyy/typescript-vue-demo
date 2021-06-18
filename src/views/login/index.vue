<template>
  <div class="login-container">
    <section>
      <el-form
        status-icon
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <el-form-item prop="mobilePhone">
          <el-input
            type="password"
            autocomplete="off"
            :placeholder="$t('login.mobilePhone')"
            v-model="loginForm.mobilePhone"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            autocomplete="off"
            :placeholder="$t('login.password')"
            v-model="loginForm.password"
          >
          </el-input>
        </el-form-item>
        <footer>
          <el-button type="primary" @click.native.prevent="handleLogin">{{
            $t("login.btn")
          }}</el-button>
        </footer>
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { Component, Vue } from "vue-property-decorator";
import { ElForm } from "_element-ui@2.15.2@element-ui/types/form";

@Component({
  name: "login",
})
export default class extends Vue {
  private validateMobilePhone = (
    rule: any,
    value: string,
    callback: Function
  ) => {
    if (!value.trim()) { 
      callback(new Error(this.$t("login.mobilePhoneErr").toString()));
    } else {
      callback();
    }
  };

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error(this.$t("login.passwordErr").toString()));
    } else {
      callback();
    }
  };

  private loading: boolean = false;
  private loginForm = {
    mobilePhone: "1751321165",
    password: "a123456",
  };
  private loginRules = {
    mobilePhone: [{ validator: this.validateMobilePhone, trigger: "blur" }],
    password: [{ validator: this.validatePassword, trigger: "blur" }],
  };

  private get pageSize() {
    return 10;
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if(valid){
        this.loading = true
        await UserModule.Login({
          ...this.loginForm,
          router: this.$router
        })

        setTimeout(() =>{
          this.loading = false
        }, 0.5 * 1000)
      } else {
        return false
      }
    })
  }
}
</script>