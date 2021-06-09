<template>
  <div class="login-container"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    name: 'login'
})

export default class extends Vue{
    private loading:boolean = false

    private get pageSize(){
      return 10
    }

    private handleLogin(){
      
    }
}
</script>