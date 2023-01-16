export default function Head({ params }: { params: { pokemon: string } }) {
  return (
    <>
      <title>
        {params.pokemon.charAt(0).toUpperCase() + params.pokemon.slice(1)}
      </title>
    </>
  );
}
