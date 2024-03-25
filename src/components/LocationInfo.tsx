interface IProps {
    title: string;
    content: string;
}
export default function LocationInfo({ title, content }: IProps) {
    return (
        <div>
            <div className="py-[24px] text-18 text-sky-blue">{title}</div>
            <div className="text-16">{content}</div>
        </div>
    );
}
