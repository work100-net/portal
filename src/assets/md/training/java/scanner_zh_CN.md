
# <a id="Scanner类" style="padding-top: 60px;">Scanner类</a>

序号|文内章节|视频
:---:|:---|:---
1|[概述](#概述)|
2|[使用next方法](#使用next方法)|
3|[使用nextLine方法](#使用nextLine方法)|
4|[next()与nextLine()区别](#next()与nextLine()区别)|

请参照如上`章节导航`进行阅读


## <a id="概述" style="padding-top: 60px;">1.概述</a>


`java.util.Scanner` 是 Java5 的新特征，我们可以通过 `Scanner` 类来获取用户的输入。

下面是创建 `Scanner` 对象的基本语法：

```java
Scanner s = new Scanner(System.in);
```

接下来我们演示一个最简单的数据输入，并通过 `Scanner` 类的 `next()` 与 `nextLine()` 方法获取输入的字符串，在读取前我们一般需要 使用 `hasNext()` 与 `hasNextLine()` 判断是否还有输入的数据：


## <a id="使用next方法" style="padding-top: 60px;">2.使用next方法</a>

```java
import java.util.Scanner; 
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
 
        // next方式接收字符串
        System.out.println("next方式接收：");
        // 判断是否还有输入
        if (scan.hasNext()) {
            String str1 = scan.next();
            System.out.println("输入的数据为：" + str1);
        }
        scan.close();
    }
}
```

执行以上程序输出结果为：

```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
next方式接收：
work100 net
输入的数据为：work100
```

可以看到 `net` 字符串并未输出，接下来我们看 `nextLine`。


## <a id="使用nextLine方法" style="padding-top: 60px;">3.使用nextLine方法</a>

```java
import java.util.Scanner;
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
 
        // nextLine方式接收字符串
        System.out.println("nextLine方式接收：");
        // 判断是否还有输入
        if (scan.hasNextLine()) {
            String str2 = scan.nextLine();
            System.out.println("输入的数据为：" + str2);
        }
        scan.close();
    }
}
```

执行以上程序输出结果为：

```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
nextLine方式接收：
work100 net
输入的数据为：work100 net
```

可以看到 `net` 字符串输出。



## <a id="next()与nextLine()区别" style="padding-top: 60px;">4.next()与nextLine()区别</a>

### next()

- 一定要读取到有效字符后才可以结束输入
- 对输入有效字符之前遇到的空白，`next()` 方法会自动将其去掉
- 只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符
- `next()` 不能得到带有空格的字符串


### nextLine()

- 以 `Enter` 为结束符,也就是说 `nextLine()` 方法返回的是输入回车之前的所有字符
- 可以获得空白

如果要输入 `int` 或 `float` 类型的数据，在 `Scanner` 类中也有支持，但是在输入之前最好先使用 `hasNextXxx()` 方法进行验证，再使用 `nextXxx()` 来读取：

```java
import java.util.Scanner;
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
        int i = 0;
        float f = 0.0f;
        System.out.print("输入整数：");
        if (scan.hasNextInt()) {
            // 判断输入的是否是整数
            i = scan.nextInt();
            // 接收整数
            System.out.println("整数数据：" + i);
        } else {
            // 输入错误的信息
            System.out.println("输入的不是整数！");
        }
        System.out.print("输入小数：");
        if (scan.hasNextFloat()) {
            // 判断输入的是否是小数
            f = scan.nextFloat();
            // 接收小数
            System.out.println("小数数据：" + f);
        } else {
            // 输入错误的信息
            System.out.println("输入的不是小数！");
        }
        scan.close();
    }
}
```

执行以上程序输出结果为：

```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
输入整数：12
整数数据：12
输入小数：1.2
小数数据：1.2
```

以下实例我们可以输入多个数字，并求其总和与平均数，每输入一个数字用回车确认，通过输入非数字来结束输入并输出执行结果：

```java
import java.util.Scanner;
 
class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
 
        double sum = 0;
        int m = 0;
 
        while (scan.hasNextDouble()) {
            double x = scan.nextDouble();
            m = m + 1;
            sum = sum + x;
        }
 
        System.out.println(m + "个数的和为" + sum);
        System.out.println(m + "个数的平均值是" + (sum / m));
        scan.close();
    }
}
```

执行以上程序输出结果为：

```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
12
23
15
21.4
end
4个数的和为71.4
4个数的平均值是17.85
```



#### 源码获取

实例源码已经托管到如下地址：

- <a href="https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/scanner" target="_blank">https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/scanner</a>

- <a href="https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/scanner" target="_blank">https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/basic/scanner</a>



----------

上一篇：[Stream和File和IO](/training/java-stream-file-io.html "Stream和File和IO - 语言基础 - Java入门 - 免费课程 - 光束云 - work100.net")

下一篇：[异常处理](/training/java-exception.html "异常处理 - 语言基础 - Java入门 - 免费课程 - 光束云 - work100.net")
