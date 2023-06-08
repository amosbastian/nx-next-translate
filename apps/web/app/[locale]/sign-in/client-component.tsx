'use client';

import useTranslation from 'next-translate/useTranslation';

export function ClientComponent() {
  const { t } = useTranslation('sign-in');

  return <div>{t('example')}</div>;
}
