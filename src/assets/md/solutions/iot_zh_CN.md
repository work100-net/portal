
## <a id="物联网" style="padding-top: 60px;">物联网</a>

针对企业用户物联网应用场景上云的实际需求，我们实现了开箱即用的IoT云控制台，控制台支持多语言，采用响应式布局，根据终端访问设备（电脑、手机）自动适配UI。

### <a id="服务方式" style="padding-top: 60px;">服务方式</a>

我们提供了多种的服务方式来满足各种规模企业的需求，助力企业信息化：

#### 1.免费使用云平台

如果您的应用场景比较简单、监控设备较少，您可以直接使用我们提供的**免费**云平台来管理您的终端设备。

免费云平台提供了基础的数据持久化保存策略（暂时定为1个月，过期数据自动清除），如果需要更长时间的（如：3个月、半年、1年等）持久化存储，您可以用极低成本购买我们的不同期限的长时存储服务。

云平台的地址为：<a href="https://console.work100.net/" target="_blank">https://console.work100.net/</a>

#### 2.企业私有化部署

我们的云平台采取了严格的数据加密技术、应用了完善的权限控制体系、使用稳妥的运维策略，能够确保数据的安全性以及服务的稳定性。

如果您的企业有严格的信息安全规章制度，我们还提供私有化部署服务，以满足企业运营管理需要。

与此同时，我们还提供二次开发服务，以对接企业现有各业务系统。



### <a id="功能展示" style="padding-top: 60px;">功能展示</a>

我们先看下控制台的全景画面：

中文

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_zh_CN.png" style="max-width: 98%" />

English

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_en.png" style="max-width: 98%" />


主要功能特性如下：

- [完整的MQTT协议支持](#完整的MQTT协议支持)

- [设备链接状态实时监听](#设备链接状态实时监听)

- [远程实时控制终端设备](#远程实时控制终端设备)

- [自定义的数据传输格式](#自定义的数据传输格式)

- [数据可按需持久化存储](#数据可按需持久化存储)

- [直观的数据可视化看板](#直观的数据可视化看板)

- [任意时段历史数据查询](#任意时段历史数据查询)

- [丰富数据统计分析报表](#丰富数据统计分析报表)


#### <a id="完整的MQTT协议支持" style="padding-top: 60px;">1.完整的MQTT协议支持：</a>

消息服务器完整支持 MQTT V3.1/V3.1.1/V5.0 版本协议规范，并扩展支持 MQTT-SN 、WebSocket、CoAP、LwM2M、Stomp 以及私有 TCP/UDP 协议。

服务端配置样例

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_mqtt_server.png" style="max-width: 98%" />

客户端连接样例

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_mqtt_client.png" style="max-width: 98%" />

#### <a id="设备链接状态实时监听" style="padding-top: 60px;">2.设备链接状态实时监听：</a>

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_connection.png" style="max-width: 98%" />

#### <a id="远程实时控制终端设备" style="padding-top: 60px;">3.远程实时控制终端设备：</a>

控制列表

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_rtc_1.png" style="max-width: 98%" />

控制看板

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_rtc_2.png" style="max-width: 98%" />

定制看板

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_rtc_3.png" style="max-width: 98%" />

#### <a id="自定义的数据传输格式" style="padding-top: 60px;">4.自定义的数据传输格式：</a>

传输数据格式定义

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_json_data.png" style="max-width: 98%" />

每台设备可配置多种传输数据

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_json_data_list.png" style="max-width: 98%" />

#### <a id="数据可按需持久化存储" style="padding-top: 60px;">5.数据可按需持久化存储：</a>

云平台支持海量数据的持久化存储，且基本不影响性能，企业伙伴可按需的选择持久化存储时长，如：

1个月、3个月、半年、1年、3年、5年，默认为：1个月

#### <a id="直观的数据可视化看板" style="padding-top: 60px;">6.直观的数据可视化看板：</a>

除了可以通过实时控制画面查看实时数据，还可通过控制台查看概览数据

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_console.png" style="max-width: 98%" />

#### <a id="任意时段历史数据查询" style="padding-top: 60px;">7.任意时段历史数据查询：</a>

可以查看任意设备、任意主题、任意时间段的数据详单

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_report_list.png" style="max-width: 98%" />


#### <a id="丰富数据统计分析报表" style="padding-top: 60px;">8.丰富数据统计分析报表：</a>

还可以对数据进行统计分析，可按天、月、年查看数据统计

<img src="http://contents.work100.net/images/productions/cloud/zh_CN/iot_report_chart.png" style="max-width: 98%" />
