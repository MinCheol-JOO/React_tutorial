import React from 'react';
import TableRow from '@material_ui/core/TableRow'

class Customer extends React.Component{
    render(){
        return(
        <div>
            <CustomerProfile id = {this.props.id}
            image = {this.props.image}
            name = {this.props.name}
            ></CustomerProfile>

            <CustomerInfo job = {this.props.job} birthday = {this.props.birthday} gender = {this.props.gender}></CustomerInfo>

        </div>
        )
    }
}
// class CustomerProfile extends React.Component{
//     render(){
//     return (
//         <div>
//             <img src ={this.props.image} alt = 'profile'/>
//             <h2>
//                 {this.props.name}({this.props.id})
//             </h2>
//         </div>

//     )
// }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }


export default Customer;