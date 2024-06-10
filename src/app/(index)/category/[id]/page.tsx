import { notFound } from "next/navigation";

interface Props{
  params: {
    id: string
  }
}

export default function Category({params}: Props) {
  const {id} = params

  if (id === 'gratis'){
    notFound()
  }

    return (
     <div className="">
      <h1>Index category {id}</h1>
     </div>
    );
  }
  