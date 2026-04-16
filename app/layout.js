import GoogleAnalytics from '../components/GoogleAnalytics'
import '../styles/globals.css'

export const metadata = {
    title: 'Next.js',
    icons: {
        icon: '/favicon.png',
    },
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <GoogleAnalytics />
            {children}
        </body>
    </html>
)

export default RootLayout
