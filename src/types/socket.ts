export type Socket = {
    ready: boolean;
    value: null | any;
    send: (data: any) => void;
  };