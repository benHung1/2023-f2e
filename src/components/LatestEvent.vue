<script setup lang="ts">
import { reactive } from "vue";

import photo1 from "@/assets/photo1.png";

import photo2 from "@/assets/photo2.png";

import photo3 from "@/assets/photo3.png";

const data = reactive([
  {
    date: "2023.12.26",
    imgUrl: photo2,
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    content:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的VIP 休憩空間。",
  },
  {
    date: "2023.12.26",
    imgUrl: photo3,
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    content:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
  },
  {
    date: "2023.12.26",
    imgUrl: photo1,
    title: "收容所模特兒大比拼！",
    content:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！。",
  },
]);
</script>

<template>
  <section class="mt-16 mb-40 relative">
    <img class="m-auto" src="@/assets/title1.png" alt="title" />

    <!-- <div class="">
      <img src="@/assets/cat1.png" alt="" />
    </div> -->

    <div class="news-container flex flex-col mt-40 gap-4">
      <div
        v-for="(item, index) in data"
        class="news-wrapper flex justify-center gap-6 max-w-[758px] mx-auto relative before:content-[''] before:rounded-full before:w-5 before:h-5 before:bg-black after:content-[''] after:absolute after:left-[10px] after:bg-black after:h-screen after:w-[2px]"
      >
        <div class="left">
          <img class="rounded-[12px]" :src="item.imgUrl" alt="news1" />
        </div>

        <div class="right flex flex-col items-start max-w-[466px]">
          <div class="time btn-black">{{ item.date }}</div>
          <h3 class="title mt-2 mb-3 font-bold text-xl">
            {{ item.title }}
          </h3>
          <p class="content">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
