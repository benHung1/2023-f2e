<script setup>
import { ref, watch } from "vue";

const isIntro = ref(false);

const handleIsIntro = () => {
  isIntro.value = true;
};
</script>

<template>
  <section class="bg-primeBlue3 relative pt-48" v-if="!isIntro">
    <div class="flex items-center relative px-40">
      <div class="left">
        <img src="@/assets/banner-361text.png" alt="text" srcset="" />
        <button class="btn-black-2 mt-12" @click="handleIsIntro">
          候選人簡介
          <i class="fas fa-hand-point-right"></i>
        </button>
      </div>
      <div class="">
        <img
          class="absolute left-[50%] -top-[12%] w-[40%] xl:w-auto lg:left-[40%]"
          src="@/assets/banner-361cat.png"
          alt="cat"
          srcset=""
        />
      </div>
    </div>
    <img class="w-full" src="@/assets/bk-gray.png" alt="bk-gray" />
  </section>

  <!-- 候選人簡介 -->

  <section class="bg-primeBlue3 pt-16" v-if="isIntro">
    <img class="m-auto animate-fade" src="@/assets/title.png" alt="" />
    <div class="flex px-40 mt-32 items-center pc:relative">
      <div class="px-5 py-8 bg-primeBlue max-w-[437px] rounded-[18px]">
        <h3 class="text-2xl font-bold flex justify-between items-center mb-8">
          <strong class="text-5xl">喵立翰</strong> MiAO LI-HAN
        </h3>
        <p class="text-[18px]">
          推動更完善貓咪福利和政策，間接投資台灣未來。
          民眾身心健康是推動經濟的核心動力。透過完善的
          貓咪福利政策，為台灣GDP經濟帶來巨大效益。讓
          一同護航台灣幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>
      <div class="right">
        <img
          class="pc:absolute pc:-top-[56%] pc:right-[3%] animate-fly"
          src="@/assets/2.png"
          alt=""
        />
      </div>
    </div>
    <img class="w-full" src="@/assets/bk-gray.png" alt="bk-gray" />
  </section>
</template>

<style lang="scss"></style>
