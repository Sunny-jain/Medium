import { SigninData, SignupData } from "@sunnyjain/medium-common";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authApi = async (body: SigninData | SignupData, url: string) => {
  try {
    const response = await axios.post(BASE_URL + url, body);
    return response.data;
  } catch (err: any) {
    const error = {
      message: err.message,
      response: err.response ? err.response.data : null,
      status: err.response ? err.response.status : null,
    };
    console.log(error);
    throw error;
  }
};

export const userApi = async (token: string, url: string) => {
  try {
    const response = await axios.get(BASE_URL + url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data.user;
  } catch (err: any) {
    const error = {
      message: err.message,
      response: err.response ? err.response.data : null,
      status: err.response ? err.response.status : null,
    };
    console.log(error);
    throw error;
  }
};

export const blogApi = async (id: string, url: string) => {
  try {
    const response = await axios.get(BASE_URL + url + id);
    
    return response.data.post;
  } catch (err: any) {
    const error = {
      message: err.message,
      response: err.response ? err.response.data : null,
      status: err.response ? err.response.status : null,
    };
    console.log(error);
    throw error;
  }
};

// export const getUser = async (url:string, id)
