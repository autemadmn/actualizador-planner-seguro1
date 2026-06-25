import type { PlannerTaskRow } from "./excel";
import type { MasterRow } from "./master";
export type ComparedRowStatus = "changed" | "unchanged" | "unmatched" | "blocked" | "ambiguous";
export interface ComparedFieldDiff { field: string; previous: string | null; current: string | null; }
export interface ComparedRow { key: string; status: ComparedRowStatus; planner: PlannerTaskRow | null; master: MasterRow | null; diffs: ComparedFieldDiff[]; blockedReason?: string; taskName?: string; assignee?: string; projectName?: string | null; internalRowNumber?: number | null; }
