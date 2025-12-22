import { Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileFormatExcelProps } from './types';

export const FileFormatExcel = ({ name }: FileFormatExcelProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item name={[...name, 'include_header']}>
        <Checkbox>{t('includeHeader')}</Checkbox>
      </Form.Item>

      <Form.Item label={t('startCell')} name={[...name, 'start_cell']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
    </>
  );
};
