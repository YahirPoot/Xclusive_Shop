import { inter } from "@/app/ui/fonts";
import React, { Children } from "react";
import { ReactNode } from "react";
interface FooterListProps {
    children: ReactNode;
}

const FooterList: React.FunctionComponent<FooterListProps> = ({children}) => {
    return(
        <div className=" w-full sm:w-1/2  md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            {children}
        </div>
    );
}
export default FooterList;
