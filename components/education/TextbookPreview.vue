<template>
  <section>
    <div class="textbook-features">
      <section
        id="toc"
        class="textbook-features__page textbook-features__page--active"
      >
        <img class="bookmark" src="/images/education/iconBookmark.svg">
        <div class="textbook-features__toc-content">
          <slot />
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.textbook-features {
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1rem;
    z-index: 1;
    width: 100%;
    height: 100px;
    box-shadow: 0 23px 35px 0 rgba($gray-100, 0.3);
    border-radius: 8px;
    transform-origin: center bottom;
    transform: scale(0.95);
  }
}

.textbook-features__page {
  position: relative;
  width: 100%;
  opacity: 0;
  background: $inverse-02;
  border-radius: 8px;
  padding: 2rem;
  transform-origin: center bottom;
  transform: scale(0.95) translateY(1rem);
  transition: transform 300ms, opacity 300ms;

  &--active {
    opacity: 1;
    z-index: 2;
    transform: scale(1);
    box-shadow: 0 23px 35px 0 rgba($gray-100, 0.3);
  }

  &--out {
    opacity: 0;
    z-index: 2;
    transform: scale(1.3) translateY(-2rem);
    transition: transform 400ms, opacity 400ms;
  }
}

.bookmark {
  position: absolute;
  top: -16px;
  left: 1rem;
  z-index: 3;
  width: 3.8rem;
  height: auto;
}

.marker {
  position: absolute;
  top: 5rem;
  left: calc(100% - 2.8rem);
  transition: transform 200ms;
  cursor: pointer;

  &:nth-child(2) {
    bottom: 9rem;
    left: calc(100% - 2.8rem);
  }

  &--active,
  &:hover {
    transform: translateX(1rem);
  }

  &--active {
    .marker__decoration {
      opacity: 1;
    }
  }
}

#live-code,
#live-code * {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.textbook-features__toc-content {
  z-index: 1;
  max-height: 100%;
  overflow-y: hidden;
  padding-left: 3.5rem;

  ul {
    margin: 0.5rem 0 1rem 2rem;
    list-style: disc;

    li {
      @include type-style('body-short-02');
    }
  }

  h2 {
    @include type-style('productive-heading-02');
  }

  h3 {
    @include type-style('productive-heading-03');
    color: $purple-60;
  }
}
</style>
