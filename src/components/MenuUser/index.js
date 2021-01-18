import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiHeaderSectionItemButton,
  EuiButtonEmpty,
} from "@elastic/eui";
import { signOut } from "redux/actions/auth";

export default function MenuUser({ userName }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopover = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  const button = (
    <EuiHeaderSectionItemButton
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Menu usuario logueado"
      onClick={onMenuButtonClick}
    >
      <EuiAvatar name={userName} size="s" />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      ownFocus
      repositionOnScroll
      button={button}
      isOpen={isOpen}
      anchorPosition="downRight"
      closePopover={handleClosePopover}
      panelPaddingSize="none"
    >
      <div style={{ width: 320 }}>
        <EuiFlexGroup
          gutterSize="m"
          className="euiHeaderProfile"
          responsive={false}
        >
          <EuiFlexItem grow={false}>
            <EuiAvatar name={userName} size="xl" />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiText>
              <p>John Username</p>
            </EuiText>

            <EuiSpacer size="m" />

            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFlexGroup
                  justifyContent="spaceBetween"
                  alignItems="baseline"
                >
                  <EuiFlexItem grow={false}>
                    <Link to="/favoritos">Favoritos</Link>
                  </EuiFlexItem>

                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty
                      flush="left"
                      style={{ height: "auto" }}
                      contentProps={{ style: { justifyContent: "left" } }}
                      onClick={handleLogout}
                    >
                      Log out
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiPopover>
  );
}

MenuUser.propTypes = {
  userName: PropTypes.string.isRequired,
};

MenuUser.defaultProps = {
  userName: "Mango Sánchez Redondo",
};
