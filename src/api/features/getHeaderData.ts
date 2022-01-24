import fs from 'fs'
import path from 'path'

import { HeaderProps } from '~/components'
import { startCase } from '~/utils'

import { FOLDER_PATH, GITHUB_LINK } from '../data'

export function getHeaderData(): HeaderProps {
  const categories = fs.readdirSync(path.join(FOLDER_PATH))

  const navigation = categories
    .filter((category) => category !== 'project-setup')
    .map((category) => ({
      href: category,
      name: startCase(category.replace('-', ' ')),
      current: false,
    }))

  return {
    navigation,
    githubLink: GITHUB_LINK,
  }
}
