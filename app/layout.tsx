"use client";
import "./globals.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ArtContext from "@/contexts/art-context";
const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ApolloProvider client={client}>
          <ArtContext>{children}</ArtContext>
        </ApolloProvider>
      </body>
    </html>
  );
}
