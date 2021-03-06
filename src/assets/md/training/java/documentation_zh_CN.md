
# <a id="文档注释" style="padding-top: 60px;">文档注释</a>

序号|文内章节|视频
:---:|:---|:---
1|[概述](#概述)|
2|[javadoc标签](#javadoc标签)|
3|[文档注释](#文档注释)|
4|[javadoc输出什么](#javadoc输出什么)|

请参照如上`章节导航`进行阅读

## <a id="概述" style="padding-top: 60px;">1.概述</a>

Java 支持三种注释方式。前两种分别是 `//` 和 `/* */`，第三种被称作说明注释，它以 `/**` 开始，以 `*/` 结束。

说明注释允许你在程序中嵌入关于程序的信息。你可以使用 `javadoc` 工具软件来生成信息，并输出到 `HTML` 文件中。

说明注释，使你更加方便的记录你的程序信息。


## <a id="javadoc标签" style="padding-top: 60px;">2.javadoc标签</a>

`javadoc` 工具软件识别以下标签：

标签|描述|示例
:-|:-|:-
`@author`|标识一个类的作者|`@author description`
`@deprecated`|指名一个过期的类或成员|`@deprecated description`
`{@docRoot}`|指明当前文档根目录的路径|`Directory Path`
`@exception`|标志一个类抛出的异常|`@exception exception-name explanation`
`{@inheritDoc}`|从直接父类继承的注释|`Inherits a comment from the immediate surperclass.`
`{@link}`|插入一个到另一个主题的链接|`{@link name text}`
`{@linkplain}`|插入一个到另一个主题的链接，但是该链接显示纯文本字体|`Inserts an in-line link to another topic.`
`@param`|说明一个方法的参数|`@param parameter-name explanation`
`@return`|说明返回值类型|`@return explanation`
`@see`|指定一个到另一个主题的链接|`@see anchor`
`@serial`|说明一个序列化属性|`@serial description`
`@serialData`|说明通过 `writeObject()` 和 `writeExternal()` 方法写的数据|`@serialData description`
`@serialField`|说明一个 `ObjectStreamField` 组件|`@serialField name type description`
`@since`|标记当引入一个特定的变化时|`@since release`
`@throws`|和 `@exception` 标签一样|`The @throws tag has the same meaning as the @exception tag.`
`{@value}`|显示常量的值，该常量必须是 `static` 属性|`Displays the value of a constant, which must be a static field.`
`@version`|指定类的版本|`@version info`


## <a id="文档注释" style="padding-top: 60px;">3.文档注释</a>

在开始的 `/**` 之后，第一行或几行是关于类、变量和方法的主要描述。

之后，你可以包含一个或多个各种各样的 `@` 标签。每一个 `@` 标签必须在一个新行的开始或者在一行的开始紧跟星号(`*`).

多个相同类型的标签应该放成一组。例如，如果你有三个 `@see` 标签，可以将它们一个接一个的放在一起。

下面是一个类的说明注释的实例：

```java
/** 
* 这个类绘制一个条形图
* @author runoob
* @version 1.2
*/
```


## <a id="javadoc输出什么" style="padding-top: 60px;">4.javadoc输出什么</a>

`javadoc` 工具将你 Java 程序的源代码作为输入，输出一些包含你程序注释的 `HTML` 文件。

每一个类的信息将在独自的HTML文件里。`javadoc` 也可以输出继承的树形结构和索引。

由于 `javadoc` 的实现不同，工作也可能不同，你需要检查你的 Java 开发系统的版本等细节，选择合适的 `Javadoc` 版本。

### 实例

下面是一个使用说明注释的简单实例。注意每一个注释都在它描述的项目的前面。

在经过 `javadoc` 处理之后，`SquareNum` 类的注释将在 `SquareNum.html` 中找到。

```java
import java.io.*;
 
/**
* 这个类演示了文档注释
* @author Ayan Amhed
* @version 1.2
*/
public class SquareNum {
   /**
   * This method returns the square of num.
   * This is a multiline description. You can use
   * as many lines as you like.
   * @param num The value to be squared.
   * @return num squared.
   */
   public double square(double num) {
      return num * num;
   }
   /**
   * This method inputs a number from the user.
   * @return The value input as a double.
   * @exception IOException On input error.
   * @see IOException
   */
   public double getNumber() throws IOException {
      InputStreamReader isr = new InputStreamReader(System.in);
      BufferedReader inData = new BufferedReader(isr);
      String str;
      str = inData.readLine();
      return (new Double(str)).doubleValue();
   }
   /**
   * This method demonstrates square().
   * @param args Unused.
   * @return Nothing.
   * @exception IOException On input error.
   * @see IOException
   */
   public static void main(String args[]) throws IOException
   {
      SquareNum ob = new SquareNum();
      double val;
      System.out.println("Enter value to be squared: ");
      val = ob.getNumber();
      val = ob.square(val);
      System.out.println("Squared value is " + val);
   }
}
```

如下，使用 `javadoc` 工具处理 `SquareNum.java` 文件：

```bash
$ javadoc SquareNum.java
Loading source file SquareNum.java...
Constructing Javadoc information...
Standard Doclet version 1.5.0_13
Building tree for all the packages and classes...
Generating SquareNum.html...
SquareNum.java:39: warning - @return tag cannot be used\
                      in method with void return type.
Generating package-frame.html...
Generating package-summary.html...
Generating package-tree.html...
Generating constant-values.html...
Building index for all the packages and classes...
Generating overview-tree.html...
Generating index-all.html...
Generating deprecated-list.html...
Building index for all classes...
Generating allclasses-frame.html...
Generating allclasses-noframe.html...
Generating index.html...
Generating help-doc.html...
Generating stylesheet.css...
1 warning
$
```

----------

上一篇：[Applet](/training/java-applet.html "Applet - 高级教程 - Java入门 - 免费课程 - 光束云 - work100.net")