import { useMemo } from "react";
import type { ComparedRow } from "../types/comparison";
import type { PlanningFiltersState } from "../utils/planningFilters";
import { normalizeText } from "../utils/normalizeText";
import { assigneeTextMatches } from "../utils/assignees";
export function useFilteredRows(rows:ComparedRow[], filters:PlanningFiltersState):ComparedRow[]{ return useMemo(()=>rows.filter(row=>{ if(filters.change!=="all"&&row.status!==filters.change)return false; if(filters.project!=="all"&&!normalizeText(row.projectName??"").includes(normalizeText(filters.project)))return false; if(filters.assignee!=="all"&&!assigneeTextMatches(row.assignee??row.planner?.assignee??"",filters.assignee))return false; const q=normalizeText(filters.searchTerm); if(q){ const hay=normalizeText([row.taskName,row.assignee,row.projectName,row.planner?.taskName,row.planner?.observations,row.blockedReason,...row.diffs.flatMap(d=>[d.field,d.previous,d.current])].filter(Boolean).join(" ")); if(!hay.includes(q))return false;} return true;}),[rows,filters]); }
