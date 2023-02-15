<template>
  <div
    class="typewriter-effect"
    :class="{ 'typewriter-effect_cursor-visible': showCursor }"
  >
    <span class="typewriter-effect__content">{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
// Implementation based on https://github.com/webnoobcodes/vuejs-typeeffect

interface Props {
  erasingDelay?: number;
  newValueDelay?: number;
  persistence?: number;
  startingIndex?: number;
  typingDelay?: number;
  values?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  erasingDelay: 75,
  newValueDelay: 600,
  persistence: 2000,
  startingIndex: 0,
  typingDelay: 100,
  values: () => [],
});

const content = ref("");
const currentValueIdx = ref(0);
const showCursor = ref(false);

const targetValue = computed(() => props.values[currentValueIdx.value]);

const contentLength = computed(() => content.value.length);

function typeText() {
  const targetCompleted = contentLength.value === targetValue.value.length;

  if (targetCompleted) {
    eraseCurrentValue();
  } else {
    content.value = targetValue.value.substring(0, contentLength.value + 1);
    typeNextCharacter();
  }
}

function eraseText() {
  const noContent = contentLength.value === 0;

  if (noContent) {
    typeNextValue();
  } else {
    content.value = content.value.substring(0, contentLength.value - 1);
    eraseNextCharacter();
  }
}

function typeNextValue() {
  showCursor.value = true;
  currentValueIdx.value = (currentValueIdx.value + 1) % props.values.length;
  setTimeout(() => {
    showCursor.value = false;
    typeText();
  }, props.newValueDelay);
}

function typeNextCharacter() {
  setTimeout(typeText, props.typingDelay);
}

function eraseCurrentValue() {
  setTimeout(eraseText, props.persistence);
}

function eraseNextCharacter() {
  setTimeout(eraseText, props.erasingDelay);
}

onMounted(() => {
  content.value = props.values[props.startingIndex] || "";
  currentValueIdx.value = props.startingIndex;
  eraseCurrentValue();
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.typewriter-effect {
  background-color: qiskit.$background-color-secondary;
  display: inline-block;

  &__content {
    font-style: italic;
    color: white;
    padding: carbon.$spacing-01 carbon.$spacing-03 carbon.$spacing-01 0;
    margin-left: carbon.$spacing-02;
  }

  &_cursor-visible {
    animation: 0.75s flash step-end infinite;

    .typewriter-effect__content {
      margin-left: 0;
    }
  }

  @keyframes flash {
    0%,
    100% {
      background-color: transparent;
    }

    50% {
      background-color: qiskit.$background-color-secondary;
    }
  }
}
</style>
