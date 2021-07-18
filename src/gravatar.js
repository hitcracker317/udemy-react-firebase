import crypto from 'crypto'

// gravatar使ってavatar画像を生成する関数
export const gravatarPath = (string) => {
  console.log(`string:${string}`)
  const lowerCaseString = string.trim().toLowerCase() //入力された文字を小文字にする
  const md5 = crypto.createHash('md5')
  const digest = md5.update(lowerCaseString, 'binary').digest('hex')
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`
}