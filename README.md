## 说明

关于后台系统的项目，大部分人应该都很熟悉了，不论是 C 端还是 B、G 端，我们都会接触到“后管”开发。特别是 B、G 端的小伙伴，想必是最常做这类项目了，当然市场上主流的开源其实已经很多了,自己作为一名业余前端人员,出于对前端技术的兴趣,所以尝试搭一套简单的后台系统,心里想平常都是用别人现成的去二次开发,那自己是不是也可以去着手设计一套,通过这次的设计,不仅仅让自己更进一步了解前端技术,也悟到了一些开发思维,个人对这套系统更多的是以"新人"的角度出发,同时这个小系统在一定程度上可以很快"拥抱"新人,最后希望这个小项目能给大家带来一些帮助~~~

## fast-system-template

![img](https://img.airhang.ltd/Logo.png)

-   小型系统搭建，开箱立马使用
-   适合对象: 新手、学生、公司小项目
-   新技术结合进行尝试
-   项目文档库整合中---loading---
-   此项目仓库仅存放前端代码，后端服务迁移到 [ez-server](https://github.com/airhang-cloud/nestjs-template-mock)

## 技术

| Technology  | 描述                                                                       |
| ----------- | -------------------------------------------------------------------------- |
| Vue3.x      | 主流前端框架                                                               |
| Arco-Design | 字节跳动最近开源的 UI 组件框架                                             |
| Vue 全家桶  | Vuex、VueRouter                                                            |
| axios       | ajax(promise)的网络请求库                                                  |
| TypeScript  | JavaScript 的超集 在这个项目中会简单使用下，后续也会持续更好的集成到项目里 |
| git         | git 工作流                                                                 |

## 编辑器

| Editor | 描述     |
| ------ | -------- |
| Vscode | 微软出品 |

## 编辑库插件

| Plugins                   | 描述                                 |
| ------------------------- | ------------------------------------ |
| Atom One Dark Theme       | 一款 Atom 的皮肤                     |
| Auto Rename Tag           | 自动标签补全                         |
| Color Highlight           | 对应颜色高亮                         |
| ESLint                    | 提高开发效率，编辑器直接检测代码规范 |
| Prettier - Code formatter | 代码格式化                           |

## 如何启动项目

建议您把前后端项目分别 clone 到本地，

-   [前端部分](https://github.com/airhang-cloud/fast-system--template)
-   [后端部分](https://github.com/airhang-cloud/nestjs-template-mock)
-   项目依赖导入(您可以完全按照自己的安装包方式)
    -   前端采取 `yarn`包管理
    -   后端采取 `pnpm`包管理

一切就绪后:

-   前端启动 `yarn serve` / `pnpm serve` / `npm run serve`
-   后端启动 `yarn start` / `pnpm start` / `npm start`

## 产品(暂时简单描述，文档后续补充完整)

#### 登录界面

![img](https://img.airhang.ltd/ez-admin-login.jpg)

#### 进入主体界面

![img](https://img.airhang.ltd/main.jpg)

#### 切换角色

![img](https://img.airhang.ltd/toggleRole.jpg)

#### 角色: user2

![img](https://img.airhang.ltd/user2.jpg)

#### 角色: admin

![img](https://img.airhang.ltd/admin.jpg)

#### 系统信息

![img](https://img.airhang.ltd/info.jpg)

#### 退出登录提示

![img](https://img.airhang.ltd/ez-admin-ba02.jpg)

### 项目属于简单入门水平，欢迎提出问题，为后续更好的输出做准备，如果小伙伴们觉得对你有很大帮助可以点个 `star` 哟

## 项目会持续更新
