import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {
    Input
} from 'react-native-elements'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            account: "",
            password: ''
        }
    }

    static propTypes = {

    }

    handleChange = (stateName, stateValue) => {
        this.setState({
            [stateName]: stateValue
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <Input
                    value={this.state.account}
                    onChangeText={e => this.handleChange("account", e)}
                    //   onChange={this.handleChange}
                    placeholder="请输入账号"
                    label="账号"
                />
                <Input
                    value={this.state.password}
                    onChangeText={e => this.handleChange("password", e)}
                    //   onChange={this.handleChange}
                    placeholder="请输入密码"
                    label="密码"
                />
                <TouchableOpacity>
                    <View style={styles.login}>
                        <Text>登陆</Text>
                    </View>

                </TouchableOpacity>
                {/* <Text style={styles.welcome}>欢迎登陆本人的storeDemo系统</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    welcome: {
        marginTop: 100
    },
    login: {
        // flex: 1,
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#f66666"
    }
})