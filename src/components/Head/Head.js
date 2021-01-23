import React from 'react';

import "./Head.css";
import firebase from "../../utils/firebase"


class header extends React.Component { //lol why is this name different to the file name? 
    constructor() {
        super();
        this.state = { loaded: false };
    }

    render() {
        //getting the picture address:
        var picaddress = ""

        var ref = firebase.database().ref("Players");

        ref.on("value", function (snapshot) { //on a change in the database
            snapshot.forEach(function (childSnapshot) { //for each player
            
                var childData = childSnapshot.val(); //get the data of the plater
                if (childData.id == 143) { //if that player is Walt with given id 143
                    //TO DO: make generic find
                    picaddress = childData.pictureid; //get that picture id
                }
               // console.log(picaddress)
            });
        });

        return (
            <header className='Head'>
                <ul id='header_list'>
                    <li id='site_name'><h1>Golf Royale</h1> </li>
                    <li id='profile_image'>
                        {/* <img alt="Profile" src={picaddress} alt="cannot display" width="100px" height="100px">
                         </img> */}

                        {/* trying to use image from database instead: */}
                        <div> 
                            {/* all this is to make sure it only displays when not loaded yet */}
                            {this.state.loaded ? null :
                                <div
                                    style={{
                                        background: 'white',
                                        height: '100px',
                                        width: '100px',
                                    }}
                                >can't load</div>
                            }
                            <img
                                style={this.state.loaded ? {} : { display: 'none' }} //display nothing if not loaded yet
                                key={Date.now()}
                                src={picaddress}
                                onLoad={() => this.setState({ loaded: true })}
                                id = "profile_image"
                            />
                        </div>
                    </li>




                </ul>
            </header>
        )
    }

}

export default header;