/*
 * CXBOX-UI
 * Copyright (C) 2018-2021 Cxbox Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Description of groups in the navigation menu.
 *
 * Used to create nesting levels of menu items.
 *
 * @param title Title of group. Navigation element shows it to user.
 * @param child Array of navigation elements specified below group(View or inner Group)
 */
export interface ViewNavigationGroup {
    /** TODO identifier will be nullable and string-only in 2.0.0 */
    id?: string | number
    /**
     * Displayed name for the grouup
     */
    title: string
    /**
     * Nested items for the group
     */
    child: Array<ViewNavigationGroup | ViewNavigationItem>
    /**
     * If true, the group will not be visible in navigation (but still accessible by direct link or drilldown)
     */
    hidden?: boolean
    /**
     * If specified this view will be default view for the group; if not, the first available view will be default view
     */
    defaultView?: string
}

/**
 * The type of object to describe the menu items in the navigation.
 */
export type MenuItem = ViewNavigationGroup | ViewNavigationCategory | ViewNavigationItem

/**
 * Description of the category in the navigation menu.
 * Used to create nesting levels of menu items.
 *
 * @param categoryName The name of the category.
 * @param child list of categories or menu items included in a category.
 * @deprecated ViewNavigationCategory will be deleted in 2.0.0
 * @category Type Guards
 */
export interface ViewNavigationCategory {
    categoryName: string
    child: Array<ViewNavigationCategory | ViewNavigationItem>
}

/**
 * Description of the destination in the navigation menu.
 *
 * @param viewName Identifier of view.
 */
export interface ViewNavigationItem {
    // TODO: Should not be optional in 2.0.0
    viewName?: string
    hidden?: boolean
    /** TODO: remove in 2.0.0 */
    id?: string
}
