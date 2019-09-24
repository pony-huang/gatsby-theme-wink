![gatsby-theme-wink-snapshoot](https://user-images.githubusercontent.com/9530963/65311536-1c374280-dbc3-11e9-855b-8cf2778b8399.png)

## 安装

```shell
yarn add @pinggod/gatsby-theme-wink gatsby-plugin-manifest
```

## 配置

```js:gatsby-config.js
{
  plugins: [
    {
      resolve: `@pinggod/gatsby-theme-wink`,
      options: {
        // 文章所在目录
        postPath: "content/posts",
        mdxExtensions: [".mdx", ".md"],
        // google analytics ID
        ga: "UA-137858782-1",
        // 设置 HTML lang 属性
        htmlLang: "zh",
      }
    },
    // 设置 favicon 和 manifest
    // 文档地址：https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
    // 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'REXLNT',
        short_name: 'REXLNT',
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: "static/favicon.png",
      },
    }
  ]
}
```

## 创建文章

比如在路径 `content/posts/2019-02-02-gatsby-quick-start/index.mdx` 创建一篇文章，内容如：

```mdx
---
title: Consectetur Adipisicing
description: Ipsa odio, dignissimos consectetur debitis harum eaque maiores soluta voluptate
date: '2019-03-16T05:45:02.000Z'
published: true
cover: ./aditya-chinchure-hyN9aU9Tm-c-unsplash.jpg
coverAuthor: Aditya Chinchure
coverOriginalUrl: https://unsplash.com/photos/hyN9aU9Tm-c
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae in, deleniti tempora mollitia minima et delectus exercitationem earum. Velit error voluptatem recusandae aspernatur iure tenetur animi provident expedita id in.

Repellendus voluptas ullam, tenetur vitae nisi eligendi iste laborum eaque rerum officia quam cumque eum quisquam exercitationem at beatae corporis placeat, asperiores odit velit numquam. Architecto expedita possimus saepe omnis?
```

`frontmatter` 中的属性介绍：

- `title`: 必填，文章标题
- `description`: 选填，文章简介
- `date`: 必填，创建时间
- `published`: 必填，true 为对外发布，false 则不对外发布，最终只构建生成为 true 的文章，false 可用于标记草稿
- `cover`: 必填，文章题图
- `coverAuthor`: 必填，文章题图作者
- `coverOriginalUrl`: 必填，文章题图原始地址
