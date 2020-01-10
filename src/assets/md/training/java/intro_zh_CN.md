
# <a id="Java简介" style="padding-top: 60px;">Java简介</a>


## <a id="概述" style="padding-top: 60px;">概述</a>

Java 是由 Sun Microsystems 公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由 James Gosling 和同事们共同研发，并在1995年正式推出。

Java 分为三个体系：

- JavaSE(J2SE): Java2 Platform Standard Edition，Java平台标准版

- JavaEE(J2EE): Java 2 Platform,Enterprise Edition，Java平台企业版

- JavaME(J2ME): Java 2 Platform Micro Edition，Java平台微型版

2005年6月，JavaOne 大会召开，SUN 公司公开 Java SE 6。此时，Java 的各种版本已经更名以取消其中的数字"2"：J2EE更名为Java EE, J2SE更名为Java SE，J2ME更名为Java ME。

## <a id="主要特性" style="padding-top: 60px;">主要特性</a>

### 简单

Java语言的语法与C语言和C++语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java丢弃了C++中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java语言不使用指针，而使用引用。并提供了自动的垃圾回收，使得程序员不必为内存管理而担忧。

### 面向对象

Java语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制(关键字为implements)。Java语言全面支持动态绑定，而C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。

### 分布式

Java语言支持Internet应用的开发，在基本的Java应用编程接口中有一个网络应用编程接口(java net)，它提供了用于网络应用编程的类库，包括URL、URLConnection、Socket、ServerSocket等。Java的RMI(远程方法激活)机制也是开发分布式应用的重要手段。

### 健壮

Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。Java的安全检查机制使得Java更具健壮性。

### 安全

Java通常被用在网络环境中，为此，Java提供了一个安全机制以防恶意代码的攻击。除了Java语言具有的许多安全特性以外，Java对通过网络下载的类具有一个安全防范机制(类ClassLoader)，如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制(类SecurityManager)让Java应用设置安全哨兵。

### 体系结构

Java程序(后缀为java的文件)在Java平台上被编译为体系结构中立的字节码格式(后缀为class的文件)，然后可以在实现这个Java平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。

### 可移植

这种可移植性来源于体系结构中立性，另外，Java还严格规定了各个基本数据类型的长度。Java系统本身也具有很强的可移植性，Java编译器是用Java实现的，Java的运行环境是用ANSI C实现的。

### 解释型

如前所述，Java程序在Java平台上被编译为字节码格式，然后可以在实现这个Java平台的任何系统中运行。在运行时，Java平台中的Java解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。

### 高性能

与那些解释型的高级脚本语言相比，Java的确是高性能的。事实上，Java的运行速度随着JIT(Just-In-Time)编译器技术的发展越来越接近于C++。

### 多线程

在Java语言中，线程是一种特殊的对象，它必须由Thread类或其子(孙)类来创建。通常有两种方法来创建线程：其一，使用型构为Thread(Runnable)的构造子类将一个实现了Runnable接口的对象包装成一个线程，其二，从Thread类派生出子类并重写run方法，使用该子类创建的对象即为线程。值得注意的是Thread类已经实现了Runnable接口，因此，任何一个线程均有它的run方法，而run方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java语言支持多个线程的同时执行，并提供多线程之间的同步机制(关键字为synchronized)。

### 动态

Java语言的设计目标之一是适应于动态变化的环境。Java程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java中的类有一个运行时刻的表示，能进行运行时刻的类型检查。


## <a id="发展历史" style="padding-top: 60px;">发展历史</a>

- 1995年5月23日，Java语言诞生

- 1996年1月，第一个JDK-JDK1.0诞生

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

- 2010年11月，由于甲骨文对于Java社区的不友善，因此Apache扬言将退出JCP[4]。

- 2011年7月28日，甲骨文发布 Java7.0 的正式版。

- 2014年3月18日，Oracle公司发表 Java SE 8。

- 2017年9月21日，Oracle公司发表 Java SE 9

