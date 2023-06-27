<script setup lang="ts">
import type { PropType } from "vue";
import type { Project } from "../content";

// props
const props = defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const index = props.index;
const isDivisable = props.index % 2 == 0;
const projects = props.projects as Project[];
</script>

<template>
  <div v-if="isDivisable" class="grid_item">
    <div class="project_item">
      <a
        :href="`${projects[index].link}`"
        rel="noreferrer noopener"
        target="_blank"
      >
        {{ projects[index].name }}
      </a>
      <p>{{ projects[index].description }}</p>
    </div>
    <div class="project_item" v-if="index < props.projects.length - 1">
      <a
        :href="`${projects[index + 1].link}`"
        rel="noreferrer noopener"
        target="_blank"
      >
        {{ projects[index + 1].name }}
      </a>
      <p>{{ projects[index + 1].description }}</p>
    </div>
  </div>
</template>

<style scoped>
.grid_item {
  gap: 2em;
  width: 100%;
  display: flex;
}
@media (max-width: 612px) {
  .grid_item {
    gap: em;
  }
}
.project_item {
  width: 75%;
}
</style>
