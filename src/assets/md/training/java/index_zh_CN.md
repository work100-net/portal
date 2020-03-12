
# Java入门


序号|文内章节|视频
:---:|:---|:---
1|[我的第一个Java程序](#我的第一个Java程序)|<a href="https://www.bilibili.com/video/av85629204/" target="_blank">B站</a>
2|[开始学习Java编程](#开始学习Java编程)|
3|[课程源码](#课程源码)|

请参照如上`章节导航`进行阅读


<img src="http://contents.work100.net/images/training/java/java.jpg" />


Java 是由 Sun Microsystems 公司于1995年5月推出的高级程序设计语言。

Java 可运行于多个平台，如 `Windows`、`Mac OS`、及其他多种`UNIX`版本的系统。

本教程通过简单的实例将让大家更好的了解 Java 编程语言。


## <a id="我的第一个Java程序" style="padding-top: 60px;">1.我的第一个Java程序</a>

以下我们通过一个简单的实例来展示 Java 编程，创建文件 `HelloWorld.java` (文件名需与类名一致), 代码如下：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

> 注：`String args[]` 与 `String[] args` 都可以执行，但推荐使用 `String[] args`，这样可以避免歧义和误读。

运行以上实例，输出结果如下：

```cmd
$ javac HelloWorld.java
$ java HelloWorld
Hello World
```

### 执行命令解析：

以上我们使用了两个命令 `javac` 和 `java`。

- **javac** 后面跟着的是java文件的文件名，例如 `HelloWorld.java`。 该命令用于将 `.java` 源文件编译为 `.class` 字节码文件，如： `javac HelloWorld.java`

  运行`javac`命令后，如果成功编译没有错误的话，会出现一个 `HelloWorld.class` 的文件。

- **java** 后面跟着的是java文件中的类名，例如 `HelloWorld` 就是类名。该命令用于运行程序，如: `java HelloWorld`

  > 注意：java 命令后面不要加 `.class`。



## <a id="开始学习Java编程" style="padding-top: 60px;">2.开始学习Java编程</a>

- [Java 语言基础](/training/java-intro.html "Java 语言基础 - Java入门 - 免费课程 - 光束云 - work100.net")
- [Java 面向对象](/training/java-inheritance.html "Java 面向对象 - Java入门 - 免费课程 - 光束云 - work100.net")
- [Java 高级教程](/training/java-data-structure.html "Java 高级教程 - Java入门 - 免费课程 - 光束云 - work100.net")


## <a id="课程源码" style="padding-top: 60px;">3.课程源码</a>

「Java入门」课程视频教程源码已托管到如下地址：

- [Github](https://github.com/work100-net/training-stage1 "源码托管 - Java入门 - 免费课程 - 光束云 - work100.net")
- [码云](https://gitee.com/work100-net/training-stage1 "源码托管 - Java入门 - 免费课程 - 光束云 - work100.net")
