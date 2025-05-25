<template>
    <div>
      <NuxtImg :src="recipe.image" alt="" class="rounded-t-md" />
      <div class="flex flex-col py-6 px-4 flex-1">
        <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
        <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
          <div class="flex items-center gap-1">
            <svg class="text-dodgeroll-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 10.8l-4.8 2.8l-.7-1.4l4-2.3V7h1.5z" />
            </svg>
            <span>{{ recipe.cookTimeMinutes }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="text-dodgeroll-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27" />
            </svg>
            <span>{{ recipe.caloriesPerServing }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="text-dodgeroll-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z" />
            </svg>
            <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
          </div>
        </div>
        <BaseButton :to="`/recipes/${recipe.id}`" label="View" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type Recipe } from '~/types/types'
import BaseButton from '@/components/BaseButton.vue'

defineProps<{
  recipe: Recipe
}>()
</script>