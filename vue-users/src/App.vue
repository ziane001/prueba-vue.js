<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Vue Users</a>
        <router-link class="nav-link" to="/">Lista de Usuarios</router-link>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
</style>
