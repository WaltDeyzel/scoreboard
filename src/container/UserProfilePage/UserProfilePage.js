import React, { Component, useEffect, useState} from 'react'
import './UserProfilePage.css'
import firebase from "../../utils/firebase"

class ProfilePage extends Component {


    render(){

        // TO DO: get past info of user
        // TO DO: save this info to database when button clicked
        // TO DO: use picture selected here in header
        // TO DO: limit amount of chars of nickname
        // TO DO: add best game from database
        // TO DO: make this card generic so it can be used on other pages
        // TO DO: fix scaling
        // TO DO: make button do stuff

        // TO DO: use cookies or something to find which player 

        // minor issue: box around button when clicked

        const playerRef = firebase.database().ref("Players").child("MRQsg8BBks1r2hbty4t"); //TO DO find generically
        // const player = playerRef.val();
        // playerRef.get(name)
        // console.log(playerRef.get)
        // console.log(playerRef.pictureid)

        

        // useEffect(() => {
        //     playerRef.on("value",(snapshot)=>{ //on value change in database, snapshot is a function saying what it should do
        //         //const name = snapshot.val("name"); //object containing all todo objects
        //        // console.log(name);
             
            
        // });
        // },[]);
           
        const picaddress="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheLegendOfZeldaLinksAwakening_image1600w.jpg"
        // const picaddress = playerRef.pictureid;
        function saveHandler() {
            //bla
            picaddress="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheLegendOfZeldaLinksAwakening_image1600w.jpg"
            console.log("here!")
          }
        
        //   picaddress = playerRef.val().pictureid;

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
                <button id="ProfileSave" onClick={saveHandler}>
                    Save
                </button>
                </div>     
                <div class="rightbox"> {/* this box also acts as a border for the card */}
                    <div id="userName">Walt</div>
                    <img id="profilePic" src={picaddress}></img>
                    <div id="strength">Best game: Chess</div>
                    <div id="winRatio">9/10</div>
                    <div id="winRatioPrompt">wins/total games</div>
                    
                </div>



            </div>
        );
    }
   
}
export default ProfilePage;