<script setup>
const story = ref(null);
const storyblokApi = useStoryblokApi();
const query = 'Newsletter';
const { data } = await storyblokApi.get(
    `cdn/stories`,
    {
      version: 'draft',
      filter_query: {
      __or: [
      {
        body: {
          like: `*${query}*`,
        },
      },
      {
        headline: {
          like: `*${query}*`,
        },
      },
      {
        text: {
          like: `*${query}*`,
        },
      },
    ],
  }
    }
  );
  story.value = data.stories;
  console.log('stories : ', data.stories);
</script>

<template>
  <!-- <div class="flex justify-center">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div> -->
</template>
