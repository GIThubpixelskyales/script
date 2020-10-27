/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START apps_script_sheets_remove_duplicates]
/**
 * Removes duplicate rows from the current sheet.
 */
function removeDuplicates() {
  // [START apps_script_sheets_sheet]
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  // [END apps_script_sheets_sheet]
  // [START apps_script_sheets_new_data]
  var newData = [];
  // [END apps_script_sheets_new_data]
  for (i in data) {
    var row = data[i];
    var duplicate = false;
    for (j in newData) {
      if (row.join() == newData[j].join()) {
        duplicate = true;
      }
    }
    // [START apps_script_sheets_duplicate]
    if (!duplicate) {
      newData.push(row);
    }
    // [END apps_script_sheets_duplicate]
  }
  // [START apps_script_sheets_clear]
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  // [END apps_script_sheets_clear]
}
// [END apps_script_sheets_remove_duplicates]
