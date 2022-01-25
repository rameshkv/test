<template>
  <div id="app">
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">myApp</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Project" right>
            <b-dropdown-item to="/project/">View</b-dropdown-item>
            <b-dropdown-item to="/project-add/">Add</b-dropdown-item>
          </b-nav-item-dropdown>
           <b-nav-item-dropdown text="Employee"  right>
            <b-dropdown-item to="/employee/">View</b-dropdown-item>
            <b-dropdown-item to="/employee-add/">Add</b-dropdown-item>
           </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <b-container class="mtop">
      <router-view />
  </b-container>

 </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #424242;
  background-color: #fff;
}
.mtop {
  margin-top:60px;
}
</style>
