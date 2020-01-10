
## <a id="Java代码" style="padding-top: 60px;">Java代码</a>

### <a id="加密与解密" style="padding-top: 60px;">加密与解密</a>

主要功能特性：

- 对文本进行不可逆加密

- 支持多种加密方式：MD5、SHA256

- 密码加密自动加入Salt

源码如下：

```java
package net.work100.utils;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.DigestUtils;

/**
 * <p>Title: EncryptionUtils</p>
 * <p>Description: </p>
 *
 * @author liuxiaojun
 * @date 2019-08-09 10:08
 * ------------------- History -------------------
 * <date>      <author>       <desc>
 * 2019-08-09   liuxiaojun     初始创建
 * -----------------------------------------------
 */
public class EncryptionUtils {

    private static final int SALT_LENGTH = 6;
    private static final String SEPARATOR = "#";

    public enum EncryptionType {
        MD5("md5"),
        SHA256("sha256");

        private String type;

        EncryptionType(String type) {
            this.type = type;
        }

        public String getType() {
            return this.type;
        }

        public static EncryptionType getEncryptionType(String type) {
            if (StringUtils.isEmpty(type)) {
                return MD5;
            }
            for (EncryptionType encryptionType : EncryptionType.values()) {
                if (encryptionType.type.equalsIgnoreCase(type)) {
                    return encryptionType;
                }
            }
            return MD5;
        }
    }

    /**
     * 加密文本
     *
     * @param encryptionType 加密方式
     * @param sourceText     原文(区分大小写)
     * @return
     */
    public static String encryptText(EncryptionType encryptionType, String sourceText) {
        String encryptedText = "";
        switch (encryptionType) {
            case MD5:
                encryptedText = DigestUtils.md5DigestAsHex(sourceText.getBytes());
                break;
            case SHA256:
                break;
            default:
                encryptedText = DigestUtils.md5DigestAsHex(sourceText.getBytes());
                break;
        }
        return encryptedText;
    }

    /**
     * 加密密码
     *
     * @param encryptionType 加密方式
     * @param sourcePassword 明文密码
     * @return
     */
    public static String encryptPassword(EncryptionType encryptionType, String sourcePassword) {
        String salt = RandomStringUtils.randomAlphanumeric(SALT_LENGTH);
        sourcePassword = String.format("%s%s", sourcePassword, salt);
        String encryptedPassword = encryptText(encryptionType, sourcePassword);
        return String.format("%s%s%s%s%s", encryptionType.getType(), SEPARATOR, salt, SEPARATOR, encryptedPassword);
    }

    /**
     * 验证加密文本
     *
     * @param encryptionType 加密类型
     * @param sourceText     原文
     * @param encryptedText  密文
     * @return
     */
    public static boolean validateEncryptText(EncryptionType encryptionType, String sourceText, String encryptedText) {
        return encryptText(encryptionType, sourceText).equals(encryptedText);
    }

    /**
     * 验证密码
     *
     * @param sourcePassword    明文密码
     * @param encryptedPassword 加密后组合串
     * @return
     */
    public static boolean validateEncryptPassword(String sourcePassword, String encryptedPassword) {
        try {
            String[] split = encryptedPassword.split(SEPARATOR);
            EncryptionType encryptionType = EncryptionType.getEncryptionType(split[0]);
            String salt = split[1];
            encryptedPassword = split[2];
            sourcePassword = String.format("%s%s", sourcePassword, salt);
            return encryptText(encryptionType, sourcePassword).equals(encryptedPassword);
        } catch (Exception ex) {
            return false;
        }
    }
}
```


### <a id="Jackson工具类" style="padding-top: 60px;">Jackson工具类</a>

为使用Jackson类包进行序列化、反序列化操作的同学开发方便，我们抽象出了一些通用的方法：

