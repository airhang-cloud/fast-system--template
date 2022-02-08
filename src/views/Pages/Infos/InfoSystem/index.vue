<!--样例模板-->
<template>
    <container-box title="系统信息" subtitle="系统介绍">
        <a-typography :style="{ marginTop: '-40px' }">
            <a-typography-title> EZ-Admin </a-typography-title>
            <a-typography-paragraph>
                "EZ-Admin"顾名思义:这是一款简单的后台管理系统,作为一名业余前端人员,作者从代码上做了很大的简化,可以说只要你对前端有感兴趣,那么这个系统绝对是很快就能上手,目前版本主要面向新手,若大神偶然路过,欢迎指点
            </a-typography-paragraph>
            <a-typography-paragraph blockquote>
                "Ez-admin" as the name implies: this is a simple background management system, as an amateur front-end personnel, the author has made a great simplification from the code, it can be
                said that as long as you are interested in the front-end, then this system is absolutely soon to be able to use, the current version is mainly for novices, if the big god accidentally
                passing by, welcome to give advice
                <a-typography-text bold>to be a design activity.</a-typography-text>
            </a-typography-paragraph>
            <a-typography-title :heading="2">技术栈</a-typography-title>
            <a-typography-paragraph>
                基于主流前端框架 <a-typography-text mark>Vue(版本3)</a-typography-text>搭建的系统，UI框架选用 字节出品的 <a-typography-text mark>ArcoDesign</a-typography-text>,后端服务采用
                <a-typography-text mark>Nestjs</a-typography-text>简单模拟
            </a-typography-paragraph>
            <a-typography-paragraph blockquote>
                The back-end service adopts the system built based on the mainstream front-end framework Vue(version 3), the UI framework selects ArcoDesign produced by byte, and the back-end service
                adopts simple simulation of Nestjs
            </a-typography-paragraph>
            <a-typography-paragraph>
                <ol>
                    <li>Vue3</li>
                    <li>ArcoDesign</li>
                    <li>Nestjs</li>
                </ol>
            </a-typography-paragraph>
            <a-typography-title :heading="2">知识储备</a-typography-title>
            <a-typography-paragraph>
                <ol>
                    <li>JavaScript基本语法,熟悉Es6最佳</li>
                    <li>前端框架的简单使用</li>
                    <li>前端存储技术</li>
                    <li>Css预处理器的简单了解</li>
                    <li>多人协同开发的了解</li>
                    <li>前端工程化构建</li>
                    <li>网络请求</li>
                    <li>服务端简单了解</li>
                </ol>
            </a-typography-paragraph>
        </a-typography>
    </container-box>
</template>
<script>
export default {
    name: "InfoSystem",
};
</script>
