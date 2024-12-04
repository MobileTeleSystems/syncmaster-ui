import { ConnectionOracle } from '../../api';

export type AdaptConnectionOracleProps = ConnectionOracle['auth_data'] & ConnectionOracle['connection_data'];
