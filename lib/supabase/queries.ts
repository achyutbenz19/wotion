"use server";

import { files, folders, workspaces } from "@/migrations/schema";
import db from "./db";
import { Folder, Subscription, workspace } from "./supabase.types";
import { validate } from "uuid";
import { and, eq, notExists } from "drizzle-orm";
import { collaborators } from "./schema";

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where: (s, { eq }) => eq(s.userId, userId),
    });

    if (data) {
      return { data: data as Subscription, error: null };
    } else {
      return { data: null, error: null };
    }
  } catch (err) {
    return { data: null, error: `Error ${err}` };
  }
};

export const createWorkspace = async (workspace: workspace) => {
  try {
    await db.insert(workspaces).values(workspace);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};

export const getFiles = async (folderId: string) => {
  const isValid = validate(folderId);
  if (!isValid) return { data: null, error: "Error" };
  try {
    const results = (await db
      .select()
      .from(files)
      .orderBy(files.createdAt)
      .where(eq(files.folderId, folderId))) as File[] | [];
    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};

export const getFolderes = async (workspaceId: string) => {
  const isValid = validate(workspaceId);
  if (!isValid) return { data: null, error: "Error" };
  try {
    const results: Folder[] | [] = await db
      .select()
      .from(folders)
      .orderBy(folders.createdAt)
      .where(eq(folders.workspaceId, workspaceId));
    return { data: results, error: null };
  } catch (error) {
    return { data: null, error: "Error" };
  }
};

const getPrivateWorkspaces = async (userId: string) => {
  if (!userId) return [];

  const privateWorkspaces = (await db
    .select({
      id: workspaces.id,
      createdAt: workspaces.createdAt,
      workspaceOwner: workspaces.workspaceOwner,
      title: workspaces.title,
      iconId: workspaces.iconId,
      data: workspaces.data,
      inTrash: workspaces.inTrash,
      logo: workspaces.logo,
      bannerUrl: workspaces.bannerUrl,
    })
    .from(workspaces)
    .where(
      and(
        notExists(
          db
            .select()
            .from(collaborators)
            .where(eq(collaborators.workspaceId, workspaces.id)),
        ),
        eq(workspaces.workspaceOwner, userId),
      ),
    )) as workspace[];
  return privateWorkspaces;
};
