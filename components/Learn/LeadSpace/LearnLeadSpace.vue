<template>
  <header class="learn-lead-space">
    <div class="learn-lead-space__container-wrapper">
      <div class="learn-lead-space__container">
        <div class="learn-lead-space__logo-container">
          <LearnLeadSpaceLogo class="learn-lead-space__logo" />
        </div>
        <div>
          <h1 class="learn-lead-space__headline">Qiskit Textbook</h1>
          <LearnMegaMenu
            id="learn-lead-space__mega-dropdown-menu"
            classes="learn-lead-space__dropdown cds--col-md-4 cds--col-lg-4 cds--no-gutter"
          />
        </div>
        <UiCta
          class="learn-lead-space__cta"
          label="Start learning"
          :segment="{ cta: 'start-learning', location: 'header' }"
          url="/learn/course/introduction-course"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-lead-space {
  background: linear-gradient(
    315deg,
    carbon.$cool-gray-10 0%,
    carbon.$blue-40 25%,
    carbon.$purple-70 100%
  );
  height: 37.5rem;

  &__headline {
    color: qiskit.$text-color-white;
    margin-bottom: carbon.$spacing-07;
  }

  &__container {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: carbon.$spacing-09;

    @include carbon.breakpoint-between(md, lg) {
      padding-top: carbon.$spacing-12;
    }

    &-wrapper {
      @include qiskit.responsive-grid-bg-strip(
        "/images/grid/grid-hero-textbook.svg",
        auto,
        95%
      );

      display: flex;
      height: 100%;
    }
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    padding-top: 100%;
    transform: translate(-50%, -50%);

    &-container {
      // the #{_______} is added to force scss to compile carbon.$spacing-11 value.
      --additional-width: #{carbon.$spacing-11};

      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100%;
      overflow: hidden;

      @include carbon.breakpoint-between(md, lg) {
        width: calc(50% + var(--additional-width));
      }

      @include carbon.breakpoint-down(md) {
        width: calc(80% + var(--additional-width));
        height: 80%;
      }
    }
  }

  &__dropdown {
    position: relative;
    z-index: 1;
  }

  &__cta {
    align-self: flex-end;

    // this is necessary to respect z ordering with the absolute elements.
    position: relative;
  }
}
</style>
