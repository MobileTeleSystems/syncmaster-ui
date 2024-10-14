import { TableProps } from 'antd';

/**
 * Interface as Props for custom hook "useTableColumnsProps"
 *
 * @template T - Data object type for table row.
 */
export interface UseTableColumnsProps<T> extends Pick<TableProps<T>, 'columns'> {
  /** Callback for permission to render update row button */
  isRenderUpdateRowAction?: (record: T) => boolean;
  /** Callback for permission to render delete row button */
  isRenderDeleteRowAction?: (record: T) => boolean;
  /** Callback on click edit row button */
  onUpdateRowClick?: (record: T) => void;
  /** Callback on click delete row button */
  onDeleteRowClick?: (record: T) => void;
  /** Flag prohibiting rendering of edit and delete row buttons */
  isHiddenRowActions?: boolean;
}
