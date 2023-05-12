

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

import { DataValue } from './data'
import { OperationType, OperationInclusionDescriptor } from './operations'

export enum WidgetTypes {
    Info = 'Info',
    Form = 'Form',
    List = 'List',
    DataGrid = 'DataGrid',
    AssocListPopup = 'AssocListPopup',
    PickListPopup = 'PickListPopup',
    HeaderWidget = 'HeaderWidget',
    SecondLevelMenu = 'SecondLevelMenu',
    ThirdLevelMenu = 'ThirdLevelMenu',
    FourthLevelMenu = 'FourthLevelMenu',
    WidgetCreator = 'WidgetCreator',
    Pivot = 'Pivot',
    DimFilter = 'DimFilter',
    Text = 'Text',
    FlatTree = 'FlatTree',
    FlatTreePopup = 'FlatTreePopup',
    /**
     * Navigation tabs widget to be excluded from the widget stream
     */
    ViewNavigation = 'ViewNavigation',
    /**
     * Navigation tabs widget to be displayed in the widget stream
     */
    NavigationTabs = 'NavigationTabs'
}

/**
 * @param readOnly All widget fields are not editable
 * @param tableOperations Options for allowed on table widget actions
 */
export interface WidgetOptions {
    layout?: {
        header?: string[]
        aside?: string[]
        rows: LayoutRow[]
    }
    /**
     * Options for allowed on table widget actions
     */
    tableOperations?: TableOperations
    /**
     * TODO: Move all hierarchy-specific properties to a single property
     */
    hierarchy?: WidgetTableHierarchy[]
    hierarchySameBc?: boolean
    hierarchyFull?: boolean
    hierarchyParentKey?: string
    hierarchyGroupSelection?: boolean
    hierarchyGroupDeselection?: boolean
    hierarchyTraverse?: boolean
    hierarchyRadio?: boolean
    hierarchyRadioAll?: boolean
    hierarchyDisableRoot?: boolean
    /**
     * Disable searched item descendants in fullHierarchy search
     */
    hierarchyDisableDescendants?: boolean
    hierarchyDisableParent?: boolean
    actionGroups?: WidgetOperations | Record<string, WidgetOperations>
    /**
     * All widget fields are not editable
     */
    readOnly?: boolean
    /**
     * @deprecated TODO: Remove in 2.0.0 in favor of actionGroups
     */
    hideActionGroups?: string[]
    /**
     * Record field which value will be used as a title for the whole record
     * for this particular widget
     */
    displayedValueKey?: string
    /**
     * Disable tooltip with error text
     */
    disableHoverError?: boolean
    /**
     * Disable notification after failed operation
     */
    disableNotification?: boolean
    /**
     * Allow selecting multiple items for FlatListPopup
     *
     * TODO: Move to separate interface
     */
    multiple?: boolean
    /**
     * Enables filtering dates by range
     * TODO: It's a temporal option. Remove for 2.x of cxbox-ui/core
     */
    filterDateByRange?: boolean
}

/**
 * Description of the interface for LayoutRow
 */
export interface LayoutRow {
    cols: LayoutCol[]
}

/**
 * Description of the interface for WidgetOptions's layout.rows
 */
export interface LayoutCol {
    fieldKey: string
    span?: number
}

/**
 * Operations description in `options` of widget meta, which allows its availability.
 */
export interface WidgetOperations {
    /**
     * List of included operations or groups of operations
     */
    include?: OperationInclusionDescriptor[]
    /**
     * List of excluded operations or groups of operations
     */
    exclude?: OperationType[]
    /**
     * default no crud save action
     */
    defaultSave?: string
}

/**
 * Description of options of allowed on table widget actions
 */
export interface TableOperations {
    /**
     * Describes position of tableOperations relatively of table
     */
    position?: PositionTypes
}

/**
 * Description of possible positioning options
 */
export enum PositionTypes {
    Top = 'Top',
    Bottom = 'Bottom',
    TopAndBottom = 'TopAndBottom'
}

/**
 * Configuration descriptor for hierarchy subset of table widgets.
 *
 * Each descriptor describes a specific level of hierarchy
 */
export interface WidgetTableHierarchy {
    /**
     * Which business component is displayed on this level
     */
    bcName: string
    /**
     * What record field to use as displayed value of that record
     */
    assocValueKey?: string
    /**
     * If true only one item can be selected
     */
    radio?: boolean
    /**
     * Fields that will be displayed on this hierarchy level
     */
    fields: WidgetListField[]
}

