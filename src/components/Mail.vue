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
      <div
        class="flex flex-col items-start gap-3 text-[20px] font-bold min-w-[412px]"
      >
        <div class="flex flex-col w-full">
          <label for="">您的姓名</label>
          <input
            type="text"
            class="min-h-14 border-[1px] border-black rounded-lg"
          />
        </div>

        <div class="flex flex-col w-full">
          <label for="">電子郵件</label>
          <input
            type="text"
            class="min-h-14 border-[1px] border-black rounded-lg"
          />
        </div>

        <div
          class="flex flex-col w-full relative after:content-['0/50'] after:absolute after:right-3 after:bottom-3 after:text-[#AEADAB]"
        >
          <label for="">您的建言</label>
          <textarea
            class="border-[1px] border-black rounded-lg min-h-[128px]"
          />
        </div>

        <button class="btn-black-2 mx-auto my-1">送出意見</button>
      </div>
    </div>

    <img
      class="ml-auto pr-[102px]"
      src="@/assets/catHand.png"
      alt="catHands"
      srcset=""
    />
  </section>
</template>

<style></style>
