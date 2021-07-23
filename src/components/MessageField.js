import React, { useState } from 'react'
import { TextField }from '@material-ui/core';

import { pushMessage } from '../firebase'

const MessageField = ({inputElement, name, setInputText, inputText}) => {
  const [isEditForm, setIsEditForm] = useState(false)

  return (
    <TextField
      inputRef={inputElement}
      autoFocus
      onChange={(e) => {
        setInputText(e.target.value)
      }}
      value={inputText}
      onKeyDown={(e) => {
        const text = e.target.value

        if(!text.length || isEditForm) return

        if(e.key === 'Enter') {
          console.log(`firebaseに入力した文字をpush：${inputText}`)
          pushMessage({ name: 'aaaa', text: inputText })
          setInputText('')
          e.preventDefault()
        }
      }}
      onCompositionStart={() => {
        // 文字入力開始時のイベント
        setIsEditForm(true)
      }}
      onCompositionEnd={() => {
        // 文字入力完了時のイベント
        setIsEditForm(false)
      }}
      fullWidth={true}
    />
  )
}

export default MessageField