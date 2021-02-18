type SegmentData = {
  action: string
}

/**
 * Represent a navigation link for the menus of the site
 */
interface MegaMenuLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  segment?: SegmentData
  /** Only for <a> links. Use `_blank` to open the link in a new tab */
  target?: string
  /** Only for <a> links. Specifies the relationship between the current document
   *  and the linked document. Possible values: `nofollow`, `noreferrer`, `noopener`,
   *  `me` or a combination of them
   */
  rel?: string
}

type Links = MegaMenuLink

type LinksList = {
  title: string,
  links: Links[]
}

type Column = LinksList[]

const MEGA_MENU_LINKS_COLUMNS: Column[] = [
  // column 1
  [
    {
      title: 'Links 1',
      links: [
        {
          label: 'Some link label 1-1',
          target: '#'
        },
        {
          label: 'Some link label 1-2',
          target: '#'
        },
        {
          label: 'Some link label 1-3',
          target: '#'
        }
      ]
    },
    {
      title: 'Links 1-2',
      links: [
        {
          label: 'Some link label 1-2-1',
          target: '#'
        },
        {
          label: 'Some link label 1-2-2',
          target: '#'
        },
        {
          label: 'Some link label 1-2-3',
          target: '#'
        }
      ]
    }
  ],
  // column 2
  [
    {
      title: 'Links 2',
      links: [
        {
          label: 'Some link label 2-1-1',
          target: '#'
        },
        {
          label: 'Some link label 2-1-2',
          target: '#'
        },
        {
          label: 'Some link label 2-1-3',
          target: '#'
        }
      ]
    },
    {
      title: 'Links 2-2',
      links: [
        {
          label: 'Some link label 2-2-1',
          target: '#'
        },
        {
          label: 'Some link label 2-2-2',
          target: '#'
        },
        {
          label: 'Some link label 2-2-3',
          target: '#'
        }
      ]
    }
  ]
]

export {
  MEGA_MENU_LINKS_COLUMNS,
  MegaMenuLink
}
