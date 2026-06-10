import React from "react";

const ReusableBanners: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 box-border rounded-2xl bg-[#f4faff] w-[60%] gap-10">
      <h1 className="text-[#171f46] text-4xl font-semibold">
        Learn 4.0 Technologies
      </h1>
      <p className="text-[#64748b] text-lg font-semibold text-center">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from Professionals involved
        in Product Development.
      </p>
      <div className="flex flex-row justify-start items-start flex-wrap gap-10">
        {data?.map((info: any) => {
          return (
            <div key={info?.id} className={`${info?.className} gap-2`}>
              <h1 className="text-[#171f46] font-semibold text-xl">{info?.title}</h1>
              <p className="text-[#171f46] font-light text-sm">{info?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReusableBanners;

const data = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data.",
    className:
      "flex flex-col items-center justify-center border-top-2 w-[45%] bg-[#ffffff] p-4 box-border border-t-4 border-[#ff4f64] rounded-t-xl",
  },
  {
    id: 2,
    title: "IoT Developer",
    description:
      "IoT Developers are professionals who can develop, manage and monitor IoT Devices.",
    className:
      "flex flex-col items-center justify-center border-top-2 w-[45%] bg-[#ffffff] p-4 box-border border-t-4 border-[#00a8e7] rounded-t-xl",
  },
  {
    id: 3,
    title: "VR Developer",
    description:
      "A V developer creates completely new digital environments that people can see.",
    className:
      "flex flex-col items-center justify-center border-top-2 w-[45%] bg-[#ffffff] p-4 box-border border-t-4 border-[#44c4a1] rounded-t-xl",
  },
  {
    id: 4,
    title: "ML Engineer",
    description:
      "Machine learning engineers feed data into models defined by data scientists.",
    className:
      "flex flex-col items-center justify-center border-top-2 w-[45%] bg-[#ffffff] p-4 box-border border-t-4 border-[#fcc200] rounded-t-xl",
  },
];
