import React, { useState, useEffect } from 'react';
import CoreMetricsBox from '../components/CoreMetricsBox.jsx';
import AuxiliaryMetricsBox from '../components/AuxiliaryMetricsBox.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { cyan } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    marginBottom: 50,
    backgroundColor: cyan[300],
  },
  title: {
    fontSize: 30,
  },
});

const MetricsContainer = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} align='center'>
            Metrics Dashboard
          </Typography>
        </CardContent>
      </Card>
      <MetricsContainerDiv>
        <CoreMetricsBox />
        <AuxiliaryMetricsBox />
      </MetricsContainerDiv>
    </>
  );
};

const MetricsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default MetricsContainer;
