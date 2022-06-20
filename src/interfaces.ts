export interface allegroLocally {
  location: {
    label: string;
  };
  id: string;
}

export interface Product {
  allegroLocally: {
    location: {
      label: string;
    };
    id: string;
  };
  id: string;
  images: [
    {
      alt: string;
      url: string;
    }
  ];
  name: string;
  publication: {
    endingAt: string;
    startingAt: string;
  };
  seller: { id: string };
  sellingMode: {
    buyNow: {
      active: boolean;
      price: {
        sale: {
          amount: string;
          currency: string;
        };
      };
    };
    cart: { active: boolean };
  };
  shipping: {
    priceWithDeliveryLabel: string;
  };
  view: {
    type: string;
    url: string;
  };
}
