export enum RunStatus {
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  FAILED = 'FAILED',
  SEND_STOP_SIGNAL = 'SEND_STOP_SIGNAL',
  STOPPED = 'STOPPED',
  FINISHED = 'FINISHED',
}

export const RUN_STATUS_DISPLAY = {
  [RunStatus.CREATED]: 'created',
  [RunStatus.STARTED]: 'started',
  [RunStatus.FAILED]: 'failed',
  [RunStatus.SEND_STOP_SIGNAL]: 'sendStopSignal',
  [RunStatus.STOPPED]: 'stopped',
  [RunStatus.FINISHED]: 'finished',
} as const;
