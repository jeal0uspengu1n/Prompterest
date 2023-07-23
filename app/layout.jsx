import Head from 'next/head';
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompterest",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <Head>
      <link rel="icon" href="/public/assests/favicon.ico" />
    </Head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
    <footer>
      <p className='font-normal text-center p-9'>Made with ❤️ by <a className='text-orange-400 hover:text-orange-700' href='https://www.linkedin.com/in/kusum-priya/'>Kusum</a>, <a className='text-orange-400 hover:text-orange-700' href='https://www.linkedin.com/in/shubham040700/'>Shubham</a> & <a className='text-orange-400 hover:text-orange-700' href='https://www.linkedin.com/in/sutejsharma/'>Sutej</a></p>
    </footer>
  </html>
);

export default RootLayout;