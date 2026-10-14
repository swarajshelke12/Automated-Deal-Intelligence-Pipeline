export type PipelineCadence = '1_hour' | '2_hours' | 'on_demand';

export interface AutomationCadenceStatus {
  isActive: boolean;
  cadenceDescription: string;
  lastCheckedTime?: string;
  nextScheduledTime?: string;
}
