import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default async function Index() {
  const { t, lang } = useTranslation('common');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div>{lang}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        <Link href="/nl">NL</Link>
        <Link href="/en">EN</Link>
      </div>
    </div>
  );
}
