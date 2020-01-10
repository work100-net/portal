
# <a id="条件语句" style="padding-top: 60px;">条件语句</a>

一个 if 语句包含一个布尔表达式和一条或多条语句。


#### 语法

if 语句的语法如下：

```cmd
if(布尔表达式)
{
   //如果布尔表达式为true将执行的语句
}
```

如果布尔表达式的值为 true，则执行 if 语句中的代码块，否则执行 if 语句块后面的代码。

```java
public class Test {
 
   public static void main(String args[]){
      int x = 10;
 
      if( x < 20 ){
         System.out.print("这是 if 语句");
      }
   }
}
```

以上代码编译运行结果如下：

```cmd
这是 if 语句
```


## <a id="if...else语句" style="padding-top: 60px;">if...else语句</a>

if 语句后面可以跟 else 语句，当 if 语句的布尔表达式值为 false 时，else 语句块会被执行。

#### 语法

if…else 的用法如下：

```cmd
if(布尔表达式){
   //如果布尔表达式的值为true
}else{
   //如果布尔表达式的值为false
}
```

#### 实例

```java
public class Test {
 
   public static void main(String args[]){
      int x = 30;
 
      if( x < 20 ){
         System.out.print("这是 if 语句");
      }else{
         System.out.print("这是 else 语句");
      }
   }
}
```

以上代码编译运行结果如下：

```cmd
这是 else 语句
```


## <a id="if...else if...else语句" style="padding-top: 60px;">if...else if...else语句</a>

if 语句后面可以跟 else if…else 语句，这种语句可以检测到多种可能的情况。

使用 if，else if，else 语句的时候，需要注意下面几点：

if 语句至多有 1 个 else 语句，else 语句在所有的 else if 语句之后。
if 语句可以有若干个 else if 语句，它们必须在 else 语句之前。
一旦其中一个 else if 语句检测为 true，其他的 else if 以及 else 语句都将跳过执行。

#### 语法

if...else 语法格式如下:

```cmd
if(布尔表达式 1){
   //如果布尔表达式 1的值为true执行代码
}else if(布尔表达式 2){
   //如果布尔表达式 2的值为true执行代码
}else if(布尔表达式 3){
   //如果布尔表达式 3的值为true执行代码
}else {
   //如果以上布尔表达式都不为true执行代码
}
```

#### 实例


```java
public class Test {
   public static void main(String args[]){
      int x = 30;
 
      if( x == 10 ){
         System.out.print("Value of X is 10");
      }else if( x == 20 ){
         System.out.print("Value of X is 20");
      }else if( x == 30 ){
         System.out.print("Value of X is 30");
      }else{
         System.out.print("这是 else 语句");
      }
   }
}
```

以上代码编译运行结果如下：


```cmd
Value of X is 30
```


## <a id="嵌套的if…else语句" style="padding-top: 60px;">嵌套的if…else语句</a>

使用嵌套的 if…else 语句是合法的。也就是说你可以在另一个 if 或者 else if 语句中使用 if 或者 else if 语句。

#### 语法

嵌套的 if…else 语法格式如下：

```cmd
if(布尔表达式 1){
   ////如果布尔表达式 1的值为true执行代码
   if(布尔表达式 2){
      ////如果布尔表达式 2的值为true执行代码
   }
}
```

你可以像 if 语句一样嵌套 else if...else。

#### 实例

```java
public class Test {
 
   public static void main(String args[]){
      int x = 30;
      int y = 10;
 
      if( x == 30 ){
         if( y == 10 ){
             System.out.print("X = 30 and Y = 10");
          }
       }
    }
}
```

以上代码编译运行结果如下：

```cmd
X = 30 and Y = 10
```

----------

上一篇：<a href="/training/java-loop.html">循环结构</a>

下一篇：<a href="/training/java-switch-case.html">switch_case</a>
