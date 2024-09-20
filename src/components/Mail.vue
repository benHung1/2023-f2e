<script setup></script>

<template>
  <img class="mx-auto" src="@/assets/mail.png" alt="" srcset="" />

  <section>
    <p class="text-center font-bold text-xl mt-5 mb-10">
      親愛的鄉親，每位市民的意見是我們社區前進的原動力。
      <br />分享您的想法，一同為我們的未來打造更美好！
    </p>

    <div
      class="input-wrapper bg-gray-300 rounded-[18px] py-[18px] px-14 max-w-[531px] mx-auto flex flex-col items-center"
    >
      <div class="flex flex-col">
        <div class="flex flex-col">
          <label for="">您的姓名</label>
          <input type="text" class="border-[1px] border-black rounded-lg" />
        </div>

        <div class="flex flex-col">
          <label for="">電子郵件</label>
          <input type="text" class="border-[1px] border-black rounded-lg" />
        </div>

        <div class="flex flex-col">
          <label for="">您的建言</label>
          <textarea class="border-[1px] border-black rounded-lg" />
        </div>

        <button class="btn-black-2">送出意見</button>
      </div>
    </div>
  </section>
</template>

<style></style>
