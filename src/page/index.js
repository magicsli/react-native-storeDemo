import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    StyleSheet,
    Text
} from 'react-native'


export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            text: "hello word; "
        }
    }

    static propTypes = {

    }

    render() {
        return (
            <View >
                <Text>{ this.state.text }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({


})