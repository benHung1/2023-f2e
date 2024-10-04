<script setup>
import { reactive, ref } from "vue";

const data = reactive([
  {
    title: "喵星人之友",
    subTitle: "NT $ 600",
    content: "已有9957人贊助",
  },

  {
    title: "喵星大使",
    subTitle: "NT $ 600",
    content: "已有9957人贊助",
  },

  {
    title: "喵星傳奇",
    subTitle: "NT $ 600",
    content: "已有9957人贊助",
  },
]);

const i = ref(0);

const target = ref([]);

const customize = ref(null);

const handleImg = (index, event) => {
  i.value = index;

  target.value.forEach((item) => {
    item.classList.remove("btn-active-blue");
  });

  if (index === 3) {
    // custom dontated
    customize.value = event.currentTarget;
    customize.value.classList.add("btn-active-blue");
  } else {
    customize.value?.classList.remove("btn-active-blue");
    target.value[index].classList.add("btn-active-blue");
  }
};
</script>

<template>
  <section
    id="donated"
    class="flex flex-col items-center max-w-[992px] mx-auto"
  >
    <img class="sec-img mx-auto mb-14" src="@/assets/Group.png" alt="group" />
    <div class="donated-wrapper flex gap-32">
      <div class="left flex flex-col gap-6">
        <div
          v-for="(item, index) in data"
          @click="handleImg(index)"
          ref="target"
          class="cursor-pointer donor flex items-center py-6 px-6 gap-6 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">
            {{ item.title }}
          </h5>

          <h5 class="font-bold text-[28px]">
            {{ item.subTitle }}
          </h5>
          <p class="text-[18px]">{{ item.content }}</p>
        </div>

        <div
          @click="handleImg(3, $event)"
          class="cursor-pointer donor flex flex-col py-6 px-4 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">自訂贊助金額</h5>
          <label
            class="p-3 cursor-pointer flex items-center gap-[18px] font-bold text-[24px] bg-white rounded-lg"
            for="donated"
          >
            NT$
            <input
              min="15"
              id="donated"
              class="bg-none text-[1rem] focus:outline-none"
              type="number"
              placeholder="請輸入金額"
            />
          </label>
        </div>
      </div>
      <div class="right flex flex-col items-center gap-8">
        <img :src="`/src/assets/sponsor${i}.png`" alt="sponsor4" />

        <button class="btn-black-2">
          前往捐款
          <i class="fas fa-hand-point-right"></i>
        </button>
      </div>
    </div>

    <div
      class="doneted-total rounded-[20px] bg-primeBlue2 py-2 w-full text-center mt-8 mb-4"
    >
      <p>目前贊助總金額</p>
      <h3 class="text-[40px] font-bold">$123,456,789</h3>
    </div>

    <h5 class="font-bold text-[28px] text-[#383735]">
      您的小筆捐款，是每隻毛孩未來的大大動力！
    </h5>
  </section>
</template>

<style></style>
