/*
 * © OOO "SI IKS LAB", 2022-2024
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
import { join } from 'path'
import { existsSync, mkdirSync, writeFile } from 'fs'
import * as stringify from 'json-stable-stringify'
import * as TJS from 'typescript-json-schema'

export function run() {
    const settings: TJS.PartialArgs = {
        required: true
    }

    const compilerOptions: TJS.CompilerOptions = {
        strictNullChecks: true
    }

    const schemas = ['ScreenMeta', 'ViewMeta', 'WidgetMeta', 'SqlBc']

    if (!existsSync('schemas')) {
        mkdirSync('schemas')
    }
    const program = TJS.getProgramFromFiles(
        schemas.map(item => join(__dirname, '../', `src/files/${item}.ts`)),
        compilerOptions
    )
    const generator = TJS.buildGenerator(program, settings)

    write(schemas)

    function write(src: string[]) {
        src.forEach(item => {
            const definition = generator.getSchemaForSymbol(`${item}Json`)
            writeFile(`schemas/${item}.json`, stringifyJson(definition), function (err: Error) {
                if (err) {
                    throw new Error('Unable to write output file: ' + err.message)
                }
            })
        })
    }
}

function stringifyJson(src: TJS.Definition) {
    return stringify(src, { space: 4 }) + '\n\n'
}

if (typeof window === 'undefined') {
    run()
}
