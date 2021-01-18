const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
}

const colors = {
  dark: {
    textColor: '#fff',
    bgColor: '#121212',
    contBgColor: '#1a1a1a',
    contTextColor: '#d0d0d0',
    borderColor: '#3a3a3a',
    borderColor2: '#3a3a3a',
    commInsertBgColor: '#121212',
    popupBgColor: 'rgba(250, 250, 250, .8)',
    popupTextColor: '#000'
  },
  light: {
    textColor: '#262626',
    bgColor: '#fff',
    contBgColor: '#fafafa',
    contTextColor: '#262626',
    borderColor: '#dbdbdb',
    borderColor2: '#efefef',
    commInsertBgColor: '#efefef',
    popupBgColor: 'rgba(25, 25, 25, .8)',
    popupTextColor: '#fff'
  }
}

export const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  colors: colors
}