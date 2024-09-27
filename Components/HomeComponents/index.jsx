import React from 'react'
import Header from './Header'
import Homebanner from './Homebanner'
import SocialProtection from './SocialProtection'
import OurObjective from './OurObjective'
import WhatWeDo from './WhatWeDo'
import OurApproach from './OurApproach'
import PartnerWithUs from './PartnerWithUs'
import Stakeholders from './Stakeholders'
import GetInvolved from './GetInvolved'


const index = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Homebanner />
      <SocialProtection />
      <OurObjective />
      <WhatWeDo />
      <OurApproach />
      <PartnerWithUs />
      <Stakeholders />
      <GetInvolved />
    </div>
  )
}

export default index
