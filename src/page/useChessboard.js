/*
    自定义棋盘规则hooks
*/


import React, { Component, useState, useEffect } from 'react';



/** 
 * @function useChessboard 设置棋盘操作
 * @returns {useState} 
 * 
 */
export  function useChessboard( chessList ) {

    return useState(chessList)
}