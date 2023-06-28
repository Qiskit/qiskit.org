<template>
  <div>
    <svg
      class="sketched-logo__fill"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 140.7 140.9"
      xml:space="preserve"
    >
      <radialGradient
        id="SVGID_1_"
        cx="403.9"
        cy="-805.7"
        r="58.4"
        gradientTransform="matrix(.96 .21 .14 -.63 -181 -520.4)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".2" stop-color="#fff" stop-opacity="0" />
        <stop offset="1" stop-color="#fff" />
      </radialGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M131.1 103.1C131 90.2 100.6 82.9 72 82.6c-30.3 0-61.8 7.7-61.8 20.5v.1c.1 12.9 30.5 20.2 59.1 20.5 30.3 0 61.7-7.7 61.8-20.6zM69.3 119c-32-.4-54.3-8.6-54.4-15.8.1-7.5 24.5-15.9 57.1-15.9 32 .4 54.3 8.6 54.4 15.8-.1 7.5-24.5 15.9-57.1 15.9z"
      />
      <path
        d="M70.8 140.3a70 70 0 1161.4-103 70 70 0 01-61.4 103zM70.6 5.2a65 65 0 10.2 130.4 65.2 65.2 0 0057.4-96A65 65 0 0070.6 5.2z"
        class="sketched-logo__st1"
      />
      <radialGradient
        id="SVGID_2_"
        cx="62.6"
        cy="-1504.1"
        r="35"
        gradientTransform="matrix(.98 0 0 -.6 9.6 -788.7)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" stop-opacity="0" />
        <stop offset="1" stop-color="#fff" />
      </radialGradient>
      <path
        fill="url(#SVGID_2_)"
        d="M88.7 130.9c-.1-5.3-7.8-9.4-18-9.4s-18 4-18 9.4v.1c.1 5.4 7.8 9.4 18 9.4s18-4 18-9.5zm-18 5c-8.1 0-13.2-2.9-13.3-5s5.2-5 13.3-5 13.2 2.9 13.3 5-5.3 5-13.3 5z"
      />
      <radialGradient
        id="SVGID_3_"
        cx="63.1"
        cy="-846.8"
        r="60.3"
        gradientTransform="matrix(.98 0 0 -.75 9.5 -603.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".2" stop-color="#fff" stop-opacity="0" />
        <stop offset="1" stop-color="#fff" />
      </radialGradient>
      <path
        fill="url(#SVGID_3_)"
        d="M140.6 70.4c-.2-13.8-35.3-21.8-68.4-22.1-35 0-71.4 8.3-71.6 22.1v.1C.9 84.3 36 92.2 69.1 92.6c35 0 71.3-8.3 71.5-22.2 0 .1 0 0 0 0zM69.1 87.8c-37.5-.4-63.5-9.5-63.7-17.4C5.6 62.2 34.1 53 72.2 53c37.4.4 63.5 9.5 63.7 17.4-.1 8.2-28.7 17.4-66.8 17.4z"
      />
      <radialGradient
        id="SVGID_4_"
        cx="834.3"
        cy="1553.5"
        r="40.7"
        gradientTransform="matrix(.4 .89 1.1156 -.5047 -2032 43.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".3" stop-color="#fff" stop-opacity="0" />
        <stop offset=".9" stop-color="#fff" />
      </radialGradient>
      <path
        fill="url(#SVGID_4_)"
        d="M72 16.9c-30.4 0-61.8 7.7-61.8 20.6s30.4 20.3 59 20.6c30.4 0 61.8-7.7 61.8-20.6s-30.3-20.3-59-20.6zm-2.7 36.4C37.3 53 15 44.7 15 37.5c0-7.5 24.4-15.9 57-15.9 32 .4 54.3 8.6 54.3 15.9 0 7.5-24.4 15.8-57 15.8z"
      />
      <path
        d="M70.4.4c-5.1 0-16.9.8-16.9 7.9s11.8 7.9 16.9 7.9 16.9-.8 16.9-7.9S75.5.4 70.4.4zm0 4.8c7.2 0 12.1 1.6 12.1 3.1s-5 3.1-12.1 3.1-12.1-1.7-12.1-3.1 5-3.1 12.1-3.1zM100 112.8l-.9.1-26.3-45.5-24-41.4c2.1-2.6 1.7-6.4-.9-8.4s-6.4-1.7-8.4.9-1.7 6.4.9 8.4c1.1.9 2.5 1.3 3.9 1.3l.8-.1 24 41.4 10.8 18.7L95.3 115c-2.1 2.6-1.7 6.3.8 8.4s6.3 1.7 8.4-.8a6 6 0 00-.8-8.4c-1-.9-2.3-1.4-3.7-1.4z"
        class="sketched-logo__st1"
      />
    </svg>
    <nuxt-img
      class="sketched-logo__sketch"
      format="webp"
      sizes="sm:300px md:600px xxl:700px"
      src="/images/learn/logo-sketch-lines.png"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.sketched-logo {
  &__fill {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    transform: translate(-49%, -50.8%);
  }

  &__sketch {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  &__st1 {
    fill: carbon.$white;
  }
}
</style>
