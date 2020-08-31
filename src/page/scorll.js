import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
    ScrollView,
    View,
    Text,
    RefreshControl,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';


import {
    getContact
} from '@/api/test';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class scorll extends PureComponent {
    static propTypes = {

    }

    state = {
        dataList: [],
        wx_name: 'text',
        wx_tel: '',
        page: 1,
        limit: 10,
        agent_id: -1,
        top_img: 'null',
        loading: false,
        frist: {
            main_title: '',
            cover_image: '',
            send_date: ''
        }
    }

    // 处理列表下拉刷新
    handleRefresh = () => {
        this.setState({
            page: 1,
            dataList: [],
            frist: {
                main_title: '',
                cover_image: '',
                send_date: ''
            }
        }, () => this.getData());

    }

    // 获取页面数据
    getData = () => {
        this.setState({
            loading: true
        })
        getContact({
            page: this.state.page,
            agent_id: this.state.agent_id,
            limit: this.state.limit
        }).then(res => {
            console.log(res)
            if (res.code === 1000) {
                let { page, dataList } = this.state;
                let resList = res.data.list;
                this.setState({
                    frist: page === 1 ? resList[0] : this.data.frist,
                    dataList: page === 1 ? resList.splice(1, resList.length - 1) : dataList.concat(resList),
                    page: resList.length > 0 ? page + 1 : page,
                    top_img: res.data.top_img
                })
            }

        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    componentDidMount() {
        this.getData();
    }

    _returnItem = ({ item }) => {
        return (
            <View style={styles.item} key={item.id}>

                <View style={styles.itemInfo}>
                    <Text numberOfLines={2} style={styles.title}>{item.main_title}</Text>
                    <Text style={styles.sendDate}>{item.send_date}</Text>
                </View>
                <Image source={{ uri: item.cover_image, }} style={styles.itemImage} />
            </View>)
    }

    render() {

        const {
            dataList
        } = this.state;
        return (
            <View style={styles.root}>
                <Image style={styles.top_img} source={
                    this.state.top_img
                        ? { uri: this.state.top_img, width: screenWidth, height: 160 }
                        : require("@/assets/img/girl.jpg")
                } />
                <View style={styles.main}>

                    {/* 使用FlatList, 使用起来和Android中的Adapter一样, 可重复渲染, 复用性高, 但是需注意此方法item中不宜保存状态数据,  */}
                    <FlatList
                        data={dataList}
                        refreshing={this.state.loading}
                        onRefresh={this.handleRefresh}
                        extraData={this.state.loading}
                        renderItem={this._returnItem}
                        ListHeaderComponent={<View style={styles.frist}>
                            <Text style={styles.title}>{this.state.frist.main_title}</Text>
                            <Image style={styles.fristImg} source={{
                                uri: this.state.frist.cover_image,
                                width: "100%",
                                height: 266
                            }} ></Image>
                            <Text style={styles.sendDate}>{this.state.frist.send_date}</Text>

                        </View>}
                        keyExtractor={(item) => "" + item.id}
                    />

                    {/* 使用ScrollView, 性能不足, 但是灵活,适用于多变业务 */}
                    <ScrollView style={{ display: 'none' }}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.loading}
                                onRefresh={this.handleRefresh}
                            />
                        }
                    >
                        <View style={styles.frist}>
                            <Text style={styles.title}>{this.state.frist.main_title}</Text>
                            <Image style={styles.fristImg} source={{
                                uri: this.state.frist.cover_image,
                                width: "100%",
                                height: 266
                            }} ></Image>
                            <Text style={styles.sendDate}>{this.state.frist.send_date}</Text>

                        </View>

                        {
                            this.state.dataList.map(item => (<View style={styles.item} key={item.id}>

                                <View style={styles.itemInfo}>
                                    <Text numberOfLines={2} style={styles.title}>{item.main_title}</Text>
                                    <Text style={styles.sendDate}>{item.send_date}</Text>
                                </View>
                                <Image source={{
                                    uri: item.cover_image,

                                }}
                                    style={styles.itemImage}
                                />

                            </View>))
                        }
                    </ScrollView>

                </View>

            </View>

        )
    }
}

/* */

const styles = StyleSheet.create({
    main: {
        width: "100%",
        marginTop: -20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
    },
    frist: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    fristImg: {
        borderRadius: 6,
        marginTop: 15,
        marginBottom: 11,
    },
    sendDate: {
        color: "#999"
    },

    item: {
        // width: screenWidth,
        // height: 60,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20
    },
    itemInfo: {
        flex: 1,
        marginRight: 30,
        justifyContent: "space-between",

    },
    itemImage: {
        width: 110,
        height: 73,
        borderRadius: 6,
        flexShrink: 0,
    }
})