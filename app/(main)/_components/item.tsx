import { cn } from '@/lib/utils'
import { ItemProps } from '@/types'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronUpIcon } from 'lucide-react'

const Item = ({   id,
    label,
    onClick,
    icon: Icon,
    active,
    documentIcon,
    isSearch,
    level = 0,
    onExpand,
    expanded, } : ItemProps) => {
  return (
    <div
    onClick={onClick}
    role="button"
    style={{ 
      paddingLeft: level ? `${(level * 12) + 12}px` : "12px"
    }}
    className={cn(
      "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
      active && "bg-primary/5 text-primary"
    )}
  >
    {!!id && (
      <div
        role="button"
        className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
        // onClick={handleExpand}
      >
        <ChevronUpIcon
          className="h-4 w-4 shrink-0 text-muted-foreground/50"
        />
      </div>
    )}
    {documentIcon ? (
      <div className="shrink-0 mr-2 text-[18px]">
        {documentIcon}
      </div>
    ) : (
      <Icon 
        className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground"
      />
    )}
    <span className="truncate">
      {label}
    </span>
    {/* {isSearch && (
      <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    )}
    {!!id && (
      <div className="ml-auto flex items-center gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={(e) => e.stopPropagation()}
            asChild
          >
            <div
              role="button"
              className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
            >
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-60"
            align="start"
            side="right"
            forceMount
          >
            <DropdownMenuItem onClick={onArchive}>
              <Trash className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="text-xs text-muted-foreground p-2">
              Last edited by: {user?.fullName}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div
          role="button"
          onClick={onCreate}
          className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
        >
          <Plus className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    )} */}
  </div>
  )
}

export default Item