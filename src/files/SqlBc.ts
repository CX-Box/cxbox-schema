

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
 * *.sqlbc.json file format
 *
 * Describes SQL-based business components
 */
export interface SqlBcJson {
    /**
     * Name for the business component
     */
    name: string
    /**
     * Path to sql file that describes business component
     *
     * @example db/migration/liquibase/data/latest/sqlbc/example.sqlbc.sql
     *
     */
    queryFile: string
    /**
     * Number of records to fetch for this business component
     */
    pageLimit: number
    /**
     * Not supported
     */
    editable: 0
    /**
     * Configuration for bind variables passed to sql request from API query
     */
    binds: unknown[]
}
