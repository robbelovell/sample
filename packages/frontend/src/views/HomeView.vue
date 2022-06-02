<script setup lang="ts">
import Carousel from '@/components/home/Carousel.vue'
import Weather from '@/components/home/Weather.vue'
import Clock from '@/components/home/Clock.vue'
import Calendar from '@/components/home/Calendar.vue'
import Stocks from '@/components/home/Stocks.vue'
import News from '@/components/home/News.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-4 gap-4">
      <Carousel class="col-span-2" />
      <Weather />
      <Clock />
      <div class="col-span-3">
        <div class="grid grid-cols-3 gap-4">
          <Calendar />
          <Stocks class="col-span-2" />
        </div>
      </div>
      <News />
    </div>
  </main>
</template>