interface IProps {
  skill: string;
  url: string;
}
export default function RecruitBadge({ skill, url }: IProps) {
  return (
    <a href={url} target="_blank">
      <div className="recruit rounded-[20px] text-white font-16 border border-solid border-white hover:text-skylight hover:border-skylight px-[24px] pb-[8px] pt-[6px] flex items-center">
        {skill}
        <svg
          viewBox="0 0 13 13"
          className="fill-current w-[13px] h-[13px] text-white hover:text-skylight recruitBadge ml-[13px] mt-[5px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" />
        </svg>
      </div>
    </a>
  );
}
