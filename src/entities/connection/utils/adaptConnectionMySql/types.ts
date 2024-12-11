import { ConnectionMySql } from '../../api';

export type AdaptConnectionMySqlProps = ConnectionMySql['auth_data'] & ConnectionMySql['connection_data'];
