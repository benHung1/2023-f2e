<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-primeBlue3 pt-8 sticky top-0 z-30">
    <div class="flex items-center justify-between px-40">
      <a href="#candidate">
        <img
          src="@/assets/catLogo.png"
          alt="logo"
          srcset=""
          class="bg-primeBlue3 cursor-pointer"
        />
      </a>
      <nav>
        <ul class="flex gap-12 font-bold">
          <a href="#latestEvent">
            <li class="group flex gap-3 items-center cursor-pointer">
              <img
                class="group-hover:hidden"
                src="@/assets/pawBtn.png"
                alt=""
              />
              <img
                class="hidden group-hover:block"
                src="@/assets/btn.png"
                alt=""
              />
              最新活動
            </li>
          </a>

          <a href="#policyIssues">
            <li class="group flex gap-3 items-center cursor-pointer">
              <img
                class="group-hover:hidden"
                src="@/assets/pawBtn.png"
                alt=""
              />
              <img
                class="hidden group-hover:block"
                src="@/assets/btn2.png"
                alt=""
              />

              政策議題
            </li>
          </a>

          <a href="#donated">
            <li class="group flex gap-3 items-center cursor-pointer">
              <img
                class="group-hover:hidden"
                src="@/assets/pawBtn.png"
                alt=""
              />
              <img
                class="hidden group-hover:block"
                src="@/assets/btn3.png"
                alt=""
              />

              小額捐贈
            </li>
          </a>
          <a href="#mail">
            <li class="group flex gap-3 items-center cursor-pointer">
              <img
                class="group-hover:hidden"
                src="@/assets/pawBtn.png"
                alt=""
              />
              <img
                class="hidden group-hover:block"
                src="@/assets/btn4.png"
                alt=""
              />

              服務信箱
            </li>
          </a>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style></style>
