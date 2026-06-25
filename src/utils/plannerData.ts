import type { ParsedPlannerSheet, PlannerTaskRow } from "../types/excel";
export type ParsePlannerWorkbookFn = (buffer: ArrayBuffer) => Promise<ParsedPlannerSheet>;
export function getUniqueProjectsFromPlanner(sheet: ParsedPlannerSheet | null): string[] { if(!sheet) return []; const set=new Set<string>(); for(const t of sheet.tasks){ const p=t.cells.find(c=>c.header.toLowerCase().includes("proyecto")||c.header.toLowerCase().includes("plan"))?.displayValue; if(p) set.add(p.trim()); } return [...set].sort((a,b)=>a.localeCompare(b,"es")); }
export function getUniqueAssigneesFromPlanner(sheet: ParsedPlannerSheet | null): string[] { if(!sheet) return []; return [...new Set(sheet.tasks.flatMap(t=>t.assignees?.length?t.assignees:[t.assignee]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es")); }
export function findTaskByOutline(sheet: ParsedPlannerSheet | null, outlineNumber: string): PlannerTaskRow | null { return sheet?.tasks.find(t=>t.outlineNumber===outlineNumber) ?? null; }
