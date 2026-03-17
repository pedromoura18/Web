import { Provider } from "@/components/ui/provider";

import "../styles/globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}