import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      React Chat {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabledButton, setDisabledButton] = useState(true);　// 「はじめる」ボタンを押下可能かどうかを判定
  const [formTextValue, setFormTextValue] = useState(''); // フォームの入力された文字列を管理
  const [isEditForm, setIsEditForm] = useState(false);

  // useStateの値を監視して、値が更新されたら実行される
  useEffect(() => {
    const disabled = formTextValue === ''
    setDisabledButton(disabled)
  }, [formTextValue])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックメール"
            name="name"
            autoFocus
            onChange={(e) => setFormTextValue(e.target.value) }
            onKeyDown={(e) => {
              if (isEditForm) return

              if(e.key === 'Enter') {
                setName(e.target.value);
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
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabledButton}
            className={classes.submit}
            onClick={() => {
              setName(formTextValue)
            }}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
