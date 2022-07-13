/** @format */

import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Experiences = () => {
  const defaultExperience = {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  };
  const [Experiences, setExperiences] = useState(defaultExperience);

  const fetchMyExperience = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me/experiences",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZWNlY2U2YzAzMDAwMTU5MTgxNDMiLCJpYXQiOjE2NTc1MzE2MjgsImV4cCI6MTY1ODc0MTIyOH0.Ueo_M62QO05ffN1aYIPJjOyI14bH3uldPPo-OlagobM",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fixDate = (date) => {
    try {
      return format(parseISO(date), "yyyy MMMM");
    } catch {
      return `Present`;
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="mt-3">
        <div className="d-flex">
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1665619200&amp;v=beta&amp;t=hzqVGRvol3rh_0b7B5xMv2kmIgcVfGUICHu6g2OYAus"
            loading="lazy"
            width="68px"
            height="68px"
            alt="EPICODE logo"
          />
          <div className="m-1 ml-4 d-flex flex-column text-left">
            <h6>Front End Developer</h6>
            <span id="eduFontSize">Epicode</span>
            <span id="eduFontSize" className="text-muted">
              04/2022 - 08/2022
            </span>
            <span id="eduFontSize">HTML, CSS & JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
