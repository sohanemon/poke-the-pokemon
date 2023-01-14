export default function Button({ type }: { type: Type }) {
  return (
    <>
      <button className={` capitalize  bg-${type?.type?.name} btn`}>
        {type.type.name}
      </button>
    </>
  );
}
