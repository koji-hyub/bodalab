interface IProps {
  skill: string;
}
export default function Badge({ skill }: IProps) {
  return (
    <div className="rounded-[20px] font-14 border border-solid border-gray-lightest bg-gray-lighter px-[14px] pb-[2px]">
      {skill}
    </div>
  );
}
