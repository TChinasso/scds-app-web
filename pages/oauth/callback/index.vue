<template>
  <div></div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  layout: 'login',
  mounted() {
    const loggedUser = JSON.parse(this.$route.query.user)
    this.setUser(loggedUser)
    this.$router.push('/')
  },
  methods: {
    ...mapMutations('oauth', {
      setUser: 'setUser',
    }),

    ...mapActions('default', {
      getOrgs: 'getOrgs',
      getOrgRepos: 'getOrgRepos',
    })
  },
}
</script>

<style>
</style>
