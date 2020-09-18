<template>
  <b-navbar-nav>
    <b-nav-item to="/" exact>Dashboard</b-nav-item> <!-- `exact` fixed active class rendering bug -->
    <b-nav-item to="/paths">Paths</b-nav-item>
    <b-nav-item to="/courses">Courses</b-nav-item>
    <b-nav-item-dropdown text="Admin" right v-if="isAdmin">
      <b-dropdown-item to="/admin" exact>Dashboard</b-dropdown-item>
      <b-dropdown-item to="/admin/users" v-if="isAdmin" exact>Users</b-dropdown-item>
      <b-dropdown-item to="/admin/courses" v-if="isAdmin" exact>Courses</b-dropdown-item>
      <b-dropdown-item to="/admin/paths" v-if="isAdmin" exact>Paths</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([ 'isAdmin' ])
    }
  }
</script>
