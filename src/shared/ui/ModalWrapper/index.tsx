import React, { memo, PropsWithChildren } from 'react';
import { Modal } from 'antd';

import { ModalWrapperProps } from './types';

export const ModalWrapper = memo(({ children, ...props }: PropsWithChildren<ModalWrapperProps>) => {
  return (
    <Modal centered footer={false} destroyOnClose {...props}>
      {children}
    </Modal>
  );
});
