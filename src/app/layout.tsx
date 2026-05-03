export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* This is where your signup and login pages will appear */}
        {children}
      </body>
    </html>
  )
}