interface IProps {
    title: string;
    item: { date: string; name: string }[];
}
export default function Timeline({ title, item }: IProps) {
    return (
        <div className="flex-1">
            <div className="text-32">{title}</div>
            <div className="flex mt-[32px] ">
                <div className="w-[0.5px] h-auto bg-black"></div>
                <div className="flex flex-col ml-[24px]">
                    {item.map((projectItem, index) => (
                        <div key={index} className="mb-[12px]">
                            <div className="text-16 font-bold">{projectItem.date}</div>
                            <div className="text-16 text-gray-light">{projectItem.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
