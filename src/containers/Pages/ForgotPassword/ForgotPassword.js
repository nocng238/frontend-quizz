import React from 'react';
import { Link } from 'react-router-dom';

import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './ForgotPassword.styles';
import siteConfig from '@iso/config/site.config';

export default function () {
  return (
    <ForgotPasswordStyleWrapper className='isoForgotPassPage'>
      <div className='isoFormContentWrapper'>
        <div className='isoFormContent'>
          <div className='isoLogoWrapper'>
            <Link to='/dashboard'>{siteConfig.siteName}</Link>
          </div>

          <div className='isoFormHeadText'>
            <h3>
              <IntlMessages id='page.forgetPassSubTitle' />
            </h3>
            <p>
              <IntlMessages id='page.forgetPassDescription' />
            </p>
          </div>

          <div className='isoForgotPassForm'>
            <div className='isoInputWrapper'>
              <Input size='large' placeholder='Email' />
            </div>

            <div className='isoInputWrapper'>
              <Button type='primary'>
                <IntlMessages id='page.sendRequest' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ForgotPasswordStyleWrapper>
  );
}
