import Link from 'next/link';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang={params.locale}>
      <body>
        <header style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <Link href="/">/</Link>
          <Link href="/sign-in">/sign-in</Link>
        </header>
        {children}
        {params.locale}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {params.locale === 'nl' ? (
            <Link href="/en">EN</Link>
          ) : (
            <Link href="/nl">NL</Link>
          )}
        </div>
      </body>
    </html>
  );
}
