import React, { useEffect, useRef } from 'react'

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { gravatarPath } from '../gravatar.js'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const MessageItem = ({name , text, isLastItem }) => {
  const ref = useRef(null)
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  useEffect(() => {
    if(isLastItem) {
      // 最新の投稿内容までスクロールする
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLastItem])

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  )
}
export default MessageItem