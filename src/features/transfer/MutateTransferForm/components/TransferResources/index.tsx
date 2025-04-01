import { Fieldset } from '@shared/ui';
import { Form, InputNumber } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { validateFormFieldByPattern } from '@shared/utils';
import { INTEGER_ERROR_DISPLAY, INTEGER_REGEXP } from '@shared/constants';

import {
  MAX_PARALLEL_TASKS,
  MAX_CPU_CORES_PER_TASKS,
  MIN_PARALLEL_TASKS,
  MIN_CPU_CORES_PER_TASKS,
  MIN_RAM_PER_TASK,
  MAX_RAM_PER_TASK,
} from './constants';
import { TooltipText } from './components';

export const TransferResources = () => {
  const { t } = useTranslation('error');

  return (
    <Fieldset title={t('resources', { ns: 'transfer' })}>
      <Form.Item
        label={t('maxParallelTasks', { ns: 'transfer' })}
        name={['resources', 'max_parallel_tasks']}
        rules={[
          {
            required: true,
            pattern: INTEGER_REGEXP,
            message: t(INTEGER_ERROR_DISPLAY),
            validator: (rule, value) => validateFormFieldByPattern(rule, value, t),
          },
        ]}
        tooltip={<TooltipText minValue={MIN_PARALLEL_TASKS} maxValue={MAX_PARALLEL_TASKS} />}
      >
        <InputNumber size="large" min={MIN_PARALLEL_TASKS} max={MAX_PARALLEL_TASKS} />
      </Form.Item>
      <Form.Item
        label={t('cpuCoresPerTask', { ns: 'transfer' })}
        name={['resources', 'cpu_cores_per_task']}
        rules={[
          {
            required: true,
            pattern: INTEGER_REGEXP,
            message: t(INTEGER_ERROR_DISPLAY),
            validator: (rule, value) => validateFormFieldByPattern(rule, value, t),
          },
        ]}
        tooltip={<TooltipText minValue={MIN_CPU_CORES_PER_TASKS} maxValue={MAX_CPU_CORES_PER_TASKS} />}
      >
        <InputNumber size="large" min={MIN_CPU_CORES_PER_TASKS} max={MAX_CPU_CORES_PER_TASKS} />
      </Form.Item>
      <Form.Item
        label={t('ramPerTask', { ns: 'transfer' })}
        name={['resources', 'ram_bytes_per_task']}
        rules={[{ required: true }]}
        tooltip={
          <TooltipText
            minValue={`${MIN_RAM_PER_TASK} ${t('gib', { ns: 'file' })}`}
            maxValue={`${MAX_RAM_PER_TASK} ${t('gib', { ns: 'file' })}`}
          />
        }
      >
        <InputNumber size="large" min={MIN_RAM_PER_TASK} max={MAX_RAM_PER_TASK} />
      </Form.Item>
    </Fieldset>
  );
};
