import React from 'react'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { pushMessage } from '../firebase'

const MessageSubmitButton = ({name, setInputText, inputText}) => {
  return (
    <IconButton
      disabled={!inputText.length}
      onClick={() => {
        pushMessage({ name: 'aaaa', text: inputText }) //firebaseへの登録
        setInputText('')
      }}
    >
      <SendIcon />
    </IconButton>
  )
}

export default MessageSubmitButton