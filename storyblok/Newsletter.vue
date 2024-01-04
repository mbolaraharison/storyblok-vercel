<template>
  <div class="w-[80%] flex flex-col space-y-2">
    <StoryblokComponent :key="blok.title[0]._uid" :blok="blok.title[0]" />
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium">{{ blok.email_input_label }}</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
    <button class="w-full p-2 bg-[#1d243d] text-white rounded-lg">{{ blok.submit[0].title }}</button>
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
const props = defineProps({ blok: Object });
console.log('blok : ', props.blok.title);
</script>
