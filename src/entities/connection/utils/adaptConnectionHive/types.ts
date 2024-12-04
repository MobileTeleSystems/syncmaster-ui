import { ConnectionHive } from '../../api';

export type AdaptConnectionHiveProps = ConnectionHive['auth_data'] & ConnectionHive['connection_data'];
