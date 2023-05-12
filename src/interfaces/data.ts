

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

import { DrillDownType } from './router'

/**
 * Possible types of fields values
 */
export type DataValue = string | number | boolean | null | MultivalueSingleValue[] | undefined | DataItem[]

/**
 * Instance of `Business component` data
 * Has unlimited number of fields, which available to widget
 */
export interface DataItem {
    /**
     * Record's identificator
     */
    id: string
    /**
     * Version of last record's edit
     */
    vstamp: number
    /**
     * User fields
     */
    [fieldName: string]: DataValue
}

/**
 * Structure which contain `Multivalue` field's values
 */
export interface MultivalueSingleValue {
    /**
     * Record's identificator
     */
    id: string
    /**
     * Showed value
     */
    value: string
    options?: MultivalueSingleValueOptions
}

/**
 * `Multivalue` field's options
 */
export interface MultivalueSingleValueOptions {
    /**
     * Hint for value
     */
    hint?: string
    /**
     * Type of Icon
     */
    icon?: string
    drillDown?: string
    drillDownType?: DrillDownType
    snapshotState?: RecordSnapshotState
}

export enum RecordSnapshotState {
    noChange = 'noChange',
    new = 'new',
    deleted = 'deleted'
}
