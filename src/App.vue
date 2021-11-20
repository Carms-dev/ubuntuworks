<template>
  <div style="background: #fff8ef;">
    <!-- Navigation -->
    <nav class="navbar navbar-light bg-light sticky-top shadow-sm justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/">
          <img src="@/assets/logo.png" alt="UbuntuWorks Logo">
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="pr-3 btn-prime" to="/reports/new">Start</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <main class="container mt-5" style="min-height: calc(100vh - 180px);">
      <router-view :key="$route.fullPath"/>
    </main>

    <!-- Footer -->
    <footer class="container-fluid bg-dark text-white pt-4 pb-2">
      <div class="text-center">
        <p class="lead">Copyright © {{ new Date().getFullYear() }} - <a class="link-light" href="https://ubuntuworks.ca/">UbuntuWorks</a></p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif !important;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-weight: 700 !important;
}
.navbar-brand img {
  max-width: 40vw;
  width: 400px;
}
</style>

