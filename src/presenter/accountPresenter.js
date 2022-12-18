import React from "react";
import AccountView from "../view/accountView";
import {useRecoilValue} from "recoil";
import {userIdState, userState} from "../model/atoms";

function Account() {
    const currentUser = useRecoilValue(userState);
    const currentUserId = useRecoilValue(userIdState);

    console.log(currentUser)

    return (
        <AccountView userId={currentUserId}/>
    )
}
export default Account;