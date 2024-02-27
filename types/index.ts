import { Doc, Id } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";

export type ItemProps = {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
};

export type DocumentListProps = {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
};

export type ConfirmModalProps = {
  children: React.ReactNode;
  onConfirm: () => void;
};

export type SearchStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

export type SettingStore = SearchStore;

export type NavbarProps = {
  isCollapsed: boolean;
  onReset: () => void;
};

export type TitleProps = {
  initialData: Doc<"documents">;
};

export type BannerProps = {
  documentId: Id<"documents">;
};

export type MenuProps = {
  documentId: Id<"documents">;
};

export type ToolbarProps = {
  initialData: Doc<"documents">;
  preview?: boolean;
};

export type IconPickerProps = {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
};

export type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};
