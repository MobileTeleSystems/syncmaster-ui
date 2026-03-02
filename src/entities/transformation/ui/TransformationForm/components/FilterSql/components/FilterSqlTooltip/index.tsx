import { Typography } from 'antd';
import { Trans } from 'react-i18next';

import { SPARK_SQL_API_DOCS_URL, SPARK_SQL_QUERY_SELECT_DOCS_URL } from './constants';
const { Link } = Typography;

export const FilterSqlTooltip = () => {
  return (
    <Trans
      ns="transformation"
      i18nKey="filterSqlTooltip"
      components={{
        SparkSqlQuerySelectDocs: <Link href={SPARK_SQL_QUERY_SELECT_DOCS_URL} target="_blank" rel="noreferrer" />,
        SparkSqlApiDocs: <Link href={SPARK_SQL_API_DOCS_URL} target="_blank" rel="noreferrer" />,
      }}
    />
  );
};
