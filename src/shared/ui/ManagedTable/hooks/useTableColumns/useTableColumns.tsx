import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useMemo, MouseEvent } from 'react';
import { ColumnType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

import { UseTableColumnsProps } from './types';

/** Hook for adding and handling edit and delete table row buttons */
export const useTableColumns = <T extends object>({
  isRenderUpdateRowAction = () => false,
  isRenderDeleteRowAction = () => false,
  onUpdateRowClick,
  onDeleteRowClick,
  columns: initialColumns = [],
  isHiddenRowActions = false,
}: UseTableColumnsProps<T>): ColumnType<T>[] => {
  const { t } = useTranslation('shared');
  const columns = useMemo(() => {
    const resultColumns = [...initialColumns];

    if (isHiddenRowActions) {
      return resultColumns;
    }

    const handleUpdateRow = (event: MouseEvent, record: T) => {
      event.stopPropagation();
      onUpdateRowClick?.(record);
    };

    const handleDeleteRow = (event: MouseEvent, record: T) => {
      event.stopPropagation();
      onDeleteRowClick?.(record);
    };

    resultColumns.push({
      title: t('actions'),
      width: 100,
      render: (_, record) => {
        return (
          <ButtonGroup style={{ gap: 16 }}>
            {isRenderUpdateRowAction(record) && (
              <Button
                type="link"
                size="small"
                icon={<EditOutlined />}
                onClick={(event) => handleUpdateRow(event, record)}
              >
                {t('update')}
              </Button>
            )}
            {isRenderDeleteRowAction(record) && (
              <Button
                type="link"
                size="small"
                danger
                icon={<DeleteOutlined />}
                onClick={(event) => handleDeleteRow(event, record)}
              >
                {t('delete')}
              </Button>
            )}
          </ButtonGroup>
        );
      },
    });
    return resultColumns;
  }, [
    initialColumns,
    isHiddenRowActions,
    isRenderUpdateRowAction,
    isRenderDeleteRowAction,
    onUpdateRowClick,
    onDeleteRowClick,
    t,
  ]);

  return columns;
};
