import useTranslation from 'next-translate/useTranslation';
import { ClientComponent } from './client-component';

export default async function Index() {
  const { t } = useTranslation('sign-in');

  return (
    <div>
      <h1>{t('sign-in')}</h1>
      <ClientComponent />
    </div>
  );
}
