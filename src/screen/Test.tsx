import * as React from 'react'

import { useNavigate } from 'react-router-dom';
import { withRouter } from './WithRouter';
// const Test = ()=>{
//     const navigate = useNavigate();
//     const mybutton = ()=>{
//         navigate('/users')
//     }
//     return(
//         <div className="content-wrapper">
//                 <section className="content">
//                     <button type="button" onClick={mybutton}>Alert</button>
//         </section>
//         </div>
//     )
// }
interface State{

}
interface Props{
    navigate:any,
}
class Test extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
    }
    myonclick = ()=>{
        this.props.navigate('/users')
    }
    render(){
        
        
        return(
            <div className="content-wrapper">
                <section className="content">
                    <button type="button" onClick={this.myonclick}>Alert</button>
                </section>
            </div> 
        )
    }
}



export default withRouter(Test);