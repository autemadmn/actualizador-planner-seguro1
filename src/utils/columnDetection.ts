import { normalizeText } from "./normalizeText";
import type { ExcelColumnDefinition } from "../types/excel";
export function findColumnIndexByHeaders(headers: string[], aliases: string[]): number { const a=aliases.map(normalizeText); return headers.findIndex(h=>a.some(x=>normalizeText(h)===x||normalizeText(h).includes(x))); }
export function buildColumnDefinitions(headers: string[]): ExcelColumnDefinition[] { return headers.map((header,index)=>({index,key:normalizeText(header)||`col_${index}`,header:header??"",visible:true})); }
export const COLUMN_ALIASES = { name:["nombre","tarea","task"], assignees:["asignado","responsable","owner"], start:["inicio","start"], end:["fin","due","vencimiento"], observations:["observaciones","notas","comentarios"] } as const;