```java
package net.diysdk.cloud.module.commons.utils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Jackson 工具类
 *
 * @author liuxiaojun
 * @date 2019-03-02 21:09
 * ------------------- History -------------------
 * <date>      <author>       <desc>
 * 2019-03-02   liuxiaojun     初始创建
 * -----------------------------------------------
 */
public class MapperUtils {
    private final static ObjectMapper objectMapper = new ObjectMapper();

    public static ObjectMapper getInstance() {
        return objectMapper;
    }

    /**
     * 转换为 JSON 字符串
     *
     * @param obj
     * @return
     * @throws Exception
     */
    public static String obj2json(Object obj) throws Exception {
        return objectMapper.writeValueAsString(obj);
    }

    /**
     * 转换为 JSON 字符串，忽略空值
     *
     * @param obj
     * @return
     * @throws Exception
     */
    public static String obj2jsonIgnoreNull(Object obj) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return mapper.writeValueAsString(obj);
    }

    /**
     * 转换为 JavaBean
     *
     * @param jsonString
     * @param clazz
     * @return
     * @throws Exception
     */
    public static <T> T json2pojo(String jsonString, Class<T> clazz) throws Exception {
        objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
        return objectMapper.readValue(jsonString, clazz);
    }

    /**
     * 字符串转换为 Map<String, Object>
     *
     * @param jsonString
     * @return
     * @throws Exception
     */
    public static <T> Map<String, Object> json2map(String jsonString) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return mapper.readValue(jsonString, Map.class);
    }

    /**
     * 字符串转换为 Map<String, T>
     */
    public static <T> Map<String, T> json2map(String jsonString, Class<T> clazz) throws Exception {
        Map<String, Map<String, Object>> map = objectMapper.readValue(jsonString, new TypeReference<Map<String, T>>() {
        });
        Map<String, T> result = new HashMap<String, T>();
        for (Map.Entry<String, Map<String, Object>> entry : map.entrySet()) {
            result.put(entry.getKey(), map2pojo(entry.getValue(), clazz));
        }
        return result;
    }

    /**
     * 深度转换 JSON 成 Map
     *
     * @param json
     * @return
     */
    public static Map<String, Object> json2mapDeeply(String json) throws Exception {
        return json2MapRecursion(json, objectMapper);
    }

    /**
     * 把 JSON 解析成 List，如果 List 内部的元素存在 jsonString，继续解析
     *
     * @param json
     * @param mapper 解析工具
     * @return
     * @throws Exception
     */
    private static List<Object> json2ListRecursion(String json, ObjectMapper mapper) throws Exception {
        if (json == null) {
            return null;
        }

        List<Object> list = mapper.readValue(json, List.class);

        for (Object obj : list) {
            if (obj != null && obj instanceof String) {
                String str = (String) obj;
                if (str.startsWith("[")) {
                    obj = json2ListRecursion(str, mapper);
                } else if (obj.toString().startsWith("{")) {
                    obj = json2MapRecursion(str, mapper);
                }
            }
        }

        return list;
    }

    /**
     * 把 JSON 解析成 Map，如果 Map 内部的 Value 存在 jsonString，继续解析
     *
     * @param json
     * @param mapper
     * @return
     * @throws Exception
     */
    private static Map<String, Object> json2MapRecursion(String json, ObjectMapper mapper) throws Exception {
        if (json == null) {
            return null;
        }

        Map<String, Object> map = mapper.readValue(json, Map.class);

        for (Map.Entry<String, Object> entry : map.entrySet()) {
            Object obj = entry.getValue();
            if (obj != null && obj instanceof String) {
                String str = ((String) obj);

                if (str.startsWith("[")) {
                    List<?> list = json2ListRecursion(str, mapper);
                    map.put(entry.getKey(), list);
                } else if (str.startsWith("{")) {
                    Map<String, Object> mapRecursion = json2MapRecursion(str, mapper);
                    map.put(entry.getKey(), mapRecursion);
                }
            }
        }

        return map;
    }

    /**
     * 将 JSON 数组转换为集合
     *
     * @param jsonArrayStr
     * @param clazz
     * @return
     * @throws Exception
     */
    public static <T> List<T> json2list(String jsonArrayStr, Class<T> clazz) throws Exception {
        JavaType javaType = getCollectionType(ArrayList.class, clazz);
        List<T> list = (List<T>) objectMapper.readValue(jsonArrayStr, javaType);
        return list;
    }

    /**
     * 获取泛型的 Collection Type
     *
     * @param collectionClass 泛型的Collection
     * @param elementClasses  元素类
     * @return JavaType Java类型
     * @since 1.0
     */
    public static JavaType getCollectionType(Class<?> collectionClass, Class<?>... elementClasses) {
        return objectMapper.getTypeFactory().constructParametricType(collectionClass, elementClasses);
    }

    /**
     * 将 Map 转换为 JavaBean
     *
     * @param map
     * @param clazz
     * @return
     */
    public static <T> T map2pojo(Map map, Class<T> clazz) {
        return objectMapper.convertValue(map, clazz);
    }

    /**
     * 将 Map 转换为 JSON
     *
     * @param map
     * @return
     */
    public static String mapToJson(Map map) {
        try {
            return objectMapper.writeValueAsString(map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 将 JSON 对象转换为 JavaBean
     *
     * @param obj
     * @param clazz
     * @return
     */
    public static <T> T obj2pojo(Object obj, Class<T> clazz) {
        return objectMapper.convertValue(obj, clazz);
    }

    /**
     * 将对象转换为字符串数组
     *
     * @param obj
     * @return
     */
    public static String[] obj2ArrayString(Object obj) {
        Object[] objs = objectMapper.convertValue(obj, Object[].class);
        String[] arr = new String[objs.length];
        for (int i = 0; i < objs.length; i++) {
            arr[i] = objs[i].toString();
        }
        return arr;
    }

    /**
     * 将对象转换为字符串数组
     *
     * @param obj
     * @return
     */
    public static int[] obj2ArrayInt(Object obj) {
        Object[] objs = objectMapper.convertValue(obj, Object[].class);
        int[] arr = new int[objs.length];
        for (int i = 0; i < objs.length; i++) {
            arr[i] = Integer.parseInt(objs[i].toString());
        }
        return arr;
    }
}
```