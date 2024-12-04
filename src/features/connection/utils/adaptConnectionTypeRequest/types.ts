import { ConnectionData } from '@entities/connection';

export type AdaptConnectionTypeRequestProps = ConnectionData['auth_data'] & ConnectionData['connection_data'];
