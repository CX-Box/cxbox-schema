

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

import type { WidgetTypes, WidgetOptions, WidgetShowCondition, WidgetListField, WidgetFormField } from '../interfaces/widget'

/**
 * *.widget.json file format
 *
 * Describes a widget
 */
export interface WidgetMetaJsonBase {
    /**
     * Displayed name
     */
    title: string
    /**
     * Widget type
     */
    type: WidgetTypes
    /**
     * Business component name
     */
    bc: string
    /**
     * For list-like widget this option will limit the number of displayed records
     */
    limit?: number
    /**
     * Options specific for differet widget types and also a space to customize your own widget
     */
    options?: WidgetOptions
    /**
     * When specified widget will not be displayed until specific conditions are met
     */
    showCondition?: WidgetShowCondition
    /**
     * Fields that will be displayed on widget
     */
    fields: Array<WidgetListField | WidgetFormField>
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Cxbox 2.0.0
 */
export interface WidgetMetaJsonNumber extends WidgetMetaJsonBase {
    /**
     * Unique identifier for the widget
     *
     * @deprecated Support will be removed in Cxbox UI 2.0.0
     */
    id: number
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Cxbox 2.0.0
 */
export interface WidgetMetaJsonString extends WidgetMetaJsonBase {
    /**
     * Unique identifier for the widget
     */
    name: string
}

export type WidgetMetaJson = WidgetMetaJsonNumber | WidgetMetaJsonString
