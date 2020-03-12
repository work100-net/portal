
# <a id="Java简介" style="padding-top: 60px;">Java简介</a>

序号|文内章节|视频
:---:|:---|:---
1|[概述](#概述)|<a href="https://www.bilibili.com/video/av85630436/" target="_blank">B站</a>
2|[主要特性](#主要特性)|
3|[发展历史](#发展历史)|
4|[开发工具](#开发工具)|

请参照如上`章节导航`进行阅读


## <a id="概述" style="padding-top: 60px;">1.概述</a>

Java 是由 `Sun Microsystems` 公司于1995年5月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 `James Gosling` 和同事们共同研发，并在1995年正式推出。

Java 分为三个体系：

- JavaSE(J2SE): Java2 Platform Standard Edition，Java平台标准版
- JavaEE(J2EE): Java 2 Platform,Enterprise Edition，Java平台企业版
- JavaME(J2ME): Java 2 Platform Micro Edition，Java平台微型版

2005年6月，JavaOne 大会召开，Sun 公司公开 Java SE 6。此时，Java 的各种版本已经更名以取消其中的数字"2"：J2EE更名为Java EE, J2SE更名为Java SE，J2ME更名为Java ME。

## <a id="主要特性" style="padding-top: 60px;">2.主要特性</a>

### 简单

Java 语言的语法与 `C` 语言和 `C++` 语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java 丢弃了 `C++` 中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java 语言不使用指针，而使用引用。并提供了自动的垃圾回收，使得程序员不必为内存管理而担忧。

### 面向对象

Java 语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制(关键字为 `implements` )。Java 语言全面支持动态绑定，而 `C++` 语言只对虚函数使用动态绑定。总之，Java 语言是一个纯的面向对象程序设计语言。

### 分布式

Java 语言支持 `Internet` 应用的开发，在基本的 Java 应用编程接口中有一个网络应用编程接口(`java net`)，它提供了用于网络应用编程的类库，包括`URL`、`URLConnection`、`Socket`、`ServerSocket`等。Java 的 `RMI`(远程方法激活)机制也是开发分布式应用的重要手段。

### 健壮

Java 的强类型机制、异常处理、垃圾的自动收集等是 Java 程序健壮性的重要保证。对指针的丢弃是 Java 的明智选择。Java的安全检查机制使得 Java 更具健壮性。

### 安全

Java 通常被用在网络环境中，为此，Java 提供了一个安全机制以防恶意代码的攻击。除了 Java 语言具有的许多安全特性以外，Java 对通过网络下载的类具有一个安全防范机制(类 `ClassLoader`)，如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制(类 `SecurityManager`)让 Java 应用设置安全哨兵。

### 体系结构

Java 程序(后缀为 `.java` 的文件)在 Java 平台上被编译为体系结构中立的字节码格式(后缀为 `.class` 的文件)，然后可以在实现这个 Java 平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。

### 可移植

这种可移植性来源于体系结构中立性，另外，Java 还严格规定了各个基本数据类型的长度。Java 系统本身也具有很强的可移植性，Java 编译器是用Java 实现的，Java 的运行环境是用 `ANSI C` 实现的。

### 解释型

如前所述，Java 程序在 Java 平台上被编译为字节码格式，然后可以在实现这个 Java 平台的任何系统中运行。在运行时，Java 平台中的 Java 解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。

### 高性能

与那些解释型的高级脚本语言相比，Java 的确是高性能的。事实上，Java 的运行速度随着 `JIT(Just-In-Time)` 编译器技术的发展越来越接近于 `C++`。

### 多线程

在 Java 语言中，线程是一种特殊的对象，它必须由 `Thread` 类或其子(孙)类来创建。通常有两种方法来创建线程：其一，使用型构为 `Thread(Runnable)` 的构造子类将一个实现了 `Runnable` 接口的对象包装成一个线程，其二，从 `Thread` 类派生出子类并重写 `run` 方法，使用该子类创建的对象即为线程。值得注意的是 `Thread` 类已经实现了 `Runnable` 接口，因此，任何一个线程均有它的 `run` 方法，而 `run` 方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java 语言支持多个线程的同时执行，并提供多线程之间的同步机制(关键字为 `synchronized`)。

### 动态

Java 语言的设计目标之一是适应于动态变化的环境。Java 程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java 中的类有一个运行时刻的表示，能进行运行时刻的类型检查。


## <a id="发展历史" style="padding-top: 60px;">3.发展历史</a>

- 1995年5月23日，Java语言诞生
- 1996年1月，第一个JDK-JDK1.0诞
- 1996年4月，10个最主要的操作系统供应商申明将在其产品中嵌入JAVA技术
- 1996年9月，约8.3万个网页应用了JAVA技术来制作
- 1997年2月18日，JDK1.1发布
- 1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议规模之纪录
- 1997年9月，JavaDeveloperConnection社区成员超过十万
- 1998年2月，JDK1.1被下载超过2,000,000次
- 1998年12月8日，JAVA2企业平台J2EE发布
- 1999年6月，SUN公司发布Java的三个版本：标准版(JavaSE,以前是J2SE)、企业版(JavaEE以前是J2EE)和微型版(JavaME，以前是J2ME)
- 2000年5月8日，JDK1.3发布
- 2000年5月29日，JDK1.4发布
- 2001年6月5日，NOKIA宣布，到2003年将出售1亿部支持Java的手机
- 2001年9月24日，J2EE1.3发布
- 2002年2月26日，J2SE1.4发布，自此Java的计算能力有了大幅提升
- 2004年9月30日18:00PM，J2SE1.5发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5更名为Java SE 5.0
- 2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名，以取消其中的数字"2"：J2EE更名为Java EE，J2SE更名为Java SE，J2ME更名为Java ME
- 2006年12月，SUN公司发布JRE6.0
- 2009年04月20日，甲骨文74亿美元收购Sun。取得java的版权。
- 2010年11月，由于甲骨文对于Java社区的不友善，因此Apache扬言将退出JCP。
- 2011年7月28日，甲骨文发布 Java7.0 的正式版。
- 2014年3月18日，Oracle公司发表 Java SE 8。
- 2017年9月21日，Oracle公司发表 Java SE 9
- 2018年3月21日，Oracle公司发表 Java SE 10
- 2018年9月25日，Java SE 11 发布
- 2019年3月20日，Java SE 12 发布

## <a id="开发工具" style="padding-top: 60px;">4.开发工具</a>

作为一名 Java 程序开发人员，可以的选择集成开发环境 `IDE(Integrated Development Environment)` 非常多，这得益于 Java 是一门开源语言。

- 有开源免费的
- 有商用收费的

如何选择一款适合自己的集成开发环境，亦或说选择一款符合自己项目开发需要的集成开发环境，如果选择得当，那么就能够使得开发工作事半功倍；否则事倍功半。

### 免费开源Eclipse

`Eclipse` 最初是由 `IBM` 公司开发的替代商业软件 `Visual Age for Java`的下一代 `IDE` 开发环境，2001年11月贡献给开源社区，现在它由非营利软件供应商联盟 `Eclipse` 基金会(Eclipse Foundation)管理。`Eclipse` 是一个开放源代码的、基于 Java 的可扩展开发平台。就其本身而言，它只是一个框架和一组服务，用于通过插件组件构建开发环境。幸运的是 `Eclipse` 附带了一个标准的插件集，包括 Java 开发工具(Java Development Tools，`JDT`)。

`Eclipse` 是著名的跨平台的自由集成开发环境(`IDE`)。最初主要用来 Java 语言开发，但是目前亦有人通过插件使其作为其他计算机语言比如 `C++`、`PHP`、`Python` 等语言的开发工具。`Eclipse` 的本身只是一个框架平台，但是众多插件的支持使得 `Eclipse` 拥有其他功能相对固定的IDE软件很难具有的灵活性。许多软件开发商以 `Eclipse` 为框架开发自己的 `IDE`。

### 商用收费MyEclipse

`MyEclipse` 是 `Eclipse` 的插件，也是一款功能强大的 J2EE 集成开发环境，由 `Genuitec` 公司发布，它是商用收费的。

`MyEclipse` 是对 `Eclipse` `IDE` 的扩展，利用它可以在数据库和 JavaEE 的开发、发布以及应用程序服务器的整合方面极大的提高工作效率。它是功能丰富的 JavaEE 集成开发环境，包括了完备的编码、调试、测试和发布功能，完整支持`HTML`、`Struts`、`JSP`、`CSS`、`Javascript`、`SQL`，`Hibernate`，`Spring`。

### Oracle公司免费的NetBeans

`NetBeans` 是Sun公司(2009年被甲骨文收购)在2000年创立的开放源代码的面向开发人员和客户社区的集成开发环境，旨在构建世界级的 Java IDE。

`NetBeans` 当前可以在`Solaris`、`Windows`、`Linux`和`Macintosh OS X`平台上进行开发，并在`SPL`(Sun公用许可)范围内使用，是一个屡获殊荣的集成开发环境。`NetBeans` 包括开源的开发环境和应用平台，`NetBeans IDE` 可以使开发人员利用 Java 平台能够快速创建`Web`、`企业`、`桌面`以及`移动应用程序`，`NetBeans IDE` 目前支持`PHP`、`Ruby`、`JavaScript`、`Ajax`、`Groovy`、`Grails`和`C` /`C++`等开发语言。

`NetBeans` 项目由一个活跃的开发社区提供支持， `NetBean` 开发环境提供了丰富的产品文档和培训资源以及大量的第三方插件。

### IntelliJ IDEA

`IntelliJ IDEA` 是一款综合的 Java 编程环境，被许多开发人员和行业专家誉为市场上最好的 `IDE`。

它提供了一系列最实用的的工具组合：

- 智能编码辅助和自动控制
- 支持 `J2EE`，`Ant`，`JUnit`，`SVN` 和 `Git` 集成
- 非平行的编码检查和创新的 `GUI` 设计器

`IDEA` 把 Java 开发人员从一些耗时的常规工作中解放出来，显著地提高了开发效率。具有运行更快速，生成更好的代码；持续的重新设计和日常编码变得更加简易，与其它工具的完美集成；很高的性价比等特点。

`IntelliJ IDEA` 是收费软件，在2009年推出了免费的社区开源版本，不过商用还是需要收费的。


> 作为一个资深的 Java 开发工程师，我负责任的向大家推荐 `IntelliJ IDEA` 作为开发工具，理由不必细说，谁用谁知道！



----------

下一篇：[开发环境配置](/training/java-environment-setup.html "开发环境配置 - 语言基础 - Java入门 - 光束云 - work100.net")
