import React, { Component } from 'react'
import './UserProfilePage.css'

class ProfilePage extends Component {
    render(){

        // TO DO: get past info of user
        // TO DO: add button to save

        return(
            <div>
                <h1>PROFILE</h1>
                <div class="leftbox">
                    <table border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr class="row1">
                                <td class="prompt">Nickname:</td>
                                <td>
                                    <input type="text" name="name" id="name"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>     
            </div>
        );
    }
   
}
export default ProfilePage;