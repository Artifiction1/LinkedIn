import { useState } from "react";
import { fetchData } from "../functions/fetch";

const ShowData = () => {

    const [profiles, setProfiles] = useState([])


    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/profile/",
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
              },
            }
          );
          if (response.ok) {
            const getData = await response.json();
            console.log(getData);
            setProfiles(getData)
          } else {
              console.log("ERROR !!")
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
            {profiles && profiles.map((profile) => {
                <List
            })}
        </div>
    )
}

export default ShowData