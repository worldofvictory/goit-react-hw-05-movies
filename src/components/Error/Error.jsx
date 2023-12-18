import { PiMaskSadDuotone } from "react-icons/pi";


function Error({ children }) {
    return (
        <div>
            <PiMaskSadDuotone />
            {children}
        </div>
    )
}

export default Error;