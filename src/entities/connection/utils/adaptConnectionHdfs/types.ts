import { ConnectionHdfs } from '../../api';

export type AdaptConnectionHdfsProps = ConnectionHdfs['auth_data'] & ConnectionHdfs['connection_data'];
