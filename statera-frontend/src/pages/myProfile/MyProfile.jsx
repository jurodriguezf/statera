import React, {useEffect, useState} from "react";

import Panel from "../../layout/BasicLayout/Panel";
import {makeProfileRequest} from "../../api/util";

const MyProfile = (props) => {
  const {token} = props;
  const [profileData, setProfileData] = useState({});

  useEffect( () => {
    const getData = async () => {
      const response = await makeProfileRequest(token)
      console.log(token)

      setProfileData(response);
    }

    getData();
  }, [token])

    return (
        <Panel>
            <h1>{JSON.stringify(profileData)}</h1>
        </Panel>
    );
}

export default MyProfile
