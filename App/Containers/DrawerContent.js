import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleOnStartScreen = () => {
    this.toggleDrawer()
    NavigationActions.startScreen()
  }

  handleOnSecondScreen = () => {
    this.toggleDrawer()
    NavigationActions.secondScreen()
  }

  handleOnThirdScreen = () => {
    this.toggleDrawer()
    NavigationActions.thirdScreen()
  }

  // <Image source={Images.logo} style={styles.logo} />
  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Start screen' onPress={this.handleOnStartScreen} />
        <DrawerButton text='Second screen' onPress={this.handleOnSecondScreen} />
        <DrawerButton text='Third screen' onPress={this.handleOnThirdScreen} />
      </ScrollView>
    ) 
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
