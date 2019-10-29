type TocType = Array<[string, string[]]>

export { extractToc, formatTocLines, TocType }

function extractToc(indexContent: string): TocType {
  // Chapter titles are of form `Chapter X. Chapter title<`.
  const allChapters = (indexContent.match(/Chapter\s+\d+\.\s+[^<]+/g) || [])
    .map(entry => entry.trim())
  // Topic titles are of form `X.Y <a ...>Topic Title<`
  const allTopics = (indexContent.match(/(\d+.\d+\s+)<a[^>]+([^<]+)/g) || [])
    .map(entry => entry.replace(/<a[^>]+>/, '').trim())

  return allChapters.reduce<TocType>((output, title, index) => {
    const chapters = getTopics(index, allTopics)
    output.push([title, chapters])
    return output
  }, [])

  function getTopics(index: number, allTopics: string[]) {
    return allTopics.filter(topic => topic.startsWith(`${index}.`))
  }
}

function formatTocLines(toc: TocType, header: string = 'Table of Contents'): string[] {
  return withHeader(
    header,
    toc.reduce<string[]>((output, [title, chapters]) => {
      output.push(formatTitle(title))
      output.push(...formatChapters(chapters))
      return output
    }, [])
  )

  function withHeader(title: string, lines: string[]): string[] {
    lines.unshift(`## ${title}`)
    return lines
  }

  function formatTitle(title: string): string {
    return `### ${title}`
  }

  function formatChapters(chapters: string[]): string[] {
    return chapters
      .map(title => `- ${(title.match(/\s.+/) as string[])[0].trim()}`)
  }
}
