import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { htmlIdGenerator } from "@elastic/eui/lib/services";

import { signOut } from "redux/actions/auth";

import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiHeaderSectionItemButton,
} from "@elastic/eui";

export default function HeaderUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);

  const id = htmlIdGenerator()();

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
      aria-controls={id}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Menu usuario autenticado"
      onClick={onMenuButtonClick}
    >
      <EuiAvatar size="l" name={displayName} imageUrl={photoURL} />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      id={id}
      ownFocus
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
            <EuiAvatar size="xl" name={displayName ?? ""} imageUrl={photoURL} />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiText>
              <p>{displayName}</p>
            </EuiText>

            <EuiSpacer size="m" />

            <EuiFlexItem>
              <EuiFlexGroup justifyContent="flexStart">
                <EuiFlexItem grow={false}>
                  <Link onClick={handleLogout} to="#">
                    Salir
                  </Link>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiPopover>
  );
}
