# Test of Rspack Favicon Behavior

## Test Steps

- Clone the repo
- Run `npm install`
- Run `npm build`

There will be a `dist` folder with two subfolders: `rs` and `webpack`. Those folders will each have an `absolute` and `relative` subfolder.

- `dist/rs/absolute/index.html` shows the output when running `rspack` with an absolute path for the favicon
  - It will contain `<link rel="icon" href="/static/favicon.ico" />`
  - The `favicon.ico` will be located at subfolder `static/favicon.ico`
- `dist/rs/relative/index.html` shows the output when running `rspack` with a relative path for the favicon
  - It will contain `<link rel="icon" href="/static/favicon.ico" />`
  - The `favicon.ico` will be located at subfolder `static/favicon.ico`
- `dist/webpack/absolute/index.html` shows the output when running `webpack` with an absolute path for the favicon
  - It will contain `<link rel="icon" href="/favicon.ico">`
  - The `favicon.ico` will will be in this folder
- `dist/webpack/relative/index.html` shows the output when running `webpack` with a relative path for the favicon
  - It will contain `<link rel="icon" href="/favicon.ico">`
  - The `favicon.ico` will will be in this folder
