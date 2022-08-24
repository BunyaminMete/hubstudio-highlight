# Hubstudio Highlight

> This reusable component takes 2 parameters. First parameter(text), second parameter(search). Text will be the text content of your division, and search is the pattern that you are looking for inside text.

[![NPM](https://img.shields.io/npm/v/hubstudio-highlight.svg)](https://www.npmjs.com/package/hubstudio-highlight) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install


~npm
```bash
npm install --save hubstudio-highlight
```

~yarn
```bash
yarn add hubstudio-highlight
```

## Usage

```jsx
import React, { Component } from 'react'

import { HighLight } from 'hubstudio-highlight'
import 'hubstudio-highlight/dist/index.css' //disabled.

class Example extends Component {
  render() {
    return <Highlight text='' search='' />
  }
}
```

## License

MIT © [BunyaminMete](https://github.com/BunyaminMete)
