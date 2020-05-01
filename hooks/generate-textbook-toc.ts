import { URL } from 'url'
import fs from 'fs'

import axios from 'axios'

import { extractToc, formatTocLines } from './textbook-toc-utils'

/**
 * Extract the table of contents at `indexPath` and uses it to generate
 * a markdown TOC at `tocPath`, suitable for being rendered in `/education`.
 *
 * @param indexPath HTML file path or URL where the TOC is extracted from.
 * @param tocPath output Markdown file path where TOC is generated.
 */
export default async function generateTextbookToc (indexPath: string, tocPath: string) {
  const indexContent = await getSource(indexPath)
  const toc = extractToc(indexContent)
  const mdTocLines = formatTocLines(toc)
  fs.writeFileSync(tocPath, mdTocLines.join('\n') + '\n')
}

async function getSource (path: string): Promise<string> {
  try {
    const url = new URL(path)
    const response = await axios.get(url.href, { responseType: 'text' })
    return response.data
  } catch {}
  return fs.readFileSync(path, 'utf8')
}
