import axios from "axios";

class BaseAxios {
  request = axios.create({
    baseURL: "https://k4a201.p.ssafy.io/api",
    // baseURL: "http://localhost:3000",
  });
  async basicGetRequest(url) {
    try {
      const response = await this.request.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

const request = axios.create({
  baseURL: "https://k4a201.p.ssafy.io/api",
  // baseURL: "http://localhost:3000",
});

const basicGetRequest = async (url, config) => {
  try {
    const response = await request.get(url, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

const basicPostRequest = async (url, data, config) => {
  try {
    const response = await request.post(url, data, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export class AppAxios extends BaseAxios {
  getAll() {
    return this.basicGetRequest("/app");
  }
  getOne(id) {
    return this.basicGetRequest(`/app/${id}`);
  }
  getAppByProjectId(pid) {
    return this.basicGetRequest(`/app/project/${pid}`);
  }
}

export const projectAxios = {
  getAll: () => {
    return basicGetRequest(`/project`);
  },
  getOne: (id) => {
    return basicGetRequest(`/project/${id}`);
  },
  postProject: (data) => {
    return basicPostRequest(`/project`, data);
  },
};

export const appAxios = {
  getAll: () => {
    return basicGetRequest("/app");
  },
  getOne: (id) => {
    return basicGetRequest(`/app/${id}`);
  },
  getAppByProjectId: (pid) => {
    return basicGetRequest(`/app/project/${pid}`);
  },
  postAppByProjectId: (id, data) => {
    return basicPostRequest(`/app/project/${id}`, data);
  },
};

// export class ReportAxios extends BaseAxios {
//   all() {
//     return this.basicGetRequest("/report");
//   }
//   getOne(id) {
//     return this.basicGetRequest(`/report/${id}`);
//   }
//   getListByAppId(aid) {
//     return this.basicGetRequest(`/report/app/${aid}`);
//   }
// }

export const reportAxios = {
  all: () => {
    return basicGetRequest("/report");
  },
  getOne: (id) => {
    return basicGetRequest(`/report/${id}`);
  },
  getListByAppId: (aid) => {
    return basicGetRequest(`/report/app/${aid}`);
  },
};

export const coverageAxios = {
  all: (id) => basicGetRequest(`/coverage/${id}`),
};

export const testAxios = {
  getAll: () => {
    return basicGetRequest(`/test/`);
  },
  getOne: (id) => {
    return basicGetRequest(`/test/${id}`);
  },
  getListByReportId: (rid) => {
    return basicGetRequest(`/test/report/${rid}`);
  },
  getListByAppId: (rid) => {
    return basicGetRequest(`/test/report/${rid}`);
  },
};

export const userAxios = {
  postLogin: (data) => {
    return basicPostRequest(`/user/login`, data);
  },
};
