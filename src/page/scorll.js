import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
    ScrollView,
    View,
    Text,
    RefreshControl,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';


import {
    getContact
} from '@/api/test';

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


    render() {

        const screenWidth = Dimensions.get("window").width;
        const screenHeight = Dimensions.get("window").height;

        return (
            <View style={styles.root}>
                <Image style={styles.top_img} source={{ uri: this.state.top_img, width: screenWidth, height: 160 }} />
                <View style={styles.main}>
                    <ScrollView
                        refreshControl={
                            /** 设置下拉刷新数据 */
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
                                <Image  source={{ 
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
        color:"#999"
    },

    item: {
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical: 20
    },
    itemInfo: {
        flex: 1,
        marginRight: 30,
        justifyContent:"space-between",
        
    },
    itemImage:{ 
        width: 110,
        height: 73,
        borderRadius: 6,
        flexShrink: 0,
    }
})