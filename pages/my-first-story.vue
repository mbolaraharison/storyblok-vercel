<script setup>
const story = await useAsyncStoryblok('my-first-story', { version: 'draft' },
{ customParent: 'https://app.storyblok.com' })
console.log('story : ', story);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
