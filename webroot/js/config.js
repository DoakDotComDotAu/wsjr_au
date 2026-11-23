var api_key = '71f92ea9dd2f4790b92ea9dd2f779061';

var apperanceSettings = {
  providerName: "TEIO Digital Cable",
  loop: true,
  marqueeType: "observations",
  //Default is both. Set to 'none' to hide the lower detail information, Set to 'observations' for only observations, 'ad' for only advertisements, 'both' for alternation between observations and advertisements.
  marqueeAd:  [" weatherscan Australia, the only Australian version of weatherscan on MistLIVE! Live on MistLIVE 8AM to 6PM AEST on weekdays at MistLIVE.TV/channels/wxscan-au, and also live on our homepage: https://wxscan.elliotd.au/directstream.php ............. To find more weather forecasts, go to www.reg.bom.gov.au for accurate weather and storm information  .............  Take a look at our website: https://wxscan.elliotd.au! You can watch our stream directly from there! Share us with friends!"],
  onlyLDLMode: false,
  startupTime: 3000,//set to 0 if you want to skip, not recommended
  aspectRatio: 4/3,
}

var slideSettings = {
  order:[
    {slideLineup:[
      {function:"currentConditions"},
      {function:"bulletin"},
      //{function:"hourlyObservation"},
      //{function:"regionalConditions"},
      {function:"regionalForecast"},
      {function:"almanac"},
      {function:"dayPartForecast"},
      {function:"extendedForecast"},
      {function:"travelForecast"},
    ]}
  ]   
}

var audioSettings = {
  enableMusic: true,
  shuffle: true,
  randomStart: false,
  order: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],//1 to 25
}
