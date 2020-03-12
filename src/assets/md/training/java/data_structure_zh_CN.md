
# <a id="数据结构" style="padding-top: 60px;">数据结构</a>

序号|文内章节|视频
:---:|:---|:---
1|[概述](#概述)|
2|[枚举(Enumeration)](#枚举(Enumeration))|
3|[向量(Vector)](#向量(Vector))|
4|[栈(Stack)](#栈(Stack))|
5|[字典(Dictionary)](#字典(Dictionary))|
6|[哈希表(Hashtable)](#哈希表(Hashtable))|
7|[属性(Properties)](#属性(Properties))|

请参照如上`章节导航`进行阅读

## <a id="概述" style="padding-top: 60px;">1.概述</a>

Java工具包提供了强大的数据结构。在Java中的数据结构主要包括以下几种接口和类：

- 枚举(`Enumeration`)
- 位集合(`BitSet`)
- 向量(`Vector`)
- 栈(`Stack`)
- 字典(`Dictionary`)
- 哈希表(`Hashtable`)
- 属性(`Properties`)

以上这些类是传统遗留的，在Java2中引入了一种新的框架-集合框架(`Collection`)，我们后面再讨论。


## <a id="枚举(Enumeration)" style="padding-top: 60px;">2.枚举(Enumeration)</a>

枚举(`Enumeration`)接口虽然它本身不属于数据结构,但它在其他数据结构的范畴里应用很广。 枚举(The Enumeration)接口定义了一种从数据结构中取回连续元素的方式。

例如，枚举定义了一个叫 `nextElement` 的方法，该方法用来得到一个包含多元素的数据结构的下一个元素。

**实例：**

创建一个 `EnumTest.java` 类文件，定义一个 Lang 枚举，代码如下：

```java
public class EnumTest {

    enum Lang{
        zh_CN,
        en
    }
   
    public static void main(String[] args) {
        System.out.println("Lang: " + Lang.zh_CN);
        System.out.println("-----------------------");
    }
}
``` 

运行结果如下：

```cmd
Lang: zh_CN
-----------------------
```

现在定义个功能增强的、可获取语言编码的 LanguageEnum 枚举，代码如下：

```java
public class EnumTest {
    enum LanguageEnum {

        /**
         * 英文
         */
        LANGUAGE_EN("en"),
        /**
         * 简体中文
         */
        LANGUAGE_ZH_CN("zh_CN"),
        /**
         * 繁体中文
         */
        LANGUAGE_ZH_TW("zh_TW");

        private String language;

        LanguageEnum(String language) {
            this.language = language;
        }

        /**
         * 获取指定语言类型(如果没有对应的语言类型,则返回中文)
         *
         * @param language 语言类型
         * @return
         */
        public static String getLanguage(String language) {
            if (isEmpty(language)) {
                return LANGUAGE_ZH_CN.language;
            }
            for (LanguageEnum languageEnum : LanguageEnum.values()) {
                if (languageEnum.language.equalsIgnoreCase(language)) {
                    return languageEnum.language;
                }
            }
            return LANGUAGE_ZH_CN.language;
        }
    }
    
    public static void main(String[] args) {
        System.out.println("默认语言：" + LanguageEnum.getLanguage(""));
        System.out.println("语言：" + LanguageEnum.getLanguage("en"));
        System.out.println("语言：" + LanguageEnum.getLanguage("none"));
        System.out.println("-----------------------");
    }
    
    public static boolean isEmpty(Object str) {
        return str == null || "".equals(str);
    }
}
```

运行结果如下：

```cmd
默认语言：zh_CN
语言：en
语言：zh_CN
-----------------------
```

枚举还可以定义多属性，代码如下：

```java
public class EnumTest {
    
    enum HttpStatus{
        OK(200, "OK"),
        BAD_REQUEST(400, "BAD REQUEST"),
        UNAUTHORIZED(401, "UNAUTHORIZED"),
        PAYMENT_REQUIRED(402, "PAYMENT REQUIRED"),
        FORBIDDEN(403, "FORBIDDEN"),
        NOT_FOUND(404, "NOT FOUND");


        /**
         * 返回码
         */
        private int code;

        /**
         * 返回信息
         */
        private String message;

        HttpStatus(int code, String message){
            this.code = code;
            this.message = message;
        }

        public int getCode() {
            return code;
        }

        public String getMessage() {
            return message;
        }
    }
    
    public static void main(String[] args) {
        System.out.println("HttpStatus Code: " + HttpStatus.OK.getCode() + ", Message: " + HttpStatus.OK.getMessage());
        System.out.println("HttpStatus Code: " + HttpStatus.NOT_FOUND.getCode() + ", Message: " + HttpStatus.NOT_FOUND.getMessage());
        System.out.println("-----------------------");
    }
}
```

运行结果如下：

```cmd
HttpStatus Code: 200, Message: OK
HttpStatus Code: 404, Message: NOT FOUND
-----------------------
```


## <a id="向量(Vector)" style="padding-top: 60px;">3.向量(Vector)</a>

向量(`Vector`)类和传统数组非常相似，但是 `Vector` 的大小能根据需要动态的变化。

和数组一样，`Vector` 对象的元素也能通过索引访问。

使用 `Vector` 类最主要的好处就是在创建对象的时候不必给对象指定大小，它的大小会根据需要动态的变化。

**实例：**

新建 `VictorTest.java` 文件，代码如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

public class VictorTest {
    public static void main(String[] args) {
        Vector<Integer> v1 = new Vector<>();

        v1.addElement(new Integer(1));
        v1.add(1, new Integer(20));
        System.out.println(v1);
        System.out.println(v1.get(0));
        System.out.println(v1.get(1));
        System.out.println("------------------------");

        Vector<String> v2 = new Vector<>();
        List<String> list = new ArrayList<>();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        v2.addAll(list);
        System.out.println(v2);
        System.out.println(v2.firstElement());
        System.out.println(v2.lastElement());
        System.out.println("------------------------");
    }
}
```

运行结果如下：

```cmd
[1, 20]
1
20
------------------------
[aaa, bbb, ccc]
aaa
ccc
------------------------
```


## <a id="栈(Stack)" style="padding-top: 60px;">4.栈(Stack)</a>

栈(`Stack`)实现了一个后进先出(`LIFO`)的数据结构。

你可以把栈理解为对象的垂直分布的栈，当你添加一个新元素时，就将新元素放在其他元素的顶部。

当你从栈中取元素的时候，就从栈顶取一个元素。换句话说，最后进栈的元素最先被取出。

**实例**：

新建 `StackTest.java` 文件，代码如下：

```java
import java.util.Enumeration;
import java.util.Stack;

public class StackTest {
    public static void main(String[] args) {
        Stack<String> stack1 = new Stack<>();
        stack1.push("aaa");
        stack1.push("bbb");
        stack1.push("ccc");
        System.out.println(stack1);
        //显示枚举（stack ）中的所有元素
        Enumeration<String> elements1 = stack1.elements();
        while (elements1.hasMoreElements())
        {
            System.out.print(elements1.nextElement() + " ");
        }
        System.out.println();
        System.out.println(stack1.peek()); // 返回栈顶元素，不移除
        System.out.println(stack1.search("ccc"));

        System.out.println(stack1.pop()); // 弹出栈顶元素
        System.out.println(stack1.search("ccc"));
        System.out.println(stack1.pop());
        System.out.println(stack1.pop());
        System.out.println("---------------------");

        Stack stack2 = new Stack();
        stack2.push(123);
        stack2.push("abc");
        stack2.push(123.05f);
        System.out.println(stack2);
        System.out.println(stack2.pop());
        System.out.println(stack2.pop());
        System.out.println(stack2.pop());
        System.out.println("---------------------");
    }
}
```

运行结果如下：

```cmd
[aaa, bbb, ccc]
aaa bbb ccc 
ccc
1
ccc
-1
bbb
aaa
---------------------
[123, abc, 123.05]
123.05
abc
123
---------------------
```


## <a id="字典(Dictionary)" style="padding-top: 60px;">5.字典(Dictionary)</a>

字典(`Dictionary`) 类是一个抽象类，它定义了键映射到值的数据结构。

当你想要通过特定的键而不是整数索引来访问数据的时候，这时候应该使用 `Dictionary`。

由于 `Dictionary` 类是抽象类，所以它只提供了键映射到值的数据结构，而没有提供特定的实现。

**实例**：

新建 `DictionaryTest.java` 文件，代码如下：

```java
import java.util.Dictionary;
import java.util.Enumeration;
import java.util.Hashtable;

public class DictionaryTest {
    private static Dictionary<String, Object> dic = new Hashtable<String, Object>();

    public static void main(String[] args) {
        dic.put("key1", 123);
        dic.put("key2", "abc");
        dic.put("key3", 123.05f);

        System.out.println(dic);
        System.out.println("size: " + dic.size());
        Enumeration<Object> elements = dic.elements();
        while (elements.hasMoreElements()) {
            System.out.print(elements.nextElement() + " ");
        }
        System.out.println();
        System.out.println("key1=" + dic.get("key1"));
        System.out.println("key2=" + dic.get("key2"));
        System.out.println("key3=" + dic.get("key3"));
        Enumeration<String> keys = dic.keys();
        while (keys.hasMoreElements()){
            String key = keys.nextElement();
            System.out.print(key + "=" + dic.get(key) + ", ");
        }
        System.out.println();
    }
}
```

运行结果如下：

```cmd
{key3=123.05, key2=abc, key1=123}
size: 3
123.05 abc 123 
key1=123
key2=abc
key3=123.05
key3=123.05, key2=abc, key1=123, 
```


## <a id="哈希表(Hashtable)" style="padding-top: 60px;">6.哈希表(Hashtable)</a>

`Hashtable` 类提供了一种在用户定义键结构的基础上来组织数据的手段。

例如，在地址列表的哈希表中，你可以根据邮政编码作为键来存储和排序数据，而不是通过人名。

哈希表键的具体含义完全取决于哈希表的使用情景和它包含的数据。

实例：

新建 `HashtableTest.java` 文件，代码如下：

```java
import java.util.Enumeration;
import java.util.Hashtable;

public class HashtableTest {
    public static void main(String[] args) {
        Hashtable ht = new Hashtable();
        ht.put("key1", 123);
        ht.put("key2", "abc");
        ht.put("key3", 123.05f);

        System.out.println(ht);
        System.out.println("size: " + ht.size());
        Enumeration<Object> elements = ht.elements();
        while (elements.hasMoreElements()) {
            System.out.print(elements.nextElement() + " ");
        }
        System.out.println();
        System.out.println("key1=" + ht.get("key1"));
        System.out.println("key2=" + ht.get("key2"));
        System.out.println("key3=" + ht.get("key3"));
        Enumeration<String> keys = ht.keys();
        while (keys.hasMoreElements()){
            String key = keys.nextElement();
            System.out.print(key + "=" + ht.get(key) + ", ");
        }
        System.out.println();
    }
}
```

运行结果如下：

```cmd
{key3=123.05, key2=abc, key1=123}
size: 3
123.05 abc 123 
key1=123
key2=abc
key3=123.05
key3=123.05, key2=abc, key1=123, 
```

## <a id="属性(Properties)" style="padding-top: 60px;">7.属性(Properties)</a>

`Properties` 继承于 `Hashtable.Properties` 类表示了一个持久的属性集.属性列表中每个键及其对应值都是一个字符串。

`Properties` 类被许多Java类使用。例如，在获取环境变量时它就作为 `System.getProperties()` 方法的返回值。


实例：

新建 `PropertiesTest.java` 文件，代码如下：

```java
import java.io.*;
import java.util.Date;
import java.util.Properties;

public class PropertiesTest {
    public static void main(String[] args) {
        // 写入属性
        writeProperties();
        System.out.println("---------------------");

        // 读取属性
        readProperties();
        System.out.println("---------------------");
    }

    static void writeProperties() {
        Properties properties = new Properties();
        OutputStream output = null;
        try {
            output = new FileOutputStream("config.properties");
            properties.setProperty("url", "jdbc:mysql://localhost:3306/");
            properties.setProperty("username", "root");
            properties.setProperty("password", "root");
            properties.setProperty("database", "users");//保存键值对到内存
            properties.store(output, "Xiaojun modify" + new Date().toString());
            // 保存键值对到文件中
            System.out.println("写入完成");
        } catch (IOException io) {
            io.printStackTrace();
        } finally {
            if (output != null) {
                try {
                    output.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    static void readProperties() {

        try {
            InputStream in = new BufferedInputStream(new FileInputStream(new File("config.properties")));
            Properties prop = new Properties();

            prop.load(in);
            System.out.println("url: " + prop.getProperty("url"));
            System.out.println("username: " + prop.getProperty("username"));
            System.out.println("password: " + prop.getProperty("password"));
            System.out.println("database: " + prop.getProperty("database"));
            System.out.println("读取完成");
        } catch (FileNotFoundException e) {
            System.out.println("properties文件路径书写有误，请检查！");
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

运行结果如下：


```cmd
写入完成
---------------------
url: jdbc:mysql://localhost:3306/
username: root
password: root
database: users
读取完成
---------------------
```


#### 源码获取

实例源码已经托管到如下地址：

- <a href="https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/advance/datastructure" target="_blank">https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/advance/datastructure</a>

- <a href="https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/advance/datastructure" target="_blank">https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/advance/datastructure</a>

----------

下一篇：[集合](/training/java-collection.html "集合 - 高级教程 - Java入门 - 免费课程 - 光束云 - work100.net")