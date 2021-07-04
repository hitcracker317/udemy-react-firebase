import React, { useState } from 'react';

import Main from './Main.js';
import SignIn from './SignIn.js';

export default () => {
  // React Hook
  // 第一引数：グローバルな変数名, 第二引数：グローバルな変数を更新するための関数名
  const [name, setName] = useState('');
  console.log({ name })

  if (name.length) {
    return <Main name={name}/>;
  } else {
    return <SignIn setName={setName}/>;
  }
};
