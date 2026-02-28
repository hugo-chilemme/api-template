export const metadata = {
  title: 'Next.js API Template',
  description: 'API template with middleware, route layout wrapper, and versioned routes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f8fa' }}>
        {children}
      </body>
    </html>
  );
}
