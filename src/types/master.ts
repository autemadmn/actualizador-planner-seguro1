import type { ExcelRow, ExcelColumnDefinition } from "./excel";
export type MasterEntryType = "I" | "M" | "M-T" | "O" | string;
export type MasterEntryStatus = "NO INICIADO" | "EN CURSO" | "RECIBIDO" | "ENTREGADO" | "PUBLICADO" | string;
export interface MasterRow { rowIndex: number; division: string | null; product: string | null; hwVersion: string | null; responsible: string | null; manualUser: string | null; documentDetail: string | null; type: MasterEntryType | null; plannedPublishCanonical: string | null; plannedWeek: number | null; realPublishCanonical: string | null; realReceptionCanonical: string | null; realWeek: number | null; status: MasterEntryStatus | null; areaPerson: string | null; estimatedTime: number | null; dedicatedTime: number | null; comments: string | null; raw: ExcelRow; }
export interface ParsedMasterWorkbook { sheetName: string; columns: ExcelColumnDefinition[]; rows: MasterRow[]; }
export type MasterChangeStatus = "ready" | "no_change" | "ambiguous" | "not_found" | "blocked" | "project_blocked" | "matched" | "unmatched" | "unchanged";
export type MasterEditableField = "startDate" | "endDate";
export interface MasterFieldChange { field: MasterEditableField; previous: string | null; current: string | null; }
export interface MasterChangeCandidate { id: string; status: MasterChangeStatus; reason?: string; plannerRowIndex: number | null; plannerTaskName: string; plannerAssignee: string; plannerProjectName: string | null; internalSheetName: string | null; internalRowNumber: number | null; internalTaskName: string | null; internalAssignee: string | null; internalProject: string | null; changes: MasterFieldChange[]; }
export interface MasterInternalRowRef { rowNumber: number; taskName: string; assignee: string; project: string | null; startCanonical: string | null; endCanonical: string | null; startColumn: number | null; endColumn: number | null; }
export interface MasterComparisonRowRef { rowNumber: number; taskName: string; assignee: string; project: string | null; startCanonical: string | null; endCanonical: string | null; }
export interface LoadedMasterWorkbook { comparisonSheetName: string; internalSheetName: string; comparisonRows: MasterComparisonRowRef[]; internalRows: MasterInternalRowRef[]; _workbook: unknown; }
