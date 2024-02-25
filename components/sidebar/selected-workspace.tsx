import { workspace } from "@/lib/supabase/supabase.types";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SelectedWorkspaceProps {
  workspace: workspace;
  onClick?: (option: workspace) => void;
}

const SelectedWorkspace: React.FC<SelectedWorkspaceProps> = ({
  workspace,
  onClick,
}) => {
  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex 
      rounded-md 
      hover:bg-muted 
      transition-all 
      flex-row 
      p-2 
      gap-4 
      justify-center 
      cursor-pointer 
      items-center 
      my-2"
    >
      <div className="flex flex-col">
        <p className="text-lg w-[170px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {workspace.title}
        </p>
      </div>
    </Link>
  );
};

export default SelectedWorkspace;
