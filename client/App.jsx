import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ClusterContainer from './containers/ClusterContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ClusterNodeContainer from './components/ClusterNodeContainer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from './components/Drawer.jsx';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const [redirect, setRedirect] = useState(false);
  const [jMXPort, setJMXPort] = useState('');
  let display;

  if (!redirect) {
    display = (
      <Route exact path='/'>
        <Welcome setRedirect={setRedirect} setJMXPort={setJMXPort} />
      </Route>
    );
  } else {
    display = (
      <Route exact path='/'>
        <ClusterContainer setRedirect={setRedirect} />
      </Route>
    );
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.drawer}>
        <Drawer setRedirect={setRedirect} />
      </div>
      <div className={classes.content}>
        <Switch>
          {display}
          <Route exact path='/'>
            <Welcome setRedirect={setRedirect} setJMXPort={setJMXPort} />
          </Route>
          <Route path='/cluster'>
            <ClusterContainer setRedirect={setRedirect} />
          </Route>
          <Route path='/metrics'>
            <MetricsContainer setRedirect={setRedirect} jMXPort={jMXPort} />
          </Route>
          <Route path='/brokerView'>
            <ClusterNodeContainer setRedirect={setRedirect} />
          </Route>
          {/* <Route path='/about' component={About} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
