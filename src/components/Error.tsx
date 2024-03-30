import * as React from 'react'
import { useRouteError } from "react-router-dom";
import Layout from './Layout';

interface Props{

}

const Error = (props:Props)=>{
    const error:any = useRouteError();
  console.error(error);

    return(
        <Layout>
        <div className="content-wrapper">
        <section className="content">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            </section>
        </div>
        </Layout>
    )
}


export default Error;