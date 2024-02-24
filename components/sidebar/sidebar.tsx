import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { getFolderes, getUserSubscriptionStatus } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";

type SidebarProps = {
  params: { workspaceId: string };
  className?: string;
};

const Sidebar = async ({ params, className }: SidebarProps) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: subscriptionData, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);

  const { data: folderData, error: folderError } = await getFolderes(
    params.workspaceId,
  );

  if (subscriptionError || folderError) redirect("/dashboard");
 
  return <div>Sidebar</div>;
};

export default Sidebar;
