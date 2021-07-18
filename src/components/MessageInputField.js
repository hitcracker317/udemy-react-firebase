import React from 'react';
import { makeStyles }from '@material-ui/core/styles'
import { Grid, Avatar } from '@material-ui/core'
import { gravatarPath } from '../gravatar.js'

import MessageField from './MessageField'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '30px'
  }
})

const MessageInputField = ({ name }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>
          <MessageField />
        </Grid>
        <Grid xs={1}>
          送信
        </Grid>
      </Grid>
    </div>
  )

}
export default MessageInputField