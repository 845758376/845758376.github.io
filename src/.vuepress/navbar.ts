import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "前端博文",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "vue",
        icon: "pen-to-square",
        prefix: "vue/",
        children: [
          "V001-vue随页面改变title自动改变",
          "V002-去掉console打印",
          "V003-项目中生成二维码"
        ],
      },
      {
        text: "vue3",
        icon: "pen-to-square",
        prefix: "vue3/",
        children: [
          {
            text: "vue3中常见修饰符",
            icon: "pen-to-square",
            link: "vue3中常见修饰符",
          },
          {
            text: "vue3的setup语法糖",
            icon: "pen-to-square",
            link: "vue3的setup语法糖",
          },
        ],
      }
    ],
  },
  {
    text: "后端博文",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "服务端",
        icon: "pen-to-square",
        prefix: "服务端/docker/",
        children: [
          {
            text: "阿里云服务器安装docker",
            icon: "pen-to-square",
            link: "阿里云服务器安装docker",
          },
          {
            text: "Docker 安装 mysql",
            icon: "pen-to-square",
            link: "Docker 安装 mysql",
          },
          {
            text: "docker 常用的命令",
            icon: "pen-to-square",
            link: "docker 常用的命令",
          },
        ],
      },
    ],
  },

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
