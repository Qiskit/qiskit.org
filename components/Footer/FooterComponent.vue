<template>
  <footer class="page-footer">
    <section
      class="page-footer__primary"
      :class="`page-footer__primary_theme_${theme}`"
    >
      <div
        :class="oldContainer ? 'page-footer__primary-container' : 'cds--grid'"
      >
        <div class="cds--row">
          <div class="cds--col-lg-4 cds--col-md">
            <UiLogo
              class="page-footer__logo"
              :class="`page-footer__logo_theme_${theme}`"
            />
          </div>
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            class="cds--col-lg-3 cds--col-sm"
            v-bind="sectionElements"
            :theme="theme"
          />
          <FooterSection
            class="cds--col-lg-3 cds--col-md page-footer__stay-connected"
            v-bind="stayConnectedElements"
            icons-only
            :theme="theme"
          />
        </div>
      </div>
    </section>
    <section
      class="page-footer__secondary"
      :class="`page-footer__secondary_theme_${theme}`"
    >
      <div
        class="page-footer__secondary-container"
        :class="{ 'cds--grid': !oldContainer }"
      >
        <div class="caption" :class="`page-footer__copyright_theme_${theme}`">
          ©Qiskit | All Rights Reserved
        </div>
        <div class="page-footer__secondary-links">
          <UiBasicLink
            v-for="link in secondaryFooterLinks"
            :key="link.label"
            class="caption page-footer__secondary-link"
            :class="`page-footer__secondary-link_theme_${theme}`"
            v-bind="link"
          >
            {{ link.label }}
          </UiBasicLink>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import LogoMedium20 from "@carbon/icons-vue/lib/logo--medium/20";
import LogoSlack20 from "@carbon/icons-vue/lib/logo--slack/20";
import LogoTwitter20 from "@carbon/icons-vue/lib/logo--twitter/20";
import LogoYouTube20 from "@carbon/icons-vue/lib/logo--youtube/20";
import { SocialMedia } from "~/constants/links";
import type { Link, LinkWithIcon } from "~/types/links";

interface Props {
  oldContainer?: boolean;
  theme?: "light" | "dark";
}

interface LinksGroup {
  title: string;
  elements: Link[];
}

interface LinksWithIconGroup {
  title: string;
  elements: LinkWithIcon[];
}

withDefaults(defineProps<Props>(), {
  oldContainer: false,
  theme: "light",
});

const footerElements: LinksGroup[] = [
  {
    title: "Learn",
    elements: [
      {
        label: "Textbook",
        url: "/learn",
      },
      {
        label: "Tutorials",
        url: "https://qiskit.org/documentation/tutorials.html",
        segment: {
          cta: "tutorials",
          location: "menu",
        },
      },
      {
        label: "Videos",
        url: "https://www.youtube.com/qiskit",
      },
    ],
  },
  {
    title: "Community",
    elements: [
      {
        label: "Events",
        url: "/events",
        segment: {
          cta: "events",
          location: "menu",
        },
      },
      {
        label: "Advocates",
        url: "/advocates#become-an-advocate",
      },
      {
        label: "Code of conduct",
        url: "https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md",
        segment: {
          cta: "code-of-conduct",
          location: "footer",
        },
      },
    ],
  },
  {
    title: "Support",
    elements: [
      SocialMedia.github,
      SocialMedia.support,
      {
        label: "Documentation",
        url: "https://qiskit.org/documentation/",
      },
    ],
  },
];

const stayConnectedElements: LinksWithIconGroup = {
  title: "Stay Connected",
  elements: [
    {
      ...SocialMedia.twitter,
      icon: LogoTwitter20,
    },
    {
      ...SocialMedia.slack,
      icon: LogoSlack20,
    },
    {
      ...SocialMedia.youtube,
      icon: LogoYouTube20,
    },
    {
      ...SocialMedia.medium,
      icon: LogoMedium20,
    },
  ],
};

const secondaryFooterLinks: Link[] = [
  {
    label: "Terms of use",
    url: "https://www.ibm.com/legal?lnk=flg-tous-usen",
  },
  {
    label: "Accessibility",
    url: "https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen",
  },
  {
    label: "Contact",
    url: "mailto:hello@qiskit.org",
  },
  {
    label: "Privacy",
    url: "https://quantum-computing.ibm.com/terms/privacy",
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.page-footer {
  .page-footer__primary {
    padding: carbon.$spacing-07 0;

    &_theme_light {
      background-color: qiskit.$background-color-lighter;
    }

    &_theme_dark {
      background-color: qiskit.$background-color-darker;
    }
  }

  .page-footer__secondary {
    padding: carbon.$spacing-07 0;
    padding-bottom: carbon.$spacing-07 + 2.5rem; // make room for the "cookies preferences" button

    &_theme_light {
      background-color: qiskit.$background-color-white;
    }

    &_theme_dark {
      background-color: qiskit.$background-color-black;
    }
  }

  &__primary-container {
    @include qiskit.contained;
  }

  &__logo {
    height: 32px;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-07;
    }

    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }

  &__secondary-link {
    margin-left: carbon.$spacing-07;
    text-decoration: none;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-05;
    }

    &:hover {
      text-decoration: underline;
    }

    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }

  &__secondary-container {
    display: flex;
    justify-content: space-between;

    &:not(.cds--grid) {
      @include qiskit.contained;
    }
  }

  &__secondary-links {
    display: flex;
    justify-content: space-between;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__stay-connected {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-07;
    }
  }
}
</style>
