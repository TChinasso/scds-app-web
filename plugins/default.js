// es2015 module
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);

Vue.use(VueCookies, { expires: '7d'})
window.$cookies = Vue.$cookies
