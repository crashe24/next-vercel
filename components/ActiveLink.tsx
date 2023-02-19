import Link from "next/link";
//import { useRouter } from "next/router";
import  {CSSProperties, FC } from 'react'

 const style: CSSProperties = {
    color:'#0070f3', textDecoration: 'underline'
 }  

 interface Props {
   text:string, href:string
 }

 const ActiveLink: FC<Props> = ({text,href}) => {

//const { asPath } = useRouter()
//console.log('router', router)

  return (
        <Link href={href}>
           {/* <a style={ asPath === href?style:undefine}>{text}</a>  */}
           {text}
        </Link>

  );
}

export default ActiveLink;
