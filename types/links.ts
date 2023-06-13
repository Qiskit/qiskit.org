import LogoMedium20 from "@carbon/icons-vue/lib/logo--medium/20";
import LogoSlack20 from "@carbon/icons-vue/lib/logo--slack/20";
import LogoTwitter20 from "@carbon/icons-vue/lib/logo--twitter/20";
import LogoYouTube20 from "@carbon/icons-vue/lib/logo--youtube/20";
import { CtaClickedEventProp } from "~/types/segment";

interface Link {
  label: string;
  segment?: CtaClickedEventProp;
  title?: string;
  url: string;
}

interface LinkWithIcon extends Link {
  icon?:
    | typeof LogoMedium20
    | typeof LogoSlack20
    | typeof LogoTwitter20
    | typeof LogoYouTube20;
}

export { Link, LinkWithIcon };
