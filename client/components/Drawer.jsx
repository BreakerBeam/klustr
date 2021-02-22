import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import styled, { css } from 'styled-components';
import tempLogo from '../LogoDots.svg';

const Drawer = (props) => {
  const { history } = props;
  const itemsList = [
    {
      text: 'Main Dashboard',
      icon: <DashboardIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'Cluster Overview',
      icon: <BubbleChartIcon />,
      onClick: () => history.push('/cluster'),
    },
    {
      text: 'Metrics',
      icon: <TimelineIcon />,
      onClick: () => history.push('/metrics'),
    },
    {
      text: 'Broker View',
      icon: <AccountTreeIcon />,
      onClick: () => history.push('/brokerView'),
    },
    {
      text: 'About Us',
      icon: <InfoIcon />,
      onClick: () => history.push('/about'),
    },
  ];
  return (
    <MUIDrawer variant='permanent'>
      <EyeGlass>
        <div id='upperLeftMenu'>
          <a href='/' id='eyeglasses'>
            <img id='newLogo' src={tempLogo} alt='Kafka Specks Logo' />
          </a>
          <br />
        </div>
      </EyeGlass>
      <Divider />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

const EyeGlass = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-bottom: 0;
`;

export default withRouter(Drawer);
