import React from 'react';
import {Card} from 'antd'
const AntCard = ({children}:any) => {
  return <Card style={{borderRadius:"10px"}}>{children}</Card>;
};

export default AntCard
