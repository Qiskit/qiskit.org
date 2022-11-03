import fs from 'fs'
import { copySync } from 'fs-extra' // remove in Node>=16.7.0 and just use fs
import yaml from 'js-yaml'

type PackageInfo = {
  name: string,
  version: string
}

export default function copyTextbookAssets (nodeModulesPath: string, outputPath: string) {
  // Copies the information and assets from the qiskit-textbook-meta packages
  // in node_modules to the content folder.
  const moduleDirs: string[] = fs.readdirSync(nodeModulesPath, { withFileTypes: true })
    .filter(x => x.isDirectory())
    .map(x => x.name)

  for (const dir of moduleDirs) {
    const packagePath = `${nodeModulesPath}/${dir}/package.json`
    if (!fs.existsSync(packagePath)) {
      continue
    }

    // Open package.json
    const packageInfo: PackageInfo = yaml.load(fs.readFileSync(packagePath).toString()) as PackageInfo
    if (packageInfo.name !== 'qiskit-textbook-meta') {
      continue
    }

    copySync(`${nodeModulesPath}/${dir}`,
              `${outputPath}/${packageInfo.version}`,
              { overwrite: true }
    )
  }
}