- 2018年3月21日，Oracle公司发表 Java SE 10

- 2018年9月25日，Java SE 11 发布

- 2019年3月20日，Java SE 12 发布

## <a id="开发工具" style="padding-top: 60px;">开发工具</a>

作为一名Java程序开发人员，可以的选择集成开发环境IDE(Integrated Development Environment)非常多，这得益于Java是一门开源语言。

- 有开源免费的

- 有商用收费的

如何选择一款适合自己的集成开发环境，亦或说选择一款符合自己项目开发需要的集成开发环境，如果选择得当，那么就能够使得开发工作事半功倍；否则事倍功半。

### 免费开源Eclipse

Eclipse最初是由IBM公司开发的替代商业软件Visual Age for Java的下一代IDE开发环境，2001年11月贡献给开源社区，现在它由非营利软件供应商联盟Eclipse基金会(Eclipse Foundation)管理。Eclipse 是一个开放源代码的、基于 Java 的可扩展开发平台。就其本身而言，它只是一个框架和一组服务，用于通过插件组件构建开发环境。幸运的是Eclipse 附带了一个标准的插件集，包括 Java 开发工具(Java Development Tools，JDT)。

Eclipse是著名的跨平台的自由集成开发环境(IDE)。最初主要用来Java语言开发，但是目前亦有人通过插件使其作为其他计算机语言比如C++、PHP、Python等语言的开发工具。Eclipse的本身只是一个框架平台，但是众多插件的支持使得Eclipse拥有其他功能相对固定的IDE软件很难具有的灵活性。许多软件开发商以Eclipse为框架开发自己的IDE。

### 商用收费MyEclipse

MyEclipse是Eclipse的插件，也是一款功能强大的J2EE集成开发环境，由Genuitec公司发布，它是商用收费的。

MyEclipse 是对Eclipse IDE的扩展，利用它可以在数据库和JavaEE的开发、发布以及应用程序服务器的整合方面极大的提高工作效率。它是功能丰富的JavaEE集成开发环境，包括了完备的编码、调试、测试和发布功能，完整支持HTML、Struts、JSP、CSS、Javascript、SQL，Hibernate，Spring。

### Oracle公司免费的NetBeans

NetBeans是Sun公司(2009年被甲骨文收购)在2000年创立的开放源代码的面向开发人员和客户社区的集成开发环境，旨在构建世界级的Java IDE。

NetBeans当前可以在Solaris、Windows、Linux和Macintosh OS X平台上进行开发，并在SPL(Sun公用许可)范围内使用，是一个屡获殊荣的集成开发环境。NetBeans包括开源的开发环境和应用平台，NetBeans IDE可以使开发人员利用Java平台能够快速创建Web、企业、桌面以及移动应用程序，NetBeans IDE目前支持PHP、Ruby、JavaScript、Ajax、Groovy、Grails和C /C++等开发语言。

NetBeans项目由一个活跃的开发社区提供支持， NetBean开发环境提供了丰富的产品文档和培训资源以及大量的第三方插件。

### IntelliJ IDEA

IntelliJ IDEA是一款综合的Java 编程环境，被许多开发人员和行业专家誉为市场上最好的IDE。

它提供了一系列最实用的的工具组合：

- 智能编码辅助和自动控制

- 支持J2EE，Ant，JUnit，SVN和Git集成

- 非平行的编码检查和创新的GUI设计器

IDEA把Java开发人员从一些耗时的常规工作中解放出来，显著地提高了开发效率。具有运行更快速，生成更好的代码；持续的重新设计和日常编码变得更加简易，与其它工具的完美集成；很高的性价比等特点。

IntelliJ IDEA是收费软件，在2009年推出了免费的社区开源版本，不过商用还是需要收费的。


> 作为一个资深的Java开发工程师，我负责人的向大家推荐 IntelliJ IDEA作为开发工具，理由不必细说，谁用谁知道！



----------

下一篇：<a href="/training/java-environment-setup.html">开发环境配置</a>
