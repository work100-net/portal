
# <a id="封装" style="padding-top: 60px;">封装</a>

序号|文内章节|视频
:---:|:---|:---
1|[概述](#概述)|
2|[封装的优点](#封装的优点)|
3|[实现封装的步骤](#实现封装的步骤)|
4|[实例](#实例)|

请参照如上`章节导航`进行阅读

## <a id="概述" style="padding-top: 60px;">1.概述</a>

在面向对象程式设计方法中，封装（英语：`Encapsulation`）是指一种将抽象性函式接口的实现细节部份包装、隐藏起来的方法。

封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问。

要访问该类的代码和数据，必须通过严格的接口控制。

封装最主要的功能在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。

适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。


## <a id="封装的优点" style="padding-top: 60px;">2.封装的优点</a>

- 良好的封装能够减少耦合。
- 类内部的结构可以自由修改。
- 可以对成员变量进行更精确的控制。
- 隐藏信息，实现细节。


## <a id="实现封装的步骤" style="padding-top: 60px;">3.实现封装的步骤</a>

- 修改属性的可见性来限制对属性的访问（一般限制为 `private`），例如：

```java
public class Person {
    private String name;
    private int age;
}
```

这段代码中，将 `name` 和 `age` 属性设置为私有的，只能本类才能访问，其他类都访问不了，如此就对信息进行了隐藏。

- 对每个值属性提供对外的公共方法访问，也就是创建一对赋取值方法，用于对私有属性的访问，例如：

```java
public class Person{
    private String name;
    private int age;
​
    public int getAge(){
      return age;
    }
​
    public String getName(){
      return name;
    }
​
    public void setAge(int age){
      this.age = age;
    }
​
    public void setName(String name){
      this.name = name;
    }
}
```

采用 `this` 关键字是为了解决实例变量（ `private String name` ）和局部变量（ `setName(String name)` 中的 `name` 变量 ）之间发生的同名的冲突。


## <a id="实例" style="padding-top: 60px;">4.实例</a>

让我们来看一个 Java 封装类的例子：

```java
/* 文件名: EncapTest.java */
public class EncapTest{
 
   private String name;
   private String idNum;
   private int age;
 
   public int getAge(){
      return age;
   }
 
   public String getName(){
      return name;
   }
 
   public String getIdNum(){
      return idNum;
   }
 
   public void setAge( int newAge){
      age = newAge;
   }
 
   public void setName(String newName){
      name = newName;
   }
 
   public void setIdNum( String newId){
      idNum = newId;
   }
}
```

以上实例中 `public` 方法是外部类访问该类成员变量的入口。

通常情况下，这些方法被称为 `getter` 和 `setter` 方法。

因此，任何要访问类中私有成员变量的类都要通过这些 `getter` 和 `setter` 方法。

通过如下的例子说明 `EncapTest` 类的变量怎样被访问：


```java
/* F文件名 : RunEncap.java */
public class RunEncap{
   public static void main(String[] args){
      EncapTest encap = new EncapTest();
      encap.setName("James");
      encap.setAge(20);
      encap.setIdNum("12343ms");
 
      System.out.print("Name : " + encap.getName()+ 
                             " Age : "+ encap.getAge());
    }
}
```

```cmd
Name : James Age : 20
```


#### 源码获取

实例源码已经托管到如下地址：

- <a href="https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/oo/encapsulation" target="_blank">https://github.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/oo/encapsulation</a>

- <a href="https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/oo/encapsulation" target="_blank">https://gitee.com/work100-net/training-stage1/tree/master/src/main/java/net/work100/training/stage1/oo/encapsulation</a>


----------

上一篇：[抽象类](/training/java-abstract.html "抽象类 - 面向对象 - Java入门 - 免费课程 - 光束云 - work100.net")

下一篇：[接口](/training/java-interface.html "接口 - 面向对象 - Java入门 - 免费课程 - 光束云 - work100.net")