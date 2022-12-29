import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Popover from '@iso/components/uielements/popover';
import IntlMessages from '@iso/components/utility/intlMessages';
import authAction from '@iso/redux/auth/actions';
import TopbarDropdownWrapper from './TopbarDropdown.styles';
const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.User);
  function handleVisibleChange() {
    setVisibility((visible) => !visible);
  }
  const content = (
    <TopbarDropdownWrapper className='isoUserDropdown'>
      <Link className='isoDropdownLink' to={'/profile'}>
        <IntlMessages id='topbar.myprofile' />
      </Link>
      <a className='isoDropdownLink' href='# '>
        <IntlMessages id='themeSwitcher.settings' />
      </a>
      <a className='isoDropdownLink' href='# '>
        <IntlMessages id='topbar.feedback' />
      </a>
      <a className='isoDropdownLink' href='# '>
        <IntlMessages id='topbar.help' />
      </a>
      <div
        className='isoDropdownLink'
        onClick={() => {
          dispatch(logout());
        }}
      >
        <IntlMessages id='topbar.logout' />
      </div>
    </TopbarDropdownWrapper>
  );

  return (
    <Popover
      content={content}
      trigger='click'
      open={visible}
      onOpenChange={handleVisibleChange}
      arrowPointAtCenter={true}
      placement='bottomLeft'
    >
      <div className='isoImgWrapper'>
        <img alt='user' src={user.avatar || localStorage.getItem('avatar')} />
        <span className='userActivity online' />
      </div>
    </Popover>
  );
}
