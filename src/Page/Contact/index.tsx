import React, {useEffect} from "react";
import H0 from "../../Components/H0";
import {ReactComponent as LinkedIn} from "../../Assets/linkedin.svg";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import '../../Style/Contact.scss';
import Download from "./Download";


const Contact = () => {

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'auto'});
    return () => {}
  }, []);

  const handleClickLinkedIn = () => {
    return;
  }

  const handleClickTwitter = () => {
    return;
  }

  return <div className={"container_bk"} style={{minHeight: "100vh"}}>
    <div className={"content_box"}>
      <H0 title={"contact"} />
      <div className={"mail"}>media@a41ventues.com</div>
        <Twitter onClick={handleClickTwitter}/>
          <LinkedIn onClick={handleClickLinkedIn}/>
      <div className={"contact_row_box"}>
        <Download title={"Logo File Download"}/>
        <Download title={"Brand Guid Download"} />
      </div>
    </div>

  </div>;
};
export default Contact;
