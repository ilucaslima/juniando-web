import { formatDate } from "@/utils/format-date";
import React from "react";

interface IMetaInfo {
  name: string;
  date: Date;
  color: string;
}

const MetaInfo = ({ name, date, color = "text-dark-100" }: IMetaInfo) => {
  return (
    <div className={`flex items-center gap-2 ${color} text-xs font-medium`}>
      <span>{name}</span>
      <span className="bg-principal w-1 h-1 rounded-full" />
      <span>{formatDate(date)}</span>
    </div>
  );
};

export default MetaInfo;
