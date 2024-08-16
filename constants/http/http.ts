import { BASE_URL, DD_USER } from "./config";

interface HTTPParams<D = any> {
  //   BASE_URL: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  url: string;
  headers?: object;
  body?: D;
  needToken?: boolean;
  isFormData?: boolean;
}

export interface HTTPResponse<T = unknown> {
  status: boolean;
  message: string;
  data: T;
}

const getheader = (token: string, needToken: boolean) => {
  const headers = needToken && {
    Authorization: `Bearer ${token}`,
  };

  return { ...headers, "Content-Type": "application/json" };
};

export const httpRequest = async (params: HTTPParams) => {
  try {
    const { method, body, url, needToken = true, isFormData = false } = params;
    if (!url) throw new Error("url not set");
    if (typeof url !== "string") throw new Error("url must be a string");
    const token = localStorage.getItem(DD_USER);

    const header = getheader(token as string, needToken);

    const options: RequestInit = {
      method: method || "GET",
      redirect: "follow",
      headers: header,
      body: isFormData ? body : JSON.stringify(body),
    };

    const res = await fetch(`${BASE_URL}${url}`, options);

    const result = await res?.text();
    const response = JSON?.parse(result);

    if (response.message === "Unauthorized" && needToken) {
      localStorage.removeItem(DD_USER);
      sessionStorage.removeItem("persist:root");
      // store?.dispatch(setIsLoggedIn(false));
      window.location.href = "/login";
    }
    return response;
  } catch (error) {
    //error;
  }
};
