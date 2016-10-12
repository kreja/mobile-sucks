# mobile-sucks
a record of difficulties in developing mobile web apps

### Features
* webpack(support amd/CommonJS)
* ejs
* less (css extracted from js)
* uglify when build
* auto refresh(but not hot module replacement, it's a problem to be solved..)
* bundle third-party packages into vendor.js and vendor.css, so you needn't require them in your file. Third-party packages included:
    * jquery



### Usage

development:

```bash
npm run dev
```

it will automatically open [http://localhost:8080](http://localhost:8080), and the pages are listed as links.

build:

```bash
npm run build
```


### 如何快速找到问题
- 看 `/app/pages/*.html`，找到对应文件，点进去看 `<title>`，确定是否是该问题。
- 找到该 html 的 `<meta name="description">` 上的“详细解释”查看具体说明。或者在本项目 issues 中搜索关键字查找具体说明。




