
# <a id="开发环境配置" style="padding-top: 60px;">开发环境配置</a>

在本章节中我们将为大家介绍如何搭建Java开发环境。

## <a id="一、JDK安装" style="padding-top: 60px;">一、JDK安装</a>

Java可以运行在多种操作系统平台上，下面分别介绍在各主流平台上如何安装配置JDK。


### <a id="1.Windows上安装" style="padding-top: 60px;">1.Windows上安装</a>

#### 1.1 下载JDK

首先我们需要下载Java开发工具包JDK，下载地址：

<a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">http://www.oracle.com/technetwork/java/javase/downloads/index.html</a>

考虑兼容性问题，我们推荐下载 Java 8 版本，后续教程均基于 Java 8 版本撰写，下载入口如下图：

<img src="http://contents.work100.net/images/training/java/environment-setup/java8-down.jpg" style="max-width: 98%" />


下载地址：

<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html</a>

接受许可： Accept License Agreement

选择64位：

<img src="http://contents.work100.net/images/training/java/environment-setup/java8-down-2.jpg" style="max-width: 98%" />


#### 1.2 安装JDK

下载完成后，JDK的安装根据提示进行，还有安装JDK的时候也会安装JRE，一并安装就可以了。

安装JDK，安装过程中可以自定义安装目录等信息，例如我选择的安装目录为：

```
C:\Java\jdk1.8.0_231
```

#### 1.3 配置环境变量

1). 安装完成后，右击"我的电脑"，点击"属性"，选择"高级系统设置"；

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-1.jpg" style="max-width: 98%" />


2). 选择"高级"选项卡，点击"环境变量"；

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-2.jpg" style="max-width: 98%" />

然后就会出现如下图所示的画面：

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-3.jpg" style="max-width: 98%" />

在 "系统变量" 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH(大小写无所谓),若已存在则点击"编辑"，不存在则点击"新建"。

> 注意：如果使用 1.5 以上版本的 JDK，不用设置 CLASSPATH 环境变量，也可以正常编译和运行 Java 程序。

环境变量设置如下：

变量名|变量值|备注
:-|:-|:-
JAVA_HOME|C:\Java\jdk1.8.0_231|要根据自己的实际路径配置
Path|%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;|
CLASSPATH|.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;|记得前面有个"."

- **JAVA_HOME设置**

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-java-home-1.jpg" style="max-width: 98%" />

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-java-home-2.jpg" style="max-width: 98%" />

- **PATH设置**

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-path-1.jpg" style="max-width: 98%" />

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-path-2.jpg" style="max-width: 98%" />


> 注意：在 Windows10 中，Path 变量里是分条显示的，我们需要将 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin; 分开添加，否则无法识别：

```bash
%JAVA_HOME%\bin;
%JAVA_HOME%\jre\bin;
```

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-path-win10.jpg" style="max-width: 98%" />


- **CLASSPATH设置**

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-classpath-1.jpg" style="max-width: 98%" />

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-classpath-2.jpg" style="max-width: 98%" />

#### 1.4 验证JDK

测试JDK是否安装成功

1). "开始"->"运行"，键入"cmd"；

2). 键入命令: java -version、java、javac 几个命令，出现以下信息，说明环境变量配置成功；

<img src="http://contents.work100.net/images/training/java/environment-setup/win-java-env-verify.jpg" style="max-width: 98%" />


### <a id="2.Mac上安装" style="padding-top: 60px;">2.Mac上安装</a>

#### 2.1 下载SDK

下载地址：

<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html</a>

接受许可： Accept License Agreement

选择64位：

<img src="http://contents.work100.net/images/training/java/environment-setup/java8-down-mac.jpg" style="max-width: 98%" />


#### 2.2 安装JDK

下载完成后，双击.dmg文件，按提示一路Next下去即可完成指引安装。


#### 2.3 显示JDK安装路径

安装完成后输入如下命令：

```bash
/usr/libexec/java_home -V
```

> 注意：输入命令参数区分大小写（此处的V是大写）

以我安装的 **jdk-8u191** 版本为例，运行结果如下：

```bash
localhost:~ liuxiaojun$ /usr/libexec/java_home -V
Matching Java Virtual Machines (1):
    1.8.0_191, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home
```

可见JDK的安装路径为：

```text
/Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home
```

#### 2.4 配置环境变量

1). 新建一个 .bash_profile 的隐藏配置文件，打开终端，输入如下命令：

```bash
cd
nano .bash_profile
```

> 我使用了 **nano** 作为文件创建及编辑工具，您也可以使用其他工具

2). 将如下环境变量配置内容粘贴到文件中：

```text
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.

export JAVA_HOME
export PATH
export CLASSPATH
```

然后 **control + x** 保存退出

3). 使配置文件生效

```bash
source .bash_profile
```

4). 验证环境变量配置是否成功

```bash
localhost:~ liuxiaojun$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home
```

#### 2.5 验证JDK

输入如下命令验证JDK安装配置是否正确，如果正常显示jdk版本则表示配置正确：

```bash
localhost:~ liuxiaojun$ java -version
java version "1.8.0_191"
Java(TM) SE Runtime Environment (build 1.8.0_191-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)
```

### <a id="3.Linux上安装" style="padding-top: 60px;">3.Linux上安装</a>

#### 3.1 下载SDK

下载地址：

<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html</a>

接受许可： Accept License Agreement

选择64位：

<img src="http://contents.work100.net/images/training/java/environment-setup/java8-down-linux.jpg" style="max-width: 98%" />


#### 3.2 安装JDK

下载完成后，将压缩包解压到linux系统，以我安装的**jdk-8u191**版本为例，解压在目录：

```bash
/usr/local/jdk1.8.0_191
```

#### 3.3 配置环境变量

1). 修改全局配置文件：

```bash
nano /etc/profile
```

将如下配置写入文件中：

```text
export JAVA_HOME=/usr/local/jdk1.8.0_191
export JRE_HOME=$JAVA_HOME/jre

export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```


2). 使配置生效：

```bash
source /etc/profile
```

3). 验证配置是否正确，输入如下命令：

```bash
root@ubuntu:~# java -version
```

如果配置正确，则显示对应JDK版本信息：

```bash
java version "1.8.0_191"
Java(TM) SE Runtime Environment (build 1.8.0_191-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)
```



## <a id="二、IDE安装" style="padding-top: 60px;">二、IDE安装</a>

我们推荐使用 IntelliJ IDEA 作为Java的IDE工具，后续的教程也将通过IDEA进行编码。


### 下载

官网地址： <a href="http://www.jetbrains.com/idea/download" target="_blank">http://www.jetbrains.com/idea/download</a>

### 安装

关于 IntelliJ IDEA 的详细安装步骤在此不做过多介绍，跟常规软件安装没有差别，有问题的请异步百度、谷歌。

IntelliJ IDEA Ultimate 为收费版本，适合企业级开发，为了IDEA的持续发展，我们推荐您购买商业授权。




----------

上一篇：<a href="/training/java-intro.html">Java简介</a>

下一篇：<a href="/training/java-basic-syntax.html">基础语法</a>
