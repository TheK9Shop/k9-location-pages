export const doordashUrls = {
  bohemia: {
    url: 'https://www.doordash.com/convenience/store/23492341/?pickup=false',
    status: 'active',
  },
  lynbrook: {
    url: 'https://www.doordash.com/convenience/store/23778612/?pickup=false',
    status: 'active',
  },
  massapequa: {
    url: 'https://www.doordash.com/convenience/store/23491028/?pickup=false',
    status: 'active',
  },
  'east-northport': {
    url: 'https://www.doordash.com/convenience/store/25014614/?pickup=false',
    status: 'active',
  },
  manorville: {
    url: 'https://www.doordash.com/convenience/store/28839136/?pickup=false',
    status: 'active',
  },
  greenville: {
    url: null,
    status: 'disabled',
  },
  naples: {
    url: null,
    status: 'coming_soon',
  },
};

export const hasDoordash = (locationSlug) => {
  const config = doordashUrls[locationSlug];
  return config?.status === 'active';
};

export const doordashStatus = (locationSlug) => {
  return doordashUrls[locationSlug]?.status;
};
