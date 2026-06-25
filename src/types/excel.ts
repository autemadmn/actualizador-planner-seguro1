export type ExcelCellValue = string | number | boolean | Date | null | undefined;
export interface ExcelCell { value: ExcelCellValue; rawText: string; canonicalDate?: string; }
export interface ExcelRow { rowIndex: number; cells: ExcelCell[]; }
export interface ExcelColumnDefinition { index: number; key: string; header: string; visible: boolean; }
export interface PlannerCell { header: string; address: string; rawValue: ExcelCellValue; displayValue: string; canonicalDates?: string[]; }
export interface PlannerTaskRow {
  rowIndex: number; outlineNumber: string | null; outlineLevel: number; taskNumber: number | null; name: string;
  startCanonical: string | null; endCanonical: string | null; durationText: string | null; percentComplete: number | null;
  assigneesRaw: string; assignees: string[]; isMilestone: boolean; dependsOn: string | null; notes: string | null; raw: ExcelRow;
  excelRowNumber: number; taskName: string; assignee: string; startDate: string | null; endDate: string | null; duration: string; observations: string; cells: PlannerCell[];
}
export interface ParsedPlannerSheet { sheetName: string; columns: ExcelColumnDefinition[]; visibleColumns: ExcelColumnDefinition[]; headerRowNumber: number; tasks: PlannerTaskRow[]; }
