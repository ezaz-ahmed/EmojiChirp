export interface Feature {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
}

export interface Detail {
  id: string;
  icon: string;
  title: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Plan {
  id: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
  icon: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

export interface Logo {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

export interface Link {
  id: string;
  title: string;
  icon: JSX.Element;
  url: string;
}

export interface Social {
  id: string;
  title: string;
  icon: string;
  url: string;
}
