import { Navigation } from 'react-native-navigation'

import mainPage from './mainPage/mainPage'
import createPage from './createPage/createPage'
import pinCodePage from './pinCodePage/pinCodePage'

export const registerScreens = () => {
  Navigation.registerComponent('votestMobile.mainPage', () => mainPage )
  Navigation.registerComponent('votestMobile.createPage', () => createPage )
  Navigation.registerComponent('votestMobile.pinCodePage', () => pinCodePage )
}
