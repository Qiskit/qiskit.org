import { extractToc, formatTocLines, TocType } from '~/hooks/textbook-toc-utils'

const sampleHTML = `<p><strong>Chapter 0. Title 0</strong><br /></p>
<p>&nbsp; &nbsp; 0.0 <a href="./ch-prerequisites/python-and-jupyter-notebooks.html">Topic 0.0</a><br />
&nbsp; &nbsp; 0.1 <a href="./ch-prerequisites/qiskit.html">Topic 0.1</a><br />
<p><strong>Chapter 1. Title 1</strong><br /></p>
<p>&nbsp; &nbsp; 1.0 <a href="./ch-states/introduction.html">Topic 1.0</a><br />
&nbsp; &nbsp; 1.1 <a href="./ch-states/atoms-computation.html">Topic 1.1</a><br />`

const expectedToc: TocType = [
  ['Chapter 0. Title 0', [
    '0.0 Topic 0.0',
    '0.1 Topic 0.1'
  ]],
  ['Chapter 1. Title 1', [
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
