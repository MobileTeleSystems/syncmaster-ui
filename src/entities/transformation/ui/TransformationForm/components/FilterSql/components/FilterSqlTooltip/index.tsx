import { Typography } from 'antd';
import { Trans } from 'react-i18next';
const { Link } = Typography;

export const FilterSqlTooltip = () => {
  return (
    <Trans
      ns="transformation"
      i18nKey="filterSqlTooltip"
      components={{
        docs: (
          <Link
            href="https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select.html"
            target="_blank"
            rel="noreferrer"
          />
        ),
        api: <Link href="https://spark.apache.org/docs/latest/api/sql" target="_blank" rel="noreferrer" />,
      }}
    />
  );
};
