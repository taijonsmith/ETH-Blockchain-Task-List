import React, { useEffect, useState } from 'react';
import './App.css';
import EthLogo from './resources/images/eth-logo.png';
import AddIcon from '@material-ui/icons/Add';
import TaskCard from './custom_components/task_card.js';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ViewListIcon from '@material-ui/icons/ViewList';
import Video from './resources/videos/network.mp4'
import Web3 from 'web3';
import Typography from '@material-ui/core/Typography';
import DialogBox from './custom_components/dialog_box';
import CreateTask from './custom_components/create_task';
import { TASK_LIST_ABI, TASK_LIST_ADDRESS } from './congif';

function App() {
  const [tasks, setTasks] = useState([{name: 'taijon', description: 'i am a random description trying to give an example', date: ''}, {name: 'taijon 2', description: 'i am a random description trying to give an example', date: ''}]);
  const [accountKey, setAccountKey] = useState('');
  const [taskList, setTaskList] = useState(null);
  const [dialogOpened, setDialogOpened] = useState(false);
  const [createTaskOpened, setCreateTaskOpened] = useState(false);

  function view_task_list() {
    setDialogOpened(true);
  }

  function close_dialog() {
    setDialogOpened(false);
  }

  function close_create_task() {
    setCreateTaskOpened(false);
  }

  async function loadBlockchainData() {
    const ethereum = window.ethereum;
    const enabledWeb3 = await ethereum.enable();
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545/");
    var accounts = await web3.eth.getAccounts();
    if (accounts && accounts.length > 0) {
      setAccountKey(accounts[0]);
    }
    else {
      accounts = await enabledWeb3;
      if (accounts && accounts.length > 0) {
        setAccountKey(accounts[0]);
      }
    }
    const list = new web3.eth.Contract(TASK_LIST_ABI, TASK_LIST_ADDRESS);
    setTaskList(list);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const task_cards = tasks && tasks.length > 0 ? tasks.map((task, index) => {
    return (<TaskCard name={task.name} description={task.description} date={task.date} user={task.user} task={task} className="task_card"/>);
  }) : [];

  return (
    <div className="App">
      <video className="background_video" src={Video} muted loop autoPlay playsInline/>
      <div className="App-container">
          <Typography className="app_header" variant="h3">Ethereum Blockchain Task List + File Storage</Typography>
          <img src={EthLogo} className="eth_logo" alt="ethereum logo" />
          <div>
            Your Public Key: {accountKey ? accountKey : 'Failed to Connect to Ethereum Wallet!'}
          </div>
          <Button className="button" color="default" size="large" startIcon={<AddIcon />} variant="contained" onClick={() => {setCreateTaskOpened(true)}} disabled={!accountKey}>
            Add Task
          </Button>
          <Fab className="fabs" size="large" color="inherit" aria-label="view list" onClick={view_task_list}>
            <ViewListIcon />
          </Fab>
          <CreateTask opened={createTaskOpened} close_create_task={close_create_task}/>
          <DialogBox opened={dialogOpened} close_dialog={close_dialog} tasks={task_cards} />
        </div>
      </div>
  );
}

export default App;