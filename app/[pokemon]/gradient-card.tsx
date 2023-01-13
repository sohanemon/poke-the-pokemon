import { ReactNode } from "react";
export default function GradientCard({
  abilities,
  category,
  height,
  weight,
}: {
  abilities: [Abilities];
  height: number;
  weight: number;

  // @ts-ignore
  category: [Type];
}) {
  return (
    <>
      <div className='rounded-lg w-full h-auto mx-auto  mt-10 gradient p-1 sim-card '>
        <div className='flex  justify-between h-full bg-white rounded-lg p-10 sim-card flex-wrap items-center '>
          <Items title='Height' value={2.05} />
          <Items title='Height' value={2.05} />
          <div className='w-full my-3' />
          <Items title='Height' value={2.05} />
          <Items title='Height' value={2.05} />
        </div>
      </div>
    </>
  );
}

const Items = ({
  title,
  value,
}: {
  title: string;
  value: ReactNode | string | number;
}) => {
  return (
    <div className='space-y-3 basis-1/2'>
      <p className='text-xl font-medium'>{title}</p>
      <p className='text-base text-black'>{value}</p>
    </div>
  );
};
