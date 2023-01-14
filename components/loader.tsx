export default function Loader() {
  return (
    <>
      <span className='bg-unknown bg-shadow bg-rock bg-fire bg-base bg-primary bg-grass bg-poison bg-psychic bg-ice bg-bug bg-flying bg-ghost bg-fighting bg-dark bg-fairy bg-steel bg-electric bg-water bg-ground bg-dragon bg-normal hidden'></span>
      <div className='w-full h-full grid place-content-center animate-spin text-primary col-span-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
          />
        </svg>
      </div>
    </>
  );
}
