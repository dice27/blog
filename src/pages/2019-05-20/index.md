---
title: 【OpenGL】glLineWidthの注意点
date: "2019-05-20"
---

![Dolphin](./dolphin.jpg)  

---

## glLineWidth()を使う際の注意点
Open GL APIを使用して線を描画する際に以下の様にして指定すると、線の太さを指定する事が出来る。  
(ここではOpen GL 2.X 系での描画の方法を紹介する。)

```c
glLineWidth(width);
glBegin(GL_LINES);
glVertex2f(x0 , y0);
glVertex2f(x1 , y1);
glEnd();
```

## glLineWidth()サポート範囲

しかし、glLineWidth() にはサポート範囲があり、  
その範囲を超えた場合はサポートされている最も近い幅が使用される。

> Nonantialiased line width may be clamped to an implementation-dependent maximum.  
> Call glGet with GL_ALIASED_LINE_WIDTH_RANGE to determine the maximum width.

参照：glLineWidth - OpenGL 4 Reference Pages - Khronos Group  
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glLineWidth.xhtml>


サポート範囲の幅は以下の様に取得する事が出来る。

```c
glGetIntegerv(GL_ALIASED_LINE_WIDTH_RANGE, range);
```

また、アンチエイリアシングが有効であればサポートされている幅は以下の様に取得可能である

> Not all widths can be supported when line antialiasing is enabled. If an unsupported width is requested, the nearest supported width is used.
> Only width 1 is guaranteed to be supported; others depend on the implementation. Likewise, there is a range for aliased line widths as well.

参照：glLineWidth - OpenGL 4 Reference Pages - Khronos Group
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glLineWidth.xhtml>

```c
glGetIntegerv(GL_SMOOTH_LINE_WIDTH_RANGE, range);
```

## 結論

glLineWidth()を利用して、線幅を変更しつつ線を描画する場合は、  
以下の様に判定し範囲外であればログを残す等、範囲外を超えた線幅の指定があった事を分かる様にすべきである。


```c
glGetIntegerv(GL_ALIASED_LINE_WIDTH_RANGE, nonantialiasedRange);
glGetIntegerv(GL_SMOOTH_LINE_WIDTH_RANGE, smoothRange);

if (isAntiAliased) {
    glEnable(GL_LINE_SMOOTH);
    if((lineWidth < smoothRange[0]) || (lineWidth > smoothRange[1])) {
        // out of range! logging.
    }
}
else {
    glDisable(GL_LINE_SMOOTH);
    if((lineWidth < nonantialiasedRange[0]) || (lineWidth > nonantialiasedRange[1])) {
        // out of range! logging.
    }
}
```

