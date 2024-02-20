<template>
  <li v-for="item in items">
    <a :href="item.link"
       class="block py-2 pr-4 pl-3 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
       aria-current="page">{{ item.name }}</a>
  </li>
</template>
<script setup lang="ts">
const items = ref(
    [
      {
        link: "/",
        name: 'Accueil'
      },
      {
        link: "/annonces",
        name: 'Annonces'
      },
      {
        link: "/wishlist",
        name: 'Wishlist'
      },
      {
        link: "/contact",
        name: 'Contact'
      }
    ]
)
</script>