<template>
  <div>
    <h2 class="text-2xl py-8 font-semibold">🍲 About Nuxt Recipes
      Nuxt Recipes is more than just a recipe viewer – it’s a gateway to the world's kitchens, right from your browser.
    </h2>
    <ul>
      <li v-for="listItem in data" class="text-xl py-3 list-disc">
          <p>
            {{listItem.title}}
          </p>
          <span class="text-base py-2">
            {{listItem.description}}
          </span>
      </li>
    </ul>
    <h2 class="text-2xl py-8 font-semibold">
      💡 Our Mission
    </h2>
    <ul class="bg-[#f9bd50] rounded-md">
      <li v-for="item in ourMissionData" class="p-4">
        {{ item.title }}
      </li>
    </ul>
    <p class="font-bold text-xl py-6">
      🚀 Get Involved!
    </p>
  </div>
</template>

<script setup>
const data = [
  {
    title: "🌍 A Global Table, One Click Away",
    description: " We believe food is a universal language, connecting cultures, families, and memories. This app pulls handpicked recipes via API to bring you flavors from around the world – from comforting classics to bold new dishes you've never tried before.",
  },
  {
    title: "🧑‍💻 Built for Speed & Flavor",
    description: "Created using the Nuxt 3 framework, this site combines performance with simplicity. Whether you're browsing on mobile or desktop, recipes load fast, look sharp, and are easy to follow thanks to:\n"
  },
  {
    title: " ⚡ Server-side rendering with Nuxt for lightning speed",
  },
  {
    title: "🎨 TailwindCSS styling for modern, clean design",
  },
  {
    title: "📦 Modular, scalable architecture"
  }
]

const ourMissionData = [
  {
    title: "🚀 Inspire home cooks and food lovers"
  },
  {
    title: "🚀 Provide simple, reliable access to diverse meals"
  },
  {
    title: "🚀 Demonstrate the power of Nuxt and modern front-end tools"
  }
]
</script>