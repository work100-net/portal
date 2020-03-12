
# <a id="基础语法" style="padding-top: 60px;">基础语法</a>


序号|文内章节|视频
:---:|:---|:---
1|[第一个Java程序](#第一个Java程序)|[B站](https://www.bilibili.com/video/av87108570/) 
2|[基本语法](#基本语法)|
3|[Java标识符](#Java标识符)|
4|[Java修饰符](#Java修饰符)|
5|[Java变量](#Java变量)|
6|[Java数组](#Java数组)|
7|[Java枚举](#Java枚举)|
8|[Java关键字](#Java关键字)|
9|[Java注释](#Java注释)|
10|[Java空行](#Java空行)|
11|[继承](#继承)|
12|[接口](#接口)|
13|[Java源程序与编译型运行区别](#Java源程序与编译型运行区别)|

请参照如上`章节导航`进行阅读


一个 Java 程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。下面简要介绍下类、对象、方法和实例变量的概念。

- **对象**：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
- **类**：类是一个模板，它描述一类对象的行为和状态。
- **方法**：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。
- **实例变量**：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。


## <a id="第一个Java程序" style="padding-top: 60px;">1.第一个Java程序</a>

下面看一个简单的 Java 程序，它将打印字符串： Hello World

```java
public class HelloWorld {
    /**
     * 第一个Java程序
     * 它将打印字符串: Hello World
     */
    public static void main(String[] args) {
        System.out.println("Hello World"); // 打印 Hello World
    }
}
```

下面将逐步介绍如何保存、编译以及运行这个程序：

- 打开代码编辑器，把上面的代码添加进去；
- 把文件名保存为：`HelloWorld.java`；
- 打开 `cmd` 命令窗口，进入目标文件所在的位置，假设是 `C:\`
- 在命令行窗口输入 `javac HelloWorld.java` 按下回车键编译代码。如果代码没有错误，`cmd` 命令提示符会进入下一行（假设环境变量都设置好了）。
- 再键输入 `java HelloWorld` 按下回车键就可以运行程序了

你将会在窗口看到 Hello World

```cmd
C : > javac HelloWorld.java
C : > java HelloWorld 
Hello World
```

## <a id="基本语法" style="padding-top: 60px;">2.基本语法</a>

编写 Java 程序时，应注意以下几点：

- **大小写敏感**：Java 是大小写敏感的，这就意味着标识符 `Hello` 与 `hello` 是不同的。
- **类名**：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 `MyFirstJavaClass` 。
- **方法名**：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
- **源文件名**：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 .java。（如果文件名和类名不相同则会导致编译错误）。
- **主方法入口**：所有的 Java 程序由 public static void main(String[] args) 方法开始执行。


## <a id="Java标识符" style="padding-top: 60px;">3.Java标识符</a>

Java 所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

关于 Java 标识符，有以下几点需要注意：

- 所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（_）开始
- 首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（_）或数字的任何字符组
- 关键字不能用作标识符
- 标识符是大小写敏感的
- 合法标识符举例：`age`、`$salary`、`_value`、`__1_value`
- 非法标识符举例：`123abc`、`-salary`


## <a id="Java修饰符" style="padding-top: 60px;">4.Java修饰符</a>

像其他语言一样，Java 可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：

- **访问控制修饰符**: 

  - default
  - public 
  - protected
  - private

- **非访问控制修饰符**: 

  - final
  - abstract
  - static
  - synchronized

在后面的章节中我们会深入讨论 Java 修饰符。


## <a id="Java变量" style="padding-top: 60px;">5.Java变量</a>

Java 中主要有如下几种类型的变量：

- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）


## <a id="Java数组" style="padding-top: 60px;">6.Java数组</a>

数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组。


## <a id="Java枚举" style="padding-top: 60px;">7.Java枚举</a>

Java 5.0 引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的 bug。

例如，我们为果汁店设计一个程序，它将限制果汁为`小杯`、`中杯`、`大杯`。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

实例：

```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
   FreshJuiceSize size;
}
 
public class FreshJuiceTest {
   public static void main(String[] args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM  ;
   }
}
```

> 注意：枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义。


## <a id="Java关键字" style="padding-top: 60px;">8.Java关键字</a>

下面列出了 Java 关键字。这些保留字不能用于常量、变量、和任何标识符的名称。

类别|关键字|说明
:-|:-|:-
访问控制|private|私有的
.|protected|受保护的
.|public|公共的
类、方法和变量修饰符|abstract|声明抽象
.|class|类
.|extends|扩充,继承
.|final|最终值,不可改变的
.|implements|实现（接口）
.|interface|接口
.|native|本地，原生方法（非 Java 实现）
.|new|新,创建
.|static|静态
.|strictfp|严格,精准
.|synchronized|线程,同步
.|transient|短暂
.|volatile|易失
程序控制语句|break|跳出循环
.|case|定义一个值以供 switch 选择
.|continue|继续
.|default|默认
.|do|运行
.|else|否则
.|for|循环
.|if|如果
.|instanceof|实例
.|return|返回
.|switch|根据值选择执行
.|while|循环
错误处理|assert|断言表达式是否为真
.|catch|捕捉异常
.|finally|有没有异常都执行
.|throw|抛出一个异常对象
.|throws|声明一个异常可能被抛出
.|try|捕获异常
包相关|import|引入
.|package|包
基本类型|boolean|布尔型
.|byte|字节型
.|char|字符型
.|double|双精度浮点
.|float|单精度浮点
.|int|整型
.|long|长整型
.|short|短整型
变量引用|super|父类,超类
.|this|本类
.|void|无返回值
保留关键字|goto|是关键字，但不能使用
.|const|是关键字，但不能使用
.|null|空

## <a id="Java注释" style="padding-top: 60px;">9.Java注释</a>

类似于 `C/C++`、Java 也支持单行以及多行注释。注释中的字符将被 Java 编译器忽略。

```java
public class HelloWorld {
   /** 
    * 这是第一个Java程序
    * 它将打印Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String[] args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World"); 
    }
}
```


## <a id="Java空行" style="padding-top: 60px;">10.Java空行</a>

空白行或者有注释的行，Java 编译器都会忽略掉。


## <a id="继承" style="padding-top: 60px;">11.继承</a>

在 Java 中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类。

利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（`super class`），派生类称为子类（`sub class`）。


## <a id="接口" style="padding-top: 60px;">12.接口</a>

在 Java 中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。

接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。


## <a id="Java源程序与编译型运行区别" style="padding-top: 60px;">13.Java源程序与编译型运行区别</a>

如下图所示：

<img src="http://contents.work100.net/images/training/java/basic-syntax/java_source_compile_difference_zh_CN.jpg" style="max-width: 98%" />

下一节介绍 Java 编程中的`类和对象`。之后你将会对 Java 中的类和对象有更清楚的认识。



#### 源码获取

实例源码已经托管到如下地址：

- <a href="https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/syntax" target="_blank">https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/syntax</a>

- <a href="https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/syntax" target="_blank">https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/syntax</a>



----------

上一篇：[开发环境配置](/training/java-environment-setup.html "开发环境配置 - 语言基础 - Java入门 - 免费课程 - 光束云 - work100.net")

下一篇：[对象和类](/training/java-object-class.html "对象和类 - 语言基础 - Java入门 - 免费课程 - 光束云 - work100.net")
