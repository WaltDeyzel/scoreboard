import React, { Component } from 'react'
import './UserProfilePage.css'

class ProfilePage extends Component {
    render(){

        // TO DO: get past info of user
        // TO DO: save this info to database when button clicked
        // TO DO: use picture selected here in header
        // TO DO: limit amount of chars of nickname

        // minor issue: box around button when clicked

        return(
            <div>
                <h1>PROFILE</h1>
                <div class="leftbox">
                    <table border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr class="row1">
                                <td class="prompt">Nickname:</td>
                                <td>
                                    <input type="text" name="name" id="name" ></input>
                                </td>
                            </tr>
                            <tr class="row2">
                                <td class="prompt">Colour:</td>
                                <select name="color" id="color" class="entryfield">
                                    <option value="Yellow">
                                    Yellow
                                    </option>

                                    <option value="Blue">
                                    Blue
                                    </option>

                                    <option value="Gray">
                                    Black
                                    </option>

                                    <option value="Red">
                                    Red
                                    </option>

                                    <option value="Green">
                                    Green
                                    </option>

                                    <option value="Purple">
                                    Purple
                                    </option>

                                    <option value="Pink">
                                    Pink
                                    </option>

                                </select>

                            </tr>
                            <tr class="row1">
                                <td class="prompt">Picture URL:</td>
                                <td>
                                    <input type="text" name="picture" id="picture" ></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>Don't forget to save your changes!</h5>
                    <button id="ProfileSave">
                        Save
                    </button>
                </div>     
                <div class="rightbox"> {/* this box also acts as a border for the card */}
                <div id="userName">user name</div>
                    <img id="profilePic" src="https://images.fd.nl/archive/77923_nieuwe-bronnen2web.jpg?fit=crop&crop=faces&auto=format%2Ccompress&q=45&w=360&h=360&fm=jpg&cs=tinysrgb"></img>
                </div>



            </div>
        );
    }
   
}
export default ProfilePage;