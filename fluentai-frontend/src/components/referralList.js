import React, { useEffect, useState } from "react";
import Table from "./Common/Table/table";
import {
  BackButton,
  Container,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalNavBar,
  ModalSubText,
  ModalWrapper,
  ReferralMade,
  ReferralMadeRow1,
  ReferralUrl,
  ShareWith,
} from "./referralListStyle";
import NavBar from "./navBar";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getReferralLinks, getReferredUsers } from "../AppRedux/actions/user";
import { useNavigate } from "react-router-dom";
import { EmailShareButton, FacebookShareButton } from "react-share";
import { referralBodyText, referralTitle } from "../config";

export default function Referral() {
  const {
    getRefferedUsersBegin,
    getRefferedUserSuccessData,
    getRefferedUserFailureData,
    getReferalLinkBegin,
    getReferalLinkSuccessData,
    getReferalLinkFailureData,
  } = useSelector(({ user }) => user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [referralData, setReferralData] = useState();
  const [referralLink, setReferralLink] = useState();
  const [totalItems, setTotalItems] = useState();
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const tableHeaders = ["Email"];

  useEffect(() => {
    if (getRefferedUserSuccessData) {
      let filteredData = getRefferedUserSuccessData?.data?.map(
        ({ user_first_name, user_last_name, user_email }) => ({
          email: user_email,
        })
      );
      setReferralData(filteredData);
      setTotalReferrals(getRefferedUserSuccessData?.total);
    }
  }, [getRefferedUserSuccessData]);

  useEffect(() => {
    if (getRefferedUserSuccessData?.total) {
      setTotalItems(getRefferedUserSuccessData?.total);
    }
  }, [getRefferedUserSuccessData?.total]);

  useEffect(() => {
    if (getReferalLinkSuccessData)
      setReferralLink(getReferalLinkSuccessData?.data);
  }, [getReferalLinkSuccessData]);

  useEffect(() => {
    dispatch(getReferredUsers(currentPage));
    dispatch(getReferralLinks());
  }, [currentPage]);

  function handlePageChange(event, page) {
    setCurrentPage(page);
    // Add your logic here for handling the page change
  }

  return (
    <Container>
      <ModalWrapper>
        <ModalNavBar>
          <BackButton onClick={() => navigate(-1)}>
            <img src="/Icons/backArrow.svg" alt="closeButton" />
          </BackButton>
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
              <div>
                {totalReferrals}
                <span>Total Referrals</span>
              </div>
            </ReferralMadeRow1>
            <ShareWith>
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
            </ShareWith>
          </ReferralMade>
          <Table
            headers={tableHeaders}
            data={referralData?.length ? referralData : []}
            totalItems={totalItems}
            handlePageChange={handlePageChange}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalWrapper>
    </Container>
  );
}

export const truncateContent = (data, maxLength, num = false) => {
  if (num) {
    return `${data?.substring(0, maxLength)}..`;
  }
  return `${data?.substring(0, maxLength)}....`;
};

export function copyToClipBoard(data) {
  navigator.clipboard.writeText(data);
  toast.success("Copied to clipboard");
  setTimeout(() => {
    toast.clearWaitingQueue();
  }, 2000);
}
