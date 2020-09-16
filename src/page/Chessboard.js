import React, { Component, useState, useEffect } from 'react'
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
} from 'react-native-elements'
import { useChessboard } from '@/page/useChessboard';

/*
    骑砍二中古典象棋为, 9*9, 中间为王座, 象征这当初卡拉迪亚大陆帝国的王被各路入侵围攻的险境,
    攻击方(offense),  代表攻击的各路诸侯, 目的为消灭王座上的卡拉迪亚的王,
    防守方(defende),  代表忠心于王的军队, 目的在于护送王离开战场(走到棋盘边界)或者杀死所有的入侵者
    王座(throne), 国王
    , 属于防守方实力, 但是王座可以认为是任一方的中立
*/
const chessInitList = [
    [undefined, undefined, undefined, "offense", "offense", "offense", undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, "offense", undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, "defende", undefined, undefined, undefined, undefined],
    ["offense", undefined, undefined, undefined, "defende", undefined, undefined, undefined, "offense"],
    ["offense", "offense", "defende", "defende", "throne", "defende", "defende", "offense", "offense"],
    ["offense", undefined, undefined, undefined, "defende", undefined, undefined, undefined, "offense"],
    [undefined, undefined, undefined, undefined, "defende", undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, "offense", undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, "offense", "offense", "offense", undefined, undefined, undefined],
]


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Chessboard(props) {



    return (<View style={styles.root}>
        <PackChess />
    </View>)
}


// 封装的棋盘
function PackChess(props) {
    const [chessList, setChessList] = useChessboard(chessInitList);
    console.log(chessList)
    return (<View style={styles.chessboard}>
        {
            chessList.map((rowItem, rowIndex) => (<View key={rowIndex} style={styles.row}>
                {
                    rowItem.map((colItem, colIndex) => (<View key={colIndex} style={[styles.chessItem,colItem === 'throne' ? styles.throneSite : '' ]}>
                      
                        <View style={styles[colItem]}></View>
                    </View>))
                }
            </View>))
        }
    </View>)
}


// 棋子ui
function Chess(props) {

    return (<view style={styles.chessItem}>

    </view>)
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    chessboard: {
        flexDirection: "column",
        width: screenWidth * 0.8,
        height: screenWidth * 0.8,
        backgroundColor: "#ccc"
    },
    row: {
        flex: 1,
        flexDirection:'row'
    },
    chessItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#666",
        justifyContent:'center',
        alignItems:'center'
    },  

    throneSite: {
        backgroundColor: 'brown'
    },

    /** 空棋子位 */
    undefined: {

    },

    /* 黑棋子 */
    offense: {
        width: "80%",
        height:"80%",
        backgroundColor:"#666",
        borderRadius: 50,
    },

    /* 白色棋子 */
    defende: {
        width: "80%",
        height:"80%",
        backgroundColor:"#fff",
        borderRadius: 50,
    },
    
     /* 王 */
    throne: {
        width: "80%",
        height:"80%",
        backgroundColor:"#c5a5c4",
        borderRadius: 50,
    }
})
