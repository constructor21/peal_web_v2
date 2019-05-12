const initState = {
  campaigns: [
    {id: '1', title: 'sample campaign 1'},
    {id: '2', title: 'sample campaign 2'},
    {id: '3', title: 'sample campaign 3'}
  ]
}

const campaignReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CAMPAIGN':
      console.log('create campaign', action.campaign);
  }
  return state;
};

export default campaignReducer;
