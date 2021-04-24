/*
 * Copyright (c) 2019-2021 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-integration
 * File Name: IntegrationConstants.java
 * Author: gengwei.zheng
 * Date: 2021/4/10 下午6:31
 * LastModified: 2021/4/10 下午6:31
 */

package cn.herodotus.eurynome.integration.definition;

/**
 * <p>File: IntegrationConstants </p>
 *
 * <p>Description: Integration 包常量 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/4/10 18:31
 */
public class IntegrationConstants {

    public static final String REDIS_AREA_PREFIX = "integration:";

    public static final String REDIS_INTEGRATION_TOKEN_PREFIX = REDIS_AREA_PREFIX + "token:";

    public static final String EASEMOB_TOKEN = IntegrationConstants.REDIS_INTEGRATION_TOKEN_PREFIX + "easemob";
}
