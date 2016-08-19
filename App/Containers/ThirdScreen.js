import React, { PropTypes } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, LayoutAnimation, Alert } from 'react-native'
import { Colors, Fonts, Images } from '../Themes'
import { Metrics } from '../Themes/'
import { connect } from 'react-redux'
import R from 'ramda'
import styles from './Styles/ThemeScreenStyle'
import I18n from '../I18n/I18n.js'
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';

const colors = R.keys(Colors)
const types = R.keys(Fonts.type)
const fontStyles = R.keys(Fonts.style)

class ThirdScreen extends React.Component {

  componentWillMount () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  getGradient() {
      return ['#4E36AE', '#4C96DF'];
   }

   renderScreen() {
      return (<Text style={{ 
         fontFamily:'HelveticaNeue-Thin', 
         fontSize: 20,
         color: "#FFFFFF", 
         marginTop:100, 
         alignSelf:'center', 
         backgroundColor:'transparent' }}>Third screen</Text>)
   }

   render () {
      return (
         <LinearGradient colors={this.getGradient()} style={{flex:1}}>
            {this.renderScreen()}
         </LinearGradient>
      );
   }
}


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ThirdScreen)
