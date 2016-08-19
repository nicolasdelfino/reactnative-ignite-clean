import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import StartScreen from '../Containers/StartScreen'
import SecondScreen from '../Containers/SecondScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='startScreen' component={StartScreen} title='Start Screen' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='secondScreen' component={SecondScreen} title='Second Screen' renderLeftButton={NavItems.hamburgerButton} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
