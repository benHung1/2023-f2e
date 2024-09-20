<script setup>
import { reactive } from "vue";

import photo1 from "@/assets/image3.png";

import photo2 from "@/assets/image2.png";

import photo3 from "@/assets/image1.png";

const data = reactive([
  {
    imgUrl: photo1,
    title: "為毛孩子謀福利！<br>推動寵物醫療保障方案",
    content: [
      {
        title: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      },
      {
        title: "提供醫療補助",
        content:
          "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
      },
      {
        title: "合作動物醫院",
        content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
      },
    ],
  },

  {
    imgUrl: photo2,
    title: "打造休閒天堂！<br>推廣寵物休閒與娛樂場所",
    content: [
      {
        title: "建立寵物公園",
        content:
          "每年撥款新台幣 5 億元，在各大都市建立專屬的寵物公園。預計在第一年內，將在全國範圍內建立至少 10 座寵物公園",
      },
      {
        title: "推廣寵物友善商家",
        content:
          "鼓勵商家提供寵物友善環境，並為參與商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",
      },
    ],
  },

  {
    imgUrl: photo3,
    title: "推廣寵物飼養教育<br>讓愛更加專業",
    content: [
      {
        title: "建立寵物飼養教育中心",
        content:
          "每年撥款台幣 3 億元，在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心",
      },
      {
        title: "推廣寵物飼養課程",
        content:
          "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益",
      },
    ],
  },
]);
</script>

<template>
  <img class="mx-auto" src="@/assets/policy.png" alt="policy" srcset="" />

  <section
    class="policy-container flex justify-center items-center gap-8 mb-10"
  >
    <div
      v-for="item in data"
      class="policy-wrapper max-w-[350px] flex flex-col items-center"
    >
      <img :src="item.imgUrl" alt="image3" srcset="" />
      <h2 class="my-3 font-bold text-[28px]" v-html="item.title"></h2>

      <div
        class="policy-content bg-primeBlue rounded-[18px] py-6 px-[18px] min-h-[361px]"
      >
        <div v-for="content in item.content" class="mb-4">
          <h4 class="font-bold text-[20px]">{{ content.title }}</h4>
          <p>{{ content.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
