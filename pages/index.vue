<template>
  <v-row justify="center" align="center">
    <v-col v-if="selectedRepo">
      <v-md-editor v-model="decodedContent"></v-md-editor>
    </v-col>
    <v-col v-else cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline"> Bem-vindo ao SCDS </v-card-title>
        <v-card-text>
          <p>
            Este projeto foi desenvolvido com fins acadêmicos com o objetivo de
            facilitar o acesso ao arquivo READEME.md de projetos pertencentes a
            uma organização em que o usuário esteja trabalhando atualmente.
            Considerando a cultura dos micro-serviços, organizações de médio a
            grande porte frequentemente possuem muitos repositórios, tornando
            difícil para o usuário encontrar a documentação necessária para
            executar um projeto, uma vez que esta pode estar espalhada por
            diversos repositórios. Este projeto tem como finalidade resolver
            este problema, fornecendo de maneira fácil uma lista com os
            repositórios e seus respectivos READMES.
          </p>
          <p>
            Link do repositorio Front-end
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github </a
            >.
          </p>
          <p>
            Link repositorio Back-end
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              Github </a
            >.
          </p>
          <p>
            Expresso minha sincera gratidão à bancada de professores que me
            acompanhou durante a jornada acadêmica, agradeço pelo
            comprometimento em transmitir conhecimentos e orientação, que foram
            fundamentais para meu crescimento pessoal e profissional.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Thiago felipe chinasso</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="setFirstRepo()"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  layout: 'default',
  name: 'IndexPage',
  middleware: ['auth'],
  async mounted() {
    if (!this.user) {
      this.setUser(this.$cookies.get('SCDS-USER'))
    }
    this.getOrgs(this.user)
  },
  methods: {
    ...mapMutations('oauth', {
      setUser: 'setUser',
    }),
    ...mapActions('default', {
      getOrgs: 'getOrgs',
      getOrgRepos: 'getOrgRepos',
    }),
  },
  computed: {
    ...mapGetters('oauth', {
      user: 'getUser',
    }),
    ...mapGetters('default', {
      selectedRepo: 'getSelectedRepo',
    }),
    decodedContent() {
      console.log(atob(this.selectedRepo.content))
      function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)))
      }
      return b64_to_utf8(this.selectedRepo.content)
    },
  },
}
</script>
