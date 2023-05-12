

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
 * *.view.json file format
 *
 * Describes a view
 */
export interface ViewMetaJson {
    /**
     * Unique identifier for the view
     */
    name: string
    /**
     * Displayed name
     */
    title: string
    /**
     * Url for the view (usually in form of `${screen.name}/${view.name}`)
     */
    url: string
    /**
     * Widgets present on the view
     */
    widgets: ViewMetaWidget
}

type ViewMetaWidget = ViewMetaWidgetLegacy | ViewMetaWidgetNew

interface ViewMetaWidgetBase {
    /**
     * Number used to order widget on the view; widgets with lesser `position` will be shown first
     */
    position: number
    /**
     * Currently unused
     */
    gridWidth?: number
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Cxbox 2.0.0
 */
interface ViewMetaWidgetLegacy extends ViewMetaWidgetBase {
    /**
     * Reference to `id` property from *.widget.json file
     *
     * @deprecated TODO: Will be removed in Cxbox 2.0.0
     */
    widgetId: number
}

/**
 * Widget can be uniquely identified by string id
 */
interface ViewMetaWidgetNew extends ViewMetaWidgetBase {
    /**
     * Reference to `name` property from *.widget.json file
     */
    widgetName: string
}
