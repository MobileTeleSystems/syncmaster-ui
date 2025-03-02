import React from 'react';
import { Fieldset } from '@shared/ui';
import { Form } from 'antd';
import { TransferStrategyParams } from '@entities/transfer';
import { ConnectionType } from '@shared/types';

import { IncrementByForm, StrategyTypeForm } from './components';

export const StrategyParams = () => {
  const formInstance = Form.useFormInstance();

  /* useWatch takes a value from Form.Item, but useFormInstance takes one from general form state
   * useWatch returns undefined when Form.Item has not rendered yet
   * https://github.com/ant-design/ant-design/issues/49010
   */
  Form.useWatch(['source_params', 'type']);
  Form.useWatch(['strategy_params', 'type']);

  const sourceConnectionType = formInstance.getFieldValue(['source_params', 'type']) as ConnectionType;
  const strategyParamsType = formInstance.getFieldValue(['strategy_params', 'type']) as TransferStrategyParams['type'];

  return (
    <Fieldset title="Strategy params">
      <StrategyTypeForm sourceConnectionType={sourceConnectionType} />
      {strategyParamsType === 'incremental' && <IncrementByForm sourceConnectionType={sourceConnectionType} />}
    </Fieldset>
  );
};
