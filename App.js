import React,{Component} from 'react'
import RootRouter from './src/Routes/RootRouter'
import {View,Container,Text,Col} from 'native-base'

export default class App extends Component {
  render() {
     return <RootRouter />
  }
}