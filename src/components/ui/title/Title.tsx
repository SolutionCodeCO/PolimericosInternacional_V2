interface Props{
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({title, subtitle, className}:Props) =>{
    return(
    <div className={`mt-3 ${className}`}>
        <h1 className={`antialiased text-3xl font-bold my-5`}>
            {title}
        </h1>

        {
        subtitle &&(
            <h3 className={"text-2xm -my-3"}>{subtitle}</h3>
        ) 
        }
    </div>
    )
}