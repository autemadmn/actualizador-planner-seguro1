import { normalizeText } from "./normalizeText";
export function splitAssignees(text: unknown): string[] { if(text===null||text===undefined) return []; return String(text).split(/[,;
]+/g).map(s=>s.trim()).filter(Boolean); }
export function assigneeTextMatches(cellText: unknown, query: string): boolean { const q=normalizeText(query); if(!q || q==="all") return true; const parts=splitAssignees(cellText).map(normalizeText); return parts.some(p=>p.includes(q)||q.includes(p)); }
export function collectUniqueAssignees(cellTexts: unknown[]): string[] { const m=new Map<string,string>(); for(const c of cellTexts) for(const n of splitAssignees(c)){const k=normalizeText(n); if(k&&!m.has(k)) m.set(k,n);} return [...m.values()].sort((a,b)=>a.localeCompare(b,"es")); }
