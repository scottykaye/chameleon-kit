// import { type VariantProps, cva } from "class-variance-authority";
// import type { ElementType, ReactElement, ReactNode } from "react";
// import { cn } from "../utils/cn";
//
// const VARIANTS = {
//   default: "border bg-tag text-tag-foreground border-tag-border",
//   inverted: "bg-tag-inverted text-tag-inverted-foreground",
//   marine:
//     "border bg-tag-secondary text-tag-secondary-foreground border-tag-secondary-border",
//   secondary:
//     "border bg-tag-secondary text-tag-secondary-foreground border-tag-secondary-border",
//   tertiary:
//     "border bg-tag-tertiary text-tag-tertiary-foreground border-tag-tertiary-border",
//   quaternary:
//     "border bg-tag-quaternary text-tag-quaternary-foreground border-tag-quaternary-border",
//   opaque: "border bg-tag/85 text-tag-foreground/85 border-tag-border/85",
//   // Primary used when on a secondary background
//   destructive: "bg-destructive text-white",
// };
//
// const SIZES = {
//   default: "px-4 py-1.5",
//   xs: "px-2 py-0.5",
//   sm: "px-3 py-1",
//   lg: "py-3 px-8",
// };
//
// const tagVariants = cva({
//   variants: {
//     variant: VARIANTS,
//     size: SIZES,
//     isFullWidth: {
//       true: "w-full",
//     },
//   },
//   defaultVariants: {
//     variant: "default",
//     size: "default",
//   },
// });
//
// namespace Tag {
//   export type Props = {
//     className?: string;
//     children?: ReactNode;
//     is?: ElementType;
//   } & VariantProps<typeof tagVariants>;
// }
//
// export function Tag({
//   variant = "default",
//   children,
//   size = "default",
//   className,
//   is = "span",
//
//   ...props
// }: Tag.Props): ReactElement {
//   let Element: ElementType = is;
//   return (
//     <Element
//       {...props}
//       className={cn(
//         "inline-flex items-center rounded text-sm",
//         tagVariants({ variant, size }),
//         className,
//       )}
//     >
//       {children}
//     </Element>
//   );
// }
