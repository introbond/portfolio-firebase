import React from "react";
import { Tooltip } from "antd";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai"
import { SiGitbook, SiBitcoin } from "react-icons/si";
import DonationCard from "../cards/DonationCard.jsx";
import CustomModalButton from "../buttons/CustomModalButton.jsx";
import { openInNewTab } from "../../utils/utils.js"
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";

const SocialMediaIcons = () => {
    const { screenSize } = useScreenDimensions();

    let rightPosition = "40px";
    if (screenSize === ScreenSize.XS) {
        rightPosition = "5px";
    };

    return (
        <div>
            <AiOutlineMail
                className="icon-social"
                style={{ bottom: "250px", right: rightPosition, opacity: 0.6, cursor: 'not-allowed' }}
            />
            <AiFillLinkedin
                className="icon-social"
                style={{ bottom: "200px", right: rightPosition }}
                onClick={() => openInNewTab("https://www.linkedin.com/in/0xthejb/")}
            />
            <SiGitbook
                className="icon-social"
                style={{ bottom: "150px", right: rightPosition }}
                onClick={() => openInNewTab("https://thejb.gitbook.io/core")}
            />
            <AiFillGithub
                className="icon-social"
                style={{ bottom: "100px", right: rightPosition }}
                onClick={() => openInNewTab("https://github.com/bondzai")}
            />
            <CustomModalButton
                buttonText="Buy me a coffee"
                title="Buy me a coffee"
                content={<DonationCard />}
                icon={
                    <Tooltip title="Buy me a coffee." placement="left">
                        <SiBitcoin className="icon-social" style={{ bottom: "50px", right: rightPosition }}/>
                    </Tooltip>
                }
                hideButtons
            />
        </div>
    );
};

export default SocialMediaIcons;
