"use client";
import Image from "next/image";
import { useState } from "react";
import TextField from "./TextField";
import RecruitBadge from "./RecruitBadge";

export default function Inquiry() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [recruitOpen, setRecruitOpen] = useState<boolean>(false);
  const handleFormOpen = () => {
    setFormOpen((prev) => !prev);
  };
  const handleRecruitOpen = () => {
    setRecruitOpen((prev) => !prev);
  };

  return (
    <section id="contact">
      <div className="py-[120px]">
        <div className="w-[1280px] m-auto ">
          <div className="text-32 text-white flex justify-between pb-[24px] border-b border-white">
            <div>프로젝트 문의</div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleFormOpen}
            >
              <Image
                src={`/images/arrow_${formOpen ? "open" : "close"}.svg`}
                alt={`arrow ${formOpen ? "open" : "close"}`}
                width={32}
                height={32}
                priority
              />
            </div>
          </div>
          {formOpen && (
            <div className="mt-[32px]">
              <div className="flex gap-[12px]">
                <TextField placeholder="회사명" />
                <TextField placeholder="담당자 이름" />
              </div>
              <div className="flex gap-[12px] mt-[12px]">
                <TextField placeholder="연락처" />
                <TextField placeholder="이메일" />
              </div>
              <div className="flex gap-[12px] mt-[12px]">
                <textarea
                  className="bg-gray-darker text-white w-full min-h-[287px] p-[16px]"
                  placeholder="문의내용"
                />
              </div>
              <div className="mt-[12px] h-[24px]">
                <input
                  type="checkbox"
                  id="custom-checkbox"
                  className="hidden"
                />
                <label
                  htmlFor="custom-checkbox"
                  className="inline-flex items-center cursor-pointer text-white"
                >
                  <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hidden w-4 h-4 text-skylight pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </span>
                  개인정보보호정책에 동의합니다.
                </label>
              </div>
              <div className="mt-[12px] flex justify-center">
                <button className="rounded-[24px] bg-skylight px-[32px] py-[10px]">
                  SEND
                </button>
              </div>
            </div>
          )}
          <div className="text-32 text-white flex justify-between pb-[24px] border-b border-white mt-[32px]">
            <div>채용</div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleRecruitOpen}
            >
              <Image
                src={`/images/arrow_${recruitOpen ? "open" : "close"}.svg`}
                alt={`arrow ${recruitOpen ? "open" : "close"}`}
                width={32}
                height={32}
                priority
              />
            </div>
          </div>
          {recruitOpen && (
            <div className="mt-[32px] flex gap-[16px]">
              {RECRUIT_ITENS.map((item, index) => (
                <RecruitBadge key={index} skill={item.skill} url={item.url} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const RECRUIT_ITENS = [
  { skill: "Planner & Consulting", url: "https://naver.com" },
  { skill: "Designer", url: "https://naver.com" },
  { skill: "Publisher", url: "https://naver.com" },
  { skill: "Scripter", url: "https://naver.com" },
];
