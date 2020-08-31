import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5001/",
});

export enum ResponseCodeEnum {
  Success = 200,
}

export type APIResponseType<D = {}, RC = ResponseCodeEnum> = {
  data: D;
  messages: Array<string>;
  responseCode: RC;
};
