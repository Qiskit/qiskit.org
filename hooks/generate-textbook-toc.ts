import fs from 'fs'
import { extractToc, formatTocLines } from './textbook-toc-utils'

/**
 * Extract the table of contents at `indexPath` and uses it to generate
 * a markdown TOC at `tocPath`, suitable for being rendered in `/education`.
 *
 * @param indexPath HTML file where the TOC is extracted from.
 * @param tocPath output Markdown file path where TOC is generated.
 */
export default function generateTextbookToc(indexPath: string, tocPath: string) {
  const indexContent = fs.readFileSync(indexPath, 'utf8')
  const toc = extractToc(indexContent)
  const mdTocLines = formatTocLines(toc)
  fs.writeFileSync(tocPath, mdTocLines.join('\n') + '\n')
}
