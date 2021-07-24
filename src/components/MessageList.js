import React, { useState, useEffect } from 'react'

import { messagesRef } from '../firebase'

import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MessageItem from './MessageItem'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%'
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles()

  // useEffectの第二引数に空の配列をセットすると第一引数内の処理が一回しか呼ばれない
  useEffect(() => {
    // orderByKey：新しい順にデータの値を取得
    // limitToLast：取得する上限数を設定
    messagesRef.orderByKey().limitToLast(15).on('value', (snapshot) => {
      const messages = snapshot.val()

      if (!messages) return // メッセージが一件も表示されないときはreturn

      const entries = Object.entries(messages) //Object.entries：Object形式を配列に変換
      const parseMessage = entries.map((entry) => {
        // 0: "-MfFyc_B6P7nRElEnGS_", 1: {name: "aaaa", text: "aaaaaaaaa"}
        const [key, messageObject] = entry
        return { key, ...messageObject }
      })
      setMessages(parseMessage)
    })
  }, [])
  return (
    <List className={classes.root}>
      {
        messages.map(({key, name , text}) => {
          return (
            <MessageItem key={key} name={name} text={text} />
          )
        })
      }
    </List>
  )
}
export default MessageList