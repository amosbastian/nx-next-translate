import useTranslation from 'next-translate/useTranslation';

export default async function Index() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
