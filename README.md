# 打砖块小游戏

打完所有砖块后，你就得到“意想不到”的福利哟~

该项目主要是在预研『2D碰撞检测』后萌生的想法，[《“等一下，我碰！”——常见的2D碰撞检测》](https://aotu.io/notes/2017/02/16/2d-collision-detection/)。

Designed by [LV](https://github.com/mamboer).

## 技术实现：

采用 Canvas 2D API 编写，音效处理则采用 [howler](https://github.com/goldfire/howler.js) 库。

## 玩法

该游戏有两种玩法：

 1. 第一种玩法采用轴对称包围盒(小球、砖块、挡板)的碰撞检测法。
    - 体验链接：http://h5_collision_game_1.aco.aotu.io/
    - 二维码：![玩法一二维码](http://7xq7nb.com1.z0.glb.clouddn.com/liantu.png)

 2. 第二种玩法采用轴对称包围盒(小球与砖块)和分离轴定理（小球与可旋转的挡板）两种碰撞检测法。
    - 体验链接：http://h5_collision_game_2.aco.aotu.io/
    - 二维码：![玩法一二维码](http://7xq7nb.com1.z0.glb.clouddn.com/liantu%20%281%29.png)


## 示例图

玩法一和玩法二主要区别是挡板不同。

启动页面：

![启动页面](http://7xq7nb.com1.z0.glb.clouddn.com/0.jpg)

玩法一：

![玩法一](http://7xq7nb.com1.z0.glb.clouddn.com/1.jpg)

玩法二：

![玩法二](http://7xq7nb.com1.z0.glb.clouddn.com/2.jpg)


## 开发

采用 [ELF](https://github.com/o2team/elf) 构建工具进行开发。开发时，主要关心 `/src` 目录即可。

```bash
# 安装依赖
npm install

# 开发模式
npm start

# 构建
npm run build
```
