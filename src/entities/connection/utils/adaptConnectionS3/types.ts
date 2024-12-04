import { ConnectionS3 } from '../../api';

export type AdaptConnectionS3Props = ConnectionS3['auth_data'] & ConnectionS3['connection_data'];
