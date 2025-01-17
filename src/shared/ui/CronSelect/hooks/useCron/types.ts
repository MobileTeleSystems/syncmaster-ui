/** Interface as Props for hook "useCron" */
export interface UseCronProps {
  /** Value of cron expression like "* * * * *" */
  value?: string;
  /** Callback for changing value of cron expression */
  onChange?: (value: string) => void;
}
