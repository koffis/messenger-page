import React from "react";

const Profile = (props) =>{
    return(
        <div>
            <div>
                <img alt={'user'} src={props.avatar}/>
                <h4>{props.name}</h4>
            </div>
            <div>
                Status:{props.status}<br/>
                Age:{props.age}<br/>
                Location:{props.location}<br/>
                Work:{props.work}
            </div>
        </div>
    )
};

export default Profile;