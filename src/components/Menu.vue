<script setup>

</script>

<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }" exact-active-class="active" @click="$emit('close-menu')">
        Home
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'work' }" exact-active-class="active" @click="$emit('close-menu')">
        Work
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }" exact-active-class="active" @click="$emit('close-menu')">
        About
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'services' }" exact-active-class="active" @click="$emit('close-menu')">
        Services
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'ideas' }" exact-active-class="active" @click="$emit('close-menu')">
        Ideas
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'careers' }" exact-active-class="active" @click="$emit('close-menu')">
        Careers
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'contact' }" exact-active-class="active" @click="$emit('close-menu')">
        Contact
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>