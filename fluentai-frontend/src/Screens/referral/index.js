import React from "react";
import NavBar from "../../components/navBar";
import Referral from "../../components/referralList";

import {
  ReferralBody,
  ReferralFooter,
  ReferralHeader,
  ReferralScreenWrapper,
} from "./indexStyle";


function ReferralPage() {
  return (
    <ReferralScreenWrapper>
      <ReferralHeader>
        <NavBar />
      </ReferralHeader>
      <ReferralBody>
        <Referral />
      </ReferralBody>
      {/* <ReferralFooter></ReferralFooter> */}
    </ReferralScreenWrapper>
  );
}

export default ReferralPage;
