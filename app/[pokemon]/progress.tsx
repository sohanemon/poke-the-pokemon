import ProgressBar from "@ramonak/react-progress-bar";
export default function Progress({ statName, value }: Props) {
  return (
    <>
      <p className='text-sm mb-1 mt-2'>{statName}</p>
      <ProgressBar
        completed={value}
        bgColor='#3DC7EF'
        height={"4px"}
        baseBgColor='#D9D9D9'
        isLabelVisible={false}
      />
    </>
  );
}

type Props = {
  statName: string;
  value: string | number;
};
