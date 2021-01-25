import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "redux/actions/auth";

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

export default function HeaderUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);

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
      aria-controls="user-popover"
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
      id="user-popover"
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
              <EuiFlexGroup justifyContent="flexEnd">
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    iconType="exit"
                    size="s"
                    onClick={handleLogout}
                    data-test-subj="logout-button"
                  >
                    Salir
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiPopover>
  );
}
