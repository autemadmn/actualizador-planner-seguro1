import ExcelJS from "exceljs";
export async function readWorkbookFromFile(file: File): Promise<ExcelJS.Workbook> { if(!file) throw new Error("No se ha proporcionado ningún archivo Excel."); const buffer=await file.arrayBuffer(); return readWorkbookFromArrayBuffer(buffer); }
export async function readWorkbookFromArrayBuffer(buffer: ArrayBuffer): Promise<ExcelJS.Workbook> { const wb=new ExcelJS.Workbook(); await wb.xlsx.load(buffer); return wb; }
export function pickFirstUsefulWorksheet(workbook: ExcelJS.Workbook): ExcelJS.Worksheet { const ws=workbook.worksheets.find(w=>w && w.rowCount>0); if(!ws) throw new Error("El archivo Excel no contiene hojas con datos."); return ws; }
