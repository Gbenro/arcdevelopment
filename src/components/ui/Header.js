import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginButtom: "3em",
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.button,
    borderRadius: "50px",
    marginleft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
export default function Header(props) {
  const classes = useStyles();

  const { value, setValue } = useState(0);
  const prevValue = useRef(value);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    var isDeepEqual = require("fast-deep-equal");
    if (!isDeepEqual(prevValue.current, value)) {
      window.location.pathname === "/" && value !== 0 && setValue(0);
      window.location.pathname === "/services" && value !== 1 && setValue(1);
      window.location.pathname === "/revolution" && value !== 2 && setValue(2);
      window.location.pathname === "/about" && value !== 3 && setValue(3);
      window.location.pathname === "/contact" && value !== 4 && setValue(4);
      window.location.pathname === "/estimate" && value !== 4 && setValue(5);
      prevValue.current = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              onclick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              value={value}
              onchange={handleChange}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
