/*
 * © OOO "SI IKS LAB", 2022-2023
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Types of drilldowns in the application, specified by Cxbox API
 */
export enum DrillDownType {
    /**
     * Drilldown to inner entity of the application (screen, view), i.e. url will be places after route hash sy: `#/${inner}`
     */
    inner = 'inner',
    /**
     * Drilldown to an url relative to the current url: `/${relative}`
     */
    relative = 'relative',
    /**
     * Drilldown to an url relative to the current url: `/${relative}` that opens in a new browser tab
     */
    relativeNew = 'relativeNew',
    /**
     * An external redirect, i.e. `http://${external}`
     */
    external = 'external',
    /**
     * An external redirect, i.e. `http://${external}` that opens in a new browser tab
     */
    externalNew = 'externalNew'
}
