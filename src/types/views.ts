import type { ComparedRow } from "./comparison";
export interface PlannerBoardBucket { id: string; title: string; rows: ComparedRow[]; }
export interface CalendarEventInput { id: string; title: string; start: string; end?: string; extendedProps: { rowKey: string } }
