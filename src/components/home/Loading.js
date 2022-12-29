import { useState } from "react";

export default function Loading({ref1, wait}) {

  const [hidden, setHidden] = useState(true);

  setTimeout(()=> {
    setHidden(false);
  },wait)

  return (
    <>
      {hidden === false && <div ref={ref1}>로딩</div>}
    </>
  )
}