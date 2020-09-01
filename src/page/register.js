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
    Input,
    CheckBox,
    Icon
} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            account: "",    // 账号
            password: '',   // 密码
            repeatPassword: '', // 确认密码
            identity: "dashen", // 是否为大神
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
     * 点击前往登录页面
     */
    hanldeGoLogin = () => {
        this.props.navigation.navigate('Login');
    }

    /**
     * 点击登录, 验证输入是否正确, 进行跳转操作
     */
    handleLogin = () => {
        const { account, password, repeatPassword } = this.state;
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

        if (password !== repeatPassword) {
            alert("两次输入的密码不相符");
            return false;
        }

        navigation.navigate('Scroll')
        // navigation.navigate("Scroll");

    }

    render() {
        return (
            <View style={styles.main}>

                <Text style={styles.label_text}>注册您的账号</Text>


                <Input
                    value={this.state.account}
                    onChangeText={e => this.handleChange("account", e)}
                    placeholder="请输入账号"
                    labelStyle={styles.label}
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
                    labelStyle={styles.label}
                    label="密码:"
                    leftIcon={
                        <Icon
                            name='lock'
                            type='material'
                            color='#517fa4'
                        />
                    }
                />
                <Input
                    value={this.state.repeatPassword}
                    secureTextEntry
                    onChangeText={e => this.handleChange("repeatPassword", e)}
                    placeholder="请重复密码"
                    labelStyle={styles.label}
                    label="重复密码:"
                    leftIcon={
                        <Icon
                            name='lock'
                            type='material'
                            color='#517fa4'
                        />
                    }
                />
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.label}>您的身份: </Text>
                    <CheckBox
                        title='大神'
                        containerStyle={styles.checkBox}
                        checked={this.state.identity === 'dashen'}
                        onPress={() => this.setState({ identity: 'dashen' })}
                        right={true}
                    />

                    <CheckBox
                        center
                        title='老板'
                        containerStyle={styles.checkBox}
                        checked={this.state.identity === 'boss'}
                        onPress={() => this.setState({ identity: 'boss' })}
                        right={true}
                    />

                </View>
                <TouchableOpacity onPress={this.handleLogin}>
                    <View style={styles.login}>
                        <Text style={styles.login_text}>注册新账号</Text>
                    </View>
                </TouchableOpacity>

                <Text onPress={this.hanldeGoLogin} style={styles.register}>已有账号?</Text>
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
        padding: 40,
        paddingBottom: 120,
    },
    label_text: {
        fontSize: 16,
        marginBottom: 50,
    },
    welcome: {
        marginTop: 100
    },
    banner: {
        width: screenWidth,
        height: 330 * (screenWidth / 750),
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
    checkBoxContainer: {
        width: screenWidth,
        paddingHorizontal: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        color: "#666",
        marginRight: 20
    },
    checkBox: {
        backgroundColor: "#f5f5f5",
        width: 80
    }

})