import React, { useEffect, useState } from "react";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalNavBar,
  ModalSubText,
  ModalWrapper,
  ReferralMade,
  ReferralMadeRow1,
  ReferralMadeRow2,
  ReferralMadeRow2CircleWrapper,
  ReferralUrl,
} from "./referralsStyle";
import { EmailShareButton, FacebookShareButton } from "react-share";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReferralLinks, getReferredUsers } from "../AppRedux/actions/user";
import { truncateContent, copyToClipBoard } from "./referralList";
import { referralTitle, referralBodyText } from "../config";

export default function Referral({ onClose }) {
  const navigate = useNavigate();
  const {
    getRefferedUsersBegin,
    getRefferedUserSuccessData,
    getRefferedUserFailureData,
    getReferalLinkBegin,
    getReferalLinkSuccessData,
    getReferalLinkFailureData,
  } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const [referralData, setReferralData] = useState();
  const [referralLink, setReferralLink] = useState();
  const [totalReferrals, setTotalReferrals] = useState(0);
  // const referralTitle = "Join Fluent AI and experience smart conversations!";
  // const referralBody =
  //   "Start chatting with Fluent AI, the intelligent chat bot that understands you. Sign up using my referral link and enjoy seamless communication powered by AI.";

  useEffect(() => {
    if (getRefferedUserSuccessData) {
      setReferralData(getRefferedUserSuccessData?.data);
      setTotalReferrals(getRefferedUserSuccessData?.total);
    }
  }, [getRefferedUserSuccessData]);

  useEffect(() => {
    if (getReferalLinkSuccessData)
      setReferralLink(getReferalLinkSuccessData?.data);
  }, [getReferalLinkSuccessData]);

  useEffect(() => {
    dispatch(getReferredUsers(1));
    dispatch(getReferralLinks());
  }, []);

  return (
    <ModalWrapper>
      <ModalNavBar>
        <img src="/Icons/closeButton.svg" alt="closeButton" onClick={onClose} />
      </ModalNavBar>
      <ModalHeading>
        <ModalHeader>Referral</ModalHeader>
        <ModalSubText>Copy link & share with your friends</ModalSubText>
      </ModalHeading>
      <ModalBody>
        <ReferralUrl>
          <input type="text" value={referralLink} readOnly />
          <img
            src="/Icons/copy.svg"
            alt="copy"
            onClick={() => copyToClipBoard(referralLink)}
          />
        </ReferralUrl>

        <ReferralMade>
          <ReferralMadeRow1>
            <div>{`${totalReferrals} Referrals Made`}</div>
            {/* <div>18 Referrals active</div> */}
          </ReferralMadeRow1>
          <ReferralMadeRow2>
            <ReferralMadeRow2CircleWrapper
              onClick={() => navigate("/Referral")}
            >
              <img src="/Icons/rightArrowCircle.svg" alt="Circle right" />
            </ReferralMadeRow2CircleWrapper>
          </ReferralMadeRow2>
        </ReferralMade>
      </ModalBody>
      <ModalFooter>
        <span>Share with</span>
        <FacebookShareButton url={referralLink} quote={referralTitle}>
          <img src="/Icons/fb.svg" alt="Circle right" />
        </FacebookShareButton>

        <EmailShareButton
          url={referralLink}
          subject={referralTitle}
          body={referralBodyText}
        >
          <svg viewBox="0 0 64 64" width="24" height="24">
            <circle cx="32" cy="32" r="31" fill="#7f7f7f"></circle>
            <path
              d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
              fill="white"
            ></path>
          </svg>
        </EmailShareButton>
        {/* <img src="/Icons/fb.svg" alt="Circle right" />
        <img src="/Icons/instagram.svg" alt="Circle right" />
        <img src="/Icons/twitter.svg" alt="Circle right" /> */}
      </ModalFooter>
    </ModalWrapper>
  );
}
