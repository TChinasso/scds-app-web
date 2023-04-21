<template>
  <v-app dark>
    <v-navigation-drawer
    v-if="orgs && repos"
      :value="true"
      fixed
      app
    >
    <v-list>
      <v-list-item>
          <v-list-item-avatar>
            <v-img :src="orgs[0].avatar_url"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item :href=" orgs[0].url ">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ orgs[0].login }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ orgs[0].description }}</v-list-item-subtitle>
          </v-list-item-content>


        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>

        <v-list-item
          v-for="(item, i) in repos"
          :key="i"
          exact
          @click="getRepo(item)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <div>
        <span class="mr-2">{{ user.name }}</span>
        <v-avatar>
        <img :src="user.profile_picture" alt="">
      </v-avatar>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>Tchinasso</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  middleware: ['auth'],
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },computed: {
    ...mapGetters('oauth', {user: 'getUser'}),
    ...mapGetters('default', {orgs: 'getOrgs', repos: 'getRepos'})
  },
  methods: {
    ...mapActions('default', {
      getRepo: 'getRepo'
    })
  },
}
</script>
