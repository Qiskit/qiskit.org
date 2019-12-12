import { extractToc, formatTocLines, TocType } from '~/hooks/textbook-toc-utils'

const sampleHTML = `<li class="c-sidebar__chapter">
  <a class="c-sidebar__entry "
    href=".html"
  >

      0.

    Title 0
  </a>
  <ul class="c-sidebar__sections ">
    <li class="c-sidebar__section">
      <a class="c-sidebar__entry "
        href="/textbook/ch-prerequisites/python-and-jupyter-notebooks.html"
      >

          0.0

        Topic 0.0
      </a>
    </li>
    <li class="c-sidebar__section">
      <a class="c-sidebar__entry "
        href="/textbook/ch-prerequisites/qiskit.html"
      >

          0.1

        Topic 0.1
      </a>
    </li>
  </ul>
</li>
<li class="c-sidebar__chapter">
  <a class="c-sidebar__entry "
    href=".html"
  >

      1.

    Title 1
  </a>
  <ul class="c-sidebar__sections ">
    <li class="c-sidebar__section">
      <a class="c-sidebar__entry "
        href="/textbook/ch-states/introduction.html"
      >

          1.0

        Topic 1.0
      </a>
    </li>
    <li class="c-sidebar__section">
      <a class="c-sidebar__entry "
        href="/textbook/ch-states/atoms-computation.html"
      >

          1.1

        Topic 1.1
      </a>
    </li>
  </ul>
</li>`

const expectedToc: TocType = [
  ['0. Title 0', [
    '0.0 Topic 0.0',
    '0.1 Topic 0.1'
  ]],
  ['1. Title 1', [
    '1.0 Topic 1.0',
    '1.1 Topic 1.1'
  ]]
]

describe('extractToc', () => {
  it('recognizes and matches chapters and topics', () => {
    expect(extractToc(sampleHTML)).toEqual(expectedToc)
  })
})

describe('formatTocLines', () => {
  it('generates a simplified markdown version of the toc', () => {
    expect(formatTocLines(expectedToc, 'Title')).toEqual([
      '## Title',
      '### Chapter 0. Title 0',
      '- Topic 0.0',
      '- Topic 0.1',
      '### Chapter 1. Title 1',
      '- Topic 1.0',
      '- Topic 1.1'
    ])
  })
})
