const cvModules = import.meta.glob('../assets/cv/*.pdf', { query: '?url', import: 'default', eager: true })

const cvFiles = Object.values(cvModules)

export const getCvUrl = () => {
  return cvFiles.length > 0 ? cvFiles[0] : null
}
