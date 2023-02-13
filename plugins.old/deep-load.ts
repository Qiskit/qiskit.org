// /**
//  * The format of the sections inside the frontmatter of card TOCs.
//  * The "slim" qualificative reminds this format just contain reference to
//  * other `.md` documents with the extended content of the card.
//  */
// interface SlimCardSection {
//   /** Title of the section. */
//   title: string

//   /** Id for the section. */
//   anchor?: string

//   /** Base path for the section. */
//   basepath: string

//   /** Each collection is a map of a unique id and a list of cards to embed. */
//   collections?: Map<string, string[]>
// }

// interface DeepLoadOptions {
//   /**
//    * Path to prepend to the file references, including the TOC file and all
//    * the internal references to `.md` files.
//    */
//   basePath: string
// }

// export default ({ app }: { app: any }) => {
//   async function loadToc (source: string): Promise<any> {
//     const toc: any[] = []
//     const attrs = (await import(`~/content/${source}`)).attributes
//     let entry = null
//     // XXX: Conversion to an array is needed because of:
//     // https://github.com/hmsk/frontmatter-markdown-loader/issues/50
//     for (let i = 0; (entry = attrs[i]) !== undefined; i++) {
//       toc.push(entry)
//     }
//     return toc
//   }

//   async function embedDocumentsInPlace (section: SlimCardSection, basepath: string) {
//     const collections: any = section.collections
//     if (typeof collections === 'undefined') { return }
//     for (const aCollection of Object.keys(collections)) {
//       const sectionBasepath =
//         typeof section.basepath !== 'undefined' ? section.basepath : basepath

//       collections[aCollection] = await Promise.all(collections[aCollection].map(
//         (path: any) => import(`~/content/${sectionBasepath}${path}`)
//       ))
//     }
//   }

//   /**
//    * Load a table of contents (TOC) file and embed the `.md` references in
//    * place. The TOC file is a `.md` file whose frontmatter is **a list** of
//    * [[SlimSections]].
//    *
//    * @param filePath the TOC file path inside the `~/contents/` folder.
//    * @param options optional modifiers.
//    */

//   const cache: any = {}

//   async function deepLoadCardToc (
//     filePath: string,
//     options: DeepLoadOptions = { basePath: '' }
//   ): Promise<any> {
//     const { basePath } = options
//     const key = `${basePath}${filePath}`

//     if (!(key in cache)) {
//       const toc = await loadToc(key)
//       for (const aSection of toc) {
//         await embedDocumentsInPlace(aSection, basePath)
//       }
//       cache[key] = toc
//     }
//     return cache[key]
//   }

//   app.deepLoadCardToc = deepLoadCardToc
// }
