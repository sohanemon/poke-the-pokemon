import "./globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
