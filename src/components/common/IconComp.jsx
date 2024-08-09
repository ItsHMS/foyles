import { Fragment } from "react"


const IconComp = ({icon, text}) => (
    <Fragment>
        <div className="icon-main w-[96px] h-[96px]">
            <img src={icon} className="w-full" />
            <h4 className="text-center font-bold text-sm mt-2">{text}</h4>
        </div>
    </Fragment>
)

export default IconComp;