<script setup></script>

<template>
  <img class="mx-auto mb-14" src="@/assets/Group.png" alt="group" />

  <section class="flex flex-col items-center max-w-[992px] mx-auto">
    <div class="donated-wrapper flex gap-32">
      <div class="left flex flex-col gap-6">
        <div
          class="donor flex items-center py-6 px-8 gap-8 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">喵星人之友</h5>
          <h5 class="font-bold text-[28px]">NT $ 600</h5>
          <p class="text-[18px]">已有9957人贊助</p>
        </div>
        <div
          class="donor flex items-center py-6 px-8 gap-8 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">喵星人之友</h5>
          <h5 class="font-bold text-[28px]">NT $ 600</h5>
          <p class="text-[18px]">已有9957人贊助</p>
        </div>
        <div
          class="donor flex items-center py-6 px-8 gap-8 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">喵星人之友</h5>
          <h5 class="font-bold text-[28px]">NT $ 600</h5>
          <p class="text-[18px]">已有9957人贊助</p>
        </div>
        <div
          class="donor flex flex-col py-6 px-4 rounded-xl border-[3px] border-[#383735]"
        >
          <h5 class="font-bold text-[28px]">自訂贊助金額</h5>
          <label
            class="flex items-center gap-[18px] font-bold text-[24px] bg-white rounded-lg"
            for="donated"
          >
            NT$
            <input
              id="donated"
              class="text-[1rem]"
              type="text"
              placeholder="請輸入金額"
            />
          </label>
        </div>
      </div>
      <div class="right flex flex-col items-center gap-8">
        <img src="@/assets/sponsor4.png" alt="sponsor4" />

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