export interface WidgetFieldBase {
    type: FieldType
    key: string
    drillDown?: boolean
    bgColor?: string
    bgColorKey?: string
    label?: string
    snapshotKey?: string
    /**
     * Maximum number of characters
     */
    maxInput?: number
    /**
     * Whether the field is hidden
     */
    hidden?: boolean
    /**
     * Shift value of different hierarchy level
     *
     * TODO: Project-specific, has no support in Cxbox backend
     */
    hierarchyShift?: boolean
    drillDownKey?: string
    /**
     * When assigned with another field key, this another will be used for filtration purposes
     */
    filterBy?: string
}

export interface WidgetListFieldBase extends WidgetFieldBase {
    title: string
    width?: number
}

export interface WidgetFormFieldBase extends WidgetFieldBase {
    label: string
}

export type AllWidgetTypeFieldBase = WidgetFormFieldBase | WidgetListFieldBase

export type NumberFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.number | FieldType.money | FieldType.percent
    digits?: number
    nullable?: boolean
}

export type DateFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.date
}

export type CheckboxFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.checkbox
}

export type DateTimeFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.dateTime
}

export type DateTimeWithSecondsFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.dateTimeWithSeconds
}

export type DictionaryFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.dictionary
    multiple?: boolean
    dictionaryName?: string
}

export type TextFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.text
    popover?: boolean
}

export type InputFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.input | FieldType.hint
}

export type MultiFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.multifield
    fields: WidgetField[]
    style: 'inline' | 'list'
}

export type MultivalueFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.multivalue | FieldType.multivalueHover
    popupBcName?: string
    assocValueKey?: string
    associateFieldKey?: string
    displayedKey?: string
}

export type PickListFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.pickList
    popupBcName: string
    pickMap: PickMap
}

export type InlinePickListFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.inlinePickList
    searchSpec: string
    popupBcName: string
    pickMap: PickMap
}

export type FileUploadFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.fileUpload
    fileIdKey: string
    fileSource: string
    snapshotFileIdKey?: string
}

/**
 * @deprecated TODO: Remove in 2.0.0 in favor of `hidden` flag of widget meta field description
 */
export type HiddenFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.hidden
}

export type RadioButtonFieldMeta = AllWidgetTypeFieldBase & {
    type: FieldType.radio
}

/**
 * Field descriptor in widget configuration
 */
export type WidgetField =
    | NumberFieldMeta
    | DateFieldMeta
    | DateTimeFieldMeta
    | DateTimeWithSecondsFieldMeta
    | DictionaryFieldMeta
    | TextFieldMeta
    | MultiFieldMeta
    | InputFieldMeta
    | MultivalueFieldMeta
    | PickListFieldMeta
    | InlinePickListFieldMeta
    | FileUploadFieldMeta
    | CheckboxFieldMeta
    | HiddenFieldMeta
    | RadioButtonFieldMeta

export type WidgetFormField = Extract<WidgetField, WidgetFormFieldBase>

export type WidgetListField = Extract<WidgetField, WidgetListFieldBase>

/**
 *
 */
export type WidgetInfoField = WidgetFormField & {
    drillDownTitle?: string
    drillDownTitleKey?: string
    hintKey?: string
}

export enum FieldType {
    number = 'number',
    input = 'input',
    monthYear = 'monthYear',
    date = 'date',
    dateTime = 'dateTime',
    dateTimeWithSeconds = 'dateTimeWithSeconds',
    checkbox = 'checkbox',
    /**
     * @deprecated TODO: project-specific, remove in 2.0.0
     */
    checkboxSql = 'checkboxSql',
    /**
     * @deprecated TODO: project-specific, remove in 2.0.0
     */
    DMN = 'DMN',
    pickList = 'pickList',
    inlinePickList = 'inline-pickList',
    dictionary = 'dictionary',
    hidden = 'hidden', // @deprecated TODO: Remove in 2.0.0 in favor of `hidden` flag of widget meta field description
    text = 'text',
    percent = 'percent',
    fileUpload = 'fileUpload',
    money = 'money',
    /**
     * @deprecated TODO: project-specific, remove in 2.0.0
     */
    comboCondition = 'combo-condition',
    richText = 'richText',
    printForm = 'printForm',
    multifield = 'multifield',
    multivalue = 'multivalue',
    multivalueHover = 'multivalueHover',
    hint = 'hint',
    radio = 'radio'
}

/**
 * `x` is name of field, for which the value will be set up.
 * A value of `x` is name of field, from which the value will be gotten.
 */
export type PickMap = Record<string, string>

/**
 * Show widget only if certain condition is met
 *
 * Supported conditions:
 * - Active record for specified business component {bcName} should contain field {fieldKey}
 * with value {fieldValue}
 *
 * @param bcName Business component where field condition is checked
 * @param fieldCondition Field key and value expected from this field
 */
export interface WidgetShowCondition {
    bcName: string
    isDefault: boolean
    params: {
        fieldKey: string
        value: DataValue
    }
}
