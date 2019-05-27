
const initState = {
  campaigns: [

  ]
}

const campaignReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CAMPAIGN_SUCCESS':
      console.log('create campaign success');
      return state;
    case 'CREATE_CAMPAIGN_ERROR':
      console.log('create campaign error');
      return state;
    case 'DELETE_CAMPAIGN_SUCCESS':
      console.log('delete campaign success');
      return state;
    case 'DELETE_CAMPAIGN_ERROR':
      console.log('delete campaign error');
      return state;
    default:
      return state;
  }
};

export default campaignReducer
