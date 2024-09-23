import { Experience } from "./Experience";

export interface CvData{
    imgPath?: string;
    name?: string,
    address?: string;
    phone?: string;
    primaryRole?: string;
    description?: string;
    experiences?: Experience[];
    skills?: string[];
}