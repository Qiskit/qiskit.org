import fs from 'fs'
import { copySync } from 'fs-extra' // remove in Node>=16.7.0 and just use fs
import yaml from 'js-yaml'

type PackageInfo = {
  name: string,
  version: string
}

export default function copyTextbookAssets (nodeModulesPath: string,
  imageOutputPath: string,
  tocOutputPath: string) {
  // Copies the information and assets from the qiskit-textbook-meta packages
  // in node_modules to the content folder.
  const moduleDirs: string[] = fs.readdirSync(nodeModulesPath, { withFileTypes: true })
    .filter(x => x.isDirectory())
    .map(x => x.name)

  for (const dir of moduleDirs) {
    const modulePath = `${nodeModulesPath}/${dir}`
    if (!fs.existsSync(`${modulePath}/package.json`)) {
      continue
    }

    // Open package.json
    const packageInfo: PackageInfo = yaml.load(fs.readFileSync(`${modulePath}/package.json`).toString()) as PackageInfo
    if (packageInfo.name !== 'qiskit-textbook-meta') {
      continue
    }

    // Create toc.json from toc.yaml
    const toc = yaml.load(
      fs.readFileSync(`${modulePath}/content/toc.yaml`)
        .toString()
    )
    if (!fs.existsSync(`${tocOutputPath}/${packageInfo.version}`)) {
      fs.mkdirSync(`${tocOutputPath}/${packageInfo.version}`, { recursive: true })
    }
    fs.writeFileSync(`${tocOutputPath}/${packageInfo.version}/toc.json`, JSON.stringify(toc))

    // Copy images across
    copySync(`${nodeModulesPath}/${dir}`,
              `${imageOutputPath}/${packageInfo.version}`,
              { overwrite: true }
    )
    for (const file of ['README.md', 'LICENSE', 'CODE_OF_CONDUCT.md']) {
      fs.unlinkSync(`${imageOutputPath}/${packageInfo.version}/${file}`)
    }
  }
}
