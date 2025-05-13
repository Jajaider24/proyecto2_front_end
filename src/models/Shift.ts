export interface Shift {
  id: number;
  start_time: string; // ISO string
  end_time: string;
  status: string;
  driver_id: number;
  motorcycle_id: number;
}
