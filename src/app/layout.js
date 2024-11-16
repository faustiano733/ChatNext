
import './background.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='app'>
        {children}
        </div>
      </body>
    </html>
  );
}
