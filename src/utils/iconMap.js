import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'

const iconLibrary = {
  ...FiIcons,
  ...FaIcons,
  ...MdIcons,
  ...BiIcons,
}

export const getIconByName = (name) => {
  if (!name) return FiIcons.FiCircle
  return iconLibrary[name] || FiIcons.FiCircle
}
