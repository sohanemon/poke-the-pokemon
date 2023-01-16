export default function Pagination() {
  return (
    <div className='inline-flex mt-2 xs:mt-0 mb-20'>
      <button className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l'>
        Prev
      </button>
      <button className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'>
        Next
      </button>
    </div>
  );
}
