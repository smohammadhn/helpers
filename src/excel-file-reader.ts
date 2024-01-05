import * as XLSX from "xlsx";
import * as fs from "fs";

const excelFilePath = process.cwd() + "/files/cities.xlsx";

// Check if the file exists
if (fs.existsSync(excelFilePath)) {
  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath);

  const sheetName = workbook.SheetNames[1];
  const sheet = workbook.Sheets[sheetName];

  let jsonData = XLSX.utils.sheet_to_json(sheet);
  jsonData = jsonData.map((e, i) => ({
    id: i + 1,
    municipality: e.NOM_COMMUNE_ADMINISTRATIVE,
    name: e.NOM_OFFICIEL_LOCALITE,
  }));

  const citiesOutput = process.cwd() + "/files/citiesOutput.json";
  const jsonString = JSON.stringify(jsonData, null, 2);

  fs.writeFileSync(citiesOutput, jsonString);
} else {
  console.error(`File not found: ${excelFilePath}`);
}
