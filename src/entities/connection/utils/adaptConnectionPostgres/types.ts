import { ConnectionPostgres } from '../../api';

export type AdaptConnectionPostgresProps = ConnectionPostgres['auth_data'] & ConnectionPostgres['connection_data'];
