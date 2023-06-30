<template>
  <code
  >
    <slot />
  </code>
</template>

<style>
code::before,
code::after {
  content: "`"
}

code {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

pre {
  background-color: #232323 !important;
  overflow-x: auto;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

pre code::before,
pre code::after {
  content: none;
}
</style>
