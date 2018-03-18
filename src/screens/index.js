import { Navigation } from 'react-native-navigation'

import mainPage from './mainPage/mainPage'
import createPage from './createPage/createPage'
import pinCodePage from './pinCodePage/pinCodePage'
import votingPage from './votingPage/votingPage'

export const registerScreens = () => {
  Navigation.registerComponent('votestMobile.mainPage', () => mainPage )
  Navigation.registerComponent('votestMobile.createPage', () => createPage )
  Navigation.registerComponent('votestMobile.pinCodePage', () => pinCodePage )
  Navigation.registerComponent('votestMobile.votingPage', () => votingPage )
}
