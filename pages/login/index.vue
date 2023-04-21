<template>
  <div class="mt-8">
    <v-row align="center" justify="center"
      ><img class="scds-logo" alt="Vuetify Logo" src="/logo.png"
    /></v-row>
    <v-row class="mb-4" align="center" justify="center"
      ><h1>Sign in to Scds</h1></v-row
    >
    <v-row align="center" justify="center">
      <v-card width="400px">
        <v-card-text>
          <v-text-field outlined label="login"></v-text-field>
          <v-text-field outlined label="senha"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row align="center" justify="center" class="mt-8"
      ><a
        :href="
          'https://github.com/login/oauth/authorize?scope=user:email&client_id=' +
          ghClientId
        "
        >Login Github</a
      ></v-row
    >
  </div>
</template>

<script>
export default {
  layout: 'login',
  name: 'InspirePage',
  mounted() {
    console.log(this.env)
  },
  data() {
    return {
      ghClientId: process.env.GH_CLIENT_ID,
    }
  },
}
</script>
<style lang="scss" scoped>
.scds-logo {
  width: 100px;
  height: 100px;
}
</style>
