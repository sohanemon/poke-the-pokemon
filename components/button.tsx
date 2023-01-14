export default function Button({ type }: { type: Type }) {
  if (type?.type?.name === "flying")
    return (
      <>
        <button className={` capitalize  two-color-btn btn`}>
          {type.type.name}
        </button>
      </>
    );

  return (
    <>
      <button className={` capitalize  bg-${type?.type?.name} btn`}>
        {type.type.name}
      </button>
    </>
  );
}
