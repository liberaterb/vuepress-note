# 动画与canvas图形

## requestAnimationFrame

接受一个参数，此参数就是重绘屏幕前调用的参数，这个函数就是修改DOM样式以反映下一次重绘有哪些变化的地方。

为了实现动画循环，可以把多个requestAnimationFrame()调用串联起来

## 基本的画布功能

创建\<canvas\>元素时，至少要设置width和height属性，这样才能告诉浏览器在多大面积上绘图。

出现在开始和结束标签之间的内容是后备数据，会在浏览器不支持\<canvas\>元素时显示。

要在画布上绘制图形，首先要取得绘图上下文，使用getContext()方法可以获取对绘图上下文的引用。

对于平面图形，需要给这个方法传入参数"2d"。

```js
let drawing = document.getElementById("drawing")

if (drawing.getContext()) {
    let context = drawing.getContext("2d")
}
```

可以使用toDataURL()方法导出\<canvas\>元素上的图像，这个方法接受一个参数：要生成图像的MIME类型。

::: tip 
如果画布中的图像是其他域绘制过来的，toDataURL()方法就会抛出错误。
:::

### 填充和描边

填充以指定样式（颜色、渐变或图像）自动填充形状，描边只为图形边界着色

显示效果：填充取决于fillStyle，描边取决于strokeStyle，这两个属性可以是字符串、渐变对象或图案对象

### 绘制矩形

fillRect()

strokeRect()

clearRect()

这四个方法都接受四个参数：矩形x坐标、矩形y坐标、矩形高度、矩形宽度，这几个参数的单位都是像素

```html

<!--绘制两个实心矩形-->

<body>
    <canvas id="drawing" width="200" height="200"></canvas>

    <script>
        let drawing = document.getElementById('drawing')

        if (drawing.getContext) {
        let context = drawing.getContext("2d")

        context.fillStyle = '#ff0000'
        context.fillRect(10,10,50,50)

        context.fillStyle = "rgba(0,0,255,0.5)"
        context.fillRect(30,30,50,50)
    }
    </script>
</body>
```
```html

<!--绘制两个空心矩形-->

<body>
    <canvas id="drawing" width="200" height="200"></canvas>

    <script>
        let drawing = document.getElementById('drawing')

        if (drawing.getContext) {
            let context = drawing.getContext("2d")

            context.strokeStyle = '#ff0000'
            context.strokeRect(10,10,50,50)

            context.strokeStyle = "rgba(0,0,255,0.5)"
            context.strokeRect(30,30,50,50)
        }
    </script>
</body>
```
::: tip
描边宽度由lineWidth属性控制，是任意整数值。lineCap属性控制线条端点的形状（"butt"平头，"round"圆头，"square"方头），lineJoin属性控制线条交点的形状
:::
### 绘制路径

### 绘制文本

### 变换

### 绘制图像

### 阴影

### 渐变

### 图案

### 图像数据

### 合成

## WebGL

