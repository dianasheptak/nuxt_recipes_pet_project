<template>
  <template>
    <main>
      <section class="bg-[#f1f1f1]">
        <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
              Master the Kitchen with Ease: Unleash Your Inner Chef Today!
            </h1>
            <p class="text-xl lg:text-2xl mb-8 text-balance">
              Discover recipes helping you to find the easiest way to cook.
            </p>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <NuxtImg
                sizes="xs:100vw sm:667px"
                src="/nuxt-course-hero.png"
                format="webp"
                densities="x1"
                alt=""
            />
          </div>
        </div>
      </section>
    </main>
    <section id="recipes" class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div  class="flex flex-col shadow rounded-md">
          <img src="" alt="" class="rounded-t-md" />
          <div class="flex flex-col py-6 px-4 flex-1">
            <p class="text-xl lg:text-2xl font-semibold mb-2">
              Recipe Name
            </p>
            <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
              <div class="flex items-center gap-1">
<!--                <Icon name="i-mdi-clock-time-eight-outline" class="text-dodgeroll-gold-500" />-->
              </div>
              <div class="flex items-center gap-1" >
<!--                <Icon name="i-mdi-fire" class="text-dodgeroll-gold-500" />-->
              </div>
              <div class="flex items-center gap-1">
<!--                <Icon name="i-mdi-star" class="text-dodgeroll-gold-500" />-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
})

const { data, error } = await useAsyncData('recipes', () => $fetch('https://dummyjson.com/recipes?limit=15'));

console.log(data.value, 77)
</script>