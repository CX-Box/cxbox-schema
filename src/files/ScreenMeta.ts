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

import type { ViewNavigationGroup, ViewNavigationItem } from '../interfaces/navigation'

/**
 * *.screen.json file format
 *
 * Describes a screen
 */
export interface ScreenMetaJson {
    /**
     * Unique identifier for the screen
     */
    name: string
    /**
     * Displayed name
     *
     * Required, but not used at the moment; `text` field from `responsibilities` table will be shown instead
     */
    title: string
    /**
     * Default view for the screen; will be opened if no view name is specified when navigating to a screen
     */
    primaryViewName: string
    /**
     * Not used
     */
    primaryViews: string[]
    /**
     *
     */
    navigation: {
        menu: Array<ViewNavigationGroupNew | ViewNavigationItemNew>
    }
}

/**
 * Omit deprecated fields
 */
type ViewNavigationGroupNew = Omit<ViewNavigationGroup, 'id'>

/**
 * Omit deprecated fields and include mandatory fields from 2.0.0
 */
type ViewNavigationItemNew = Omit<ViewNavigationItem, 'id'> & { viewName: string }
