<template>
  <div class="w-full flex flex-col space-y-2">
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.my_first_text_field }}
    </h3>
    <div class="w-[100px] h-[100px]">
      <img
        class="w-full h-full object-cover"
        :src="blok.my_first_image_field"
        alt=""
      />
    </div>
  </div>
  <!-- <div
    v-editable="blok"
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.name }}
    </h3>
  </div> -->
</template>

<script setup>
defineProps({ blok: Object });
</script>
