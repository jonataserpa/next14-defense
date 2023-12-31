import { LucideIcon } from "lucide-react";


export enum StatusType {
  UP,
  WARNING,
  ERROR,
}
export interface IDefenseProps {
    id?: number;
    name: string;
    status: string;
    icon?: LucideIcon;
    href?: string;
    color?: string;
    bgColor?: string;
  }