import { pad2 } from "./dateUtils";
export function getISOWeekNumber(date: Date = new Date()): number { const tmp=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())); const day=tmp.getUTCDay()||7; tmp.setUTCDate(tmp.getUTCDate()+4-day); const start=new Date(Date.UTC(tmp.getUTCFullYear(),0,1)); return Math.ceil(((tmp.getTime()-start.getTime())/86400000+1)/7); }
export function getGeneratedExcelFileName(date: Date = new Date()): string { return `Seguimiento Proyectos OffMan W${pad2(getISOWeekNumber(date))}.xlsx`; }
