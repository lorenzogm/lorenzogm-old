module.exports = {
  './src/**/*.ts?(x)': (filenames) => [
    'npm run prettier:write',
    'npm run tsc',
    `next lint --fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
  ],
}
