import { Navigation } from 'react-native-navigation';

import { registerScreens } from "./screens";

registerScreens();

export default class App {
  constructor() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'votestMobile.mainPage',
        navigatorStyle: {
          navBarHidden: true
        }
      }
    })
  }
}