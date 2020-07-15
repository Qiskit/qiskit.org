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
  $back-page-offset: 1rem;

  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -$back-page-offset;
    z-index: 1;
    width: 100%;
    height: 6.25rem;
    box-shadow: 0 23px 35px 0 $gray-100-a30;
    border-radius: 8px;
    transform-origin: center bottom;
    transform: scale(0.95);
  }

  &__page {
    position: relative;
    width: 100%;
    opacity: 0;
    background: $inverse-02;
    border-radius: 8px;
    padding: $spacing-07;
    transform-origin: center bottom;
    transform: scale(0.95) translateY($back-page-offset);
    transition: transform 300ms, opacity 300ms;

    &--active {
      opacity: 1;
      z-index: 2;
      transform: scale(1);
      box-shadow: 0 23px 35px 0 $gray-100-a30;
    }

    &--out {
      opacity: 0;
      z-index: 2;
      transform: scale(1.3) translateY(-2 * $back-page-offset);
      transition: transform 400ms, opacity 400ms;
    }
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
