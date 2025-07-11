<script setup>

</script>

<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }" exact-active-class="active">
        Home
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'work' }" exact-active-class="active">
        Work
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }" exact-active-class="active">
        About
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'services' }" exact-active-class="active">
        Services
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'ideas' }" exact-active-class="active">
        Ideas
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'careers' }" exact-active-class="active">
        Careers
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'contact' }" exact-active-class="active">
        Contact
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>