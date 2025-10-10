import React from 'react';
import { KeycloakCallback } from '@features/auth';
import { useSearchParams } from 'react-router-dom';
import { Suspense } from '@shared/ui';

export const KeycloakCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code')!;

  return (
    <Suspense>
      <KeycloakCallback code={code} />
    </Suspense>
  );
};
