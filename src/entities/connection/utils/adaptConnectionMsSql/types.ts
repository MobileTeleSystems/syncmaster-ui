import { ConnectionMsSql } from '../../api';

export type AdaptConnectionMsSqlProps = ConnectionMsSql['auth_data'] & ConnectionMsSql['connection_data'];
