import { Navigation } from 'react-native-navigation'

import mainPage from './mainPage'

export const registerScreens = () => {
  Navigation.registerComponent('votestMobile.mainPage', () => mainPage )
}
