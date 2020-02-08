<template>
  <div id="app" :class="{'is-menu-visible': toggleMenu, 'is-preload': isPreloading}">
    <Menu @toggle-menu="toggleMenu = !toggleMenu" />
    <div id="wrapper">
      <Header @toggle-menu="toggleMenu = !toggleMenu" />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import Menu from '@/components/common/Menu'
  import Footer from '@/components/common/Footer'

  export default {
    components: {
      Header,
      Menu,
      Footer,
    },
    data() {
      return {
        toggleMenu: false,
        isPreloading: false
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/main.scss';
</style>
