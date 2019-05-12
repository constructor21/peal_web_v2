
export const createCampaign = (campaign) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_CAMPAIGN', campaign });
  }
};
