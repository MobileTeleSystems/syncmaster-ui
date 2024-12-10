import { ConnectionClickhouse } from '../../api';

export type AdaptConnectionClickhouseProps = ConnectionClickhouse['auth_data'] &
  ConnectionClickhouse['connection_data'];
