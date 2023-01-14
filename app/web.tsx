import Card from "./card";
export default function Web({ results }: { results: [Pokemon] }) {
  return (
    <>
      {results.map((pokemon: Pokemon, idx) => (
        <Card key={idx} pokemon={pokemon} />
      ))}
    </>
  );
}
