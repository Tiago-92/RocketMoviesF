import { Add } from "./styles";

export function Button({ icon: Icon, title, ...rest }) {

    return(
        <Add 
        type="button"
        {...rest}
        >
            {Icon && <Icon size={18} />}
            {title}
        </Add>
    )  
}