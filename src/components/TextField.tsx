interface IProps {
    placeholder: string;
}

export default function TextField({ placeholder }: IProps) {
    return <input className="flex-1 p-[16px] bg-gray-darker text-white" type="text" placeholder={placeholder} />;
}
