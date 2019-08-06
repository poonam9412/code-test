import * as React from "react";
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { AppState } from '../features/redux/state/appState'
import { connect } from "react-redux";
import {dashBoardAction} from '../features/redux/action/dashboard'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'inherit'
  },
  icon: {
    color: 'inherit'
  },
  avatar: {
    margin: 10,
  },
  root: {
    flexGrow: 1,
    marginLeft: 3,
    marginRight: 3
  },
  flex: {
    flex: 1,
    padding: 20
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 3,
  },
  appbarColor: {
    background: '#236C80',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  borderStyle: {
    border: "solid 1px grey"
  },
  bootstrapFormLabel: {
    fontSize: 18,
  }, 
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    }   
  },
  column:{
    backgroundColor: "rgba(0, 102, 204, 0.1)"
  }
});
const style = {
  borderStyle : {
    borderStyle: "none",
    backgroundColor: "rgba(0, 102, 204,0)"
  }
}

interface dashBoardProps {
  dashboard?: any
  dispatch?: any
}
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

type PropsWithStyles = WithStyles<"root" | "flex" | "menuButton" | "button" | "appbarColor" | "list" | "fullList" | "avatar" | "icon" | "borderStyle" | "bootstrapFormLabel" | "row" | "column">;
class UserDashBoard extends React.Component<PropsWithStyles & dashBoardProps>{
  state = {
    value: 0
  }
  componentDidMount() {
    this.props.dispatch(dashBoardAction())
  }
  render() {
    const { dashBoard } = this.props.dashboard
    const dashBoardDATA = <FormControl>
      <InputLabel shrink htmlFor="bootstrap-input" className={this.props.classes.bootstrapFormLabel} >
        Amount
    </InputLabel>
      <TextField
        id="outlined-name"
        margin="normal"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">DAI</InputAdornment>
        }}
      />
    </FormControl>
    const Data = <FormControl>
      <InputLabel shrink htmlFor="bootstrap-input" className={this.props.classes.bootstrapFormLabel} >
        Price
  </InputLabel>
      <TextField
        id="outlined-hot"
        margin="normal"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">HOT</InputAdornment>
        }}
      />
    </FormControl>
    return (
      <div className={this.props.classes.root}>
        <AppBar position="sticky" className={this.props.classes.appbarColor}>

          <Typography variant="title" color="inherit" className={this.props.classes.flex}>
            Hydro
          </Typography>
        </AppBar>
        <div className="flex pt2 w-100">

          <div className={`flex flex-column w-30 items-center ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center flex-column`}>
              <div className='b flex'>Hot-DAl</div>
              <div className='flex'>Make a Limit order</div>
            </div>
            <div>

            </div>
          </div>
          <div className={`flex flex-column w-40 ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center flex-column`}>
              <div className='b flex'>OrderBook</div>
              <div className='flex'>Available Bid and Ask orders</div>
            </div>
          </div>
          <div className={`flex flex-column w-30 ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center flex-column pt2`}>
              <div className='b flex'>Charts</div>
            </div>
          </div>
        </div>
        <div className="flex w-100">

          <div className={`flex flex-column w-30 items-center ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center flex-column w-100`}>
              <AppBar position="static" color="default">
                <Tabs
                  value={0}
                  //  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Buy" />
                  <Tab label="Sell" />
                </Tabs>
              </AppBar>
              {this.state.value === 0 && <TabContainer>
              {dashBoardDATA}
              {Data}</TabContainer>}
              {this.state.value === 1 && <TabContainer>Sell</TabContainer>}
            </div>
            <div>
              <div>Order Summary</div>
            </div>
          </div>
          <div className={`flex flex-column w-40 ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center pt2`}>
            <div className="w-50 justify-center flex">Amount</div>
                <div className="w-50  flex">Price</div> 
            </div>
            { this.props.dashboard.dashBoard && dashBoard.bid.map((e,i)=>{
            return (<div className={`flex items-center pointer ${this.props.classes.row}`} key={i}>
                <div className="w-50 justify-center flex">{e.amount}</div>
                <div className={`w-50 flex flex-column ${this.props.classes.column}`}>
                  <div className={`flex`}><input type="number" name="fname" defaultValue={`${e.price}`} style={style.borderStyle}/></div>
                <div className="pt2 flex">USD {e.price*0.14}</div></div> 
                </div>)})}
          </div>
          <div className={`flex flex-column w-30 ${this.props.classes.borderStyle}`}>
            <div className={`flex items-center flex-column pt2`}>
              <div className='b flex'>Charts</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
function mapStatetoProps(state: AppState) {
  return {
    dashboard: state.dashboardDATA
  }
}
export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(UserDashBoard));