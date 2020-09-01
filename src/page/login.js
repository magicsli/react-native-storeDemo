import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    StyleSheet,
    Text,
    Image,
    CheckBox,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {
    Input,
    Icon
} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            account: "",
            password: '',
        }
    }

    static propTypes = {

    }

    /**
     * 公用state更新
     * @param {String|Number} stateName 需要更新的state名
     * @param {*} stateValue 需要更新的state值
     */
    handleChange = (stateName, stateValue) => {
        console.log(stateValue);
        this.setState({
            [stateName]: stateValue
        })
    }

    /**
     * 点击前往注册页面
     */
    handleGoRegister = () => {
        const { navigation } = this.props;
        navigation.navigate("Register");
    }

    /**
     * 点击登录, 验证输入是否正确, 进行跳转操作
     */
    handleLogin = () => {
        const { account, password } = this.state;
        const { navigation } = this.props;

        console.log(navigation)

        if (!/[a-zA-Z0-9_]{4,15}$/i.test(account)) {
            alert("请输入正确的账号");
            return false;
        }

        if (!/^[a-zA-Z0-9_]{5,17}$/i.test(password)) {
            alert("请输入正确的密码");
            return false;
        }
        navigation.navigate('Scroll');
        // navigation.navigate("Scroll");

    }

    render() {
        return (
            <View style={styles.main}>
                
                <View>
                    
                </View>
                <Image style={styles.banner} source={require("@/assets/img/boss.png")}></Image>


                <Input
                    value={this.state.account}
                    onChangeText={e => this.handleChange("account", e)}
                    placeholder="请输入账号"
                    label="账号:"
                    leftIcon={
                        <Icon
                            name='account-circle'
                            type='material'
                            color='#517fa4'
                        />
                    }
                />
                <Input
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={e => this.handleChange("password", e)}
                    placeholder="请输入密码"
                    label="密码:"
                    leftIcon={
                        <Icon
                            name='lock'
                            type='material'
                            color='#517fa4'
                        />
                    }
                />
                <TouchableOpacity onPress={this.handleLogin}>
                    <View style={styles.login}>
                        <Text style={styles.login_text}>登陆</Text>
                    </View>
                </TouchableOpacity>

                <Text onPress={this.handleGoRegister} style={styles.register}>还没有账号?</Text>
                {/* <Text style={styles.welcome}>欢迎登陆本人的storeDemo系统</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 120,
    },
    label_text: {
        fontSize: 16,
        marginBottom: 50,
    },
    welcome: {
        marginTop: 100
    },
    banner:{
        width: screenWidth,
        height: 330 * (screenWidth / 750),
        marginBottom: 30
    },
    login: {
        // flex: 1,
        width: 200,
        height: 40,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#409EFF",
    },
    login_text: {
        color: "#fff"
    },
    register: { // 注册
        fontSize: 12,
        paddingVertical: 10
    },
})