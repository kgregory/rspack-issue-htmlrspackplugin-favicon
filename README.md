# Test of Rspack Favicon Behavior

## Test Steps

- Clone the repo
- Run `npm install`

### Test absolute paths

- Run `npm run build`
- `dist/index.html` will contain `<link rel="icon" href="/<full filesystem path>" />`
- Webpack would have been `<link rel="icon" href="/favicon.ico" />`

### Test relative paths

- Run `npm run build:relative`
- `dist/index.html` will contain `<link rel="icon" href="/static\favicon.ico" />`
- Webpack would have been `<link rel="icon" href="/favicon.ico" />`
