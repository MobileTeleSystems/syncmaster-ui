import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useMemo, MouseEvent } from 'react';

import { UseTableColumnsProps } from './types';

/** Hook for adding and handling edit and delete table row buttons */
export const useTableColumns = <T extends object>({
  onEditRowClick,
  onDeleteRowClick,
  columns: initialColumns = [],
  isHiddenActions = false,
}: UseTableColumnsProps<T>) => {
  const columns = useMemo(() => {
    const resultColumns = [...initialColumns];

    if (isHiddenActions) {
      return resultColumns;
    }

    const handleEditRow = (event: MouseEvent, record: T) => {
      event.stopPropagation();
      onEditRowClick?.(record);
    };

    const handleDeleteRow = (event: MouseEvent, record: T) => {
      event.stopPropagation();
      onDeleteRowClick?.(record);
    };

    if (onEditRowClick || onDeleteRowClick) {
      resultColumns.push({
        title: 'Actions',
        width: 100,
        render: (_, record) => {
          return (
            <ButtonGroup style={{ gap: 16 }}>
              {onEditRowClick && (
                <Button
                  type="link"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={(event) => handleEditRow(event, record)}
                >
                  Edit
                </Button>
              )}
              {onDeleteRowClick && (
                <Button
                  type="link"
                  size="small"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={(event) => handleDeleteRow(event, record)}
                >
                  Delete
                </Button>
              )}
            </ButtonGroup>
          );
        },
      });
    }
    return resultColumns;
  }, [initialColumns, isHiddenActions, onEditRowClick, onDeleteRowClick]);

  return { columns };
};
