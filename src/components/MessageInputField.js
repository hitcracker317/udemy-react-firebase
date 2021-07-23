import React, { useState, useRef } from 'react';
import { makeStyles }from '@material-ui/core/styles'
import { Grid, Avatar } from '@material-ui/core'
import { gravatarPath } from '../gravatar.js'

import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '30px'
  }
})

const MessageInputField = ({ name }) => {
  const inputElement = useRef(null) // DOMの参照
  const [inputText, setInputText] = useState('')

  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputElement={inputElement}
            name={name}
            setInputText={setInputText}
            inputText={inputText}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputElement={inputElement}
            name={name}
            setInputText={setInputText}
            inputText={inputText}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default MessageInputField