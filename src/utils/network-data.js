const BASE_URL = 'http://localhost:5000';

const fetchWithAuth = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

const register = async ({ username, email, password }) => {
  const response = await fetch(`${BASE_URL}/api/v1/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }
};

const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/api/v1/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { accessToken } } = responseJson;
  return accessToken;
};

const getOwnProfile = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/user`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { user } } = responseJson;
  return user;
};

const deleteUser = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/user`, {
    method: 'DELETE',
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  return message;
};

const updateUserPassword = async ({ oldPassword, newPassword }) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/user`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  return message;
};

const addSchedule = async ({ schedule, dateTime }) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ schedule, dateTime }),
  });

  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { schedule: newSchedule } } = responseJson;
  return newSchedule;
};

const getAllSchedule = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { schedules } } = responseJson;
  return schedules;
};

const getSchedule = async (id) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules/${id}`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { schedule } } = responseJson;
  return schedule;
};

const deleteSchedule = async (id) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules/${id}`, {
    method: 'DELETE',
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { id: scheduleId } } = responseJson;
  return scheduleId;
};

const finishedSchedule = async (id) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules/${id}`, {
    method: 'PATCH',
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data } = responseJson;
  return data;
};

const updateSchedule = async ({ id, schedule, dateTime }) => {
  const response = await fetchWithAuth(`${BASE_URL}/api/v1/schedules/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ schedule, dateTime }),
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { schedule: newSchedule } } = responseJson;
  return newSchedule;
};

const putAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const api = {
  register,
  login,
  getOwnProfile,
  deleteUser,
  updateUserPassword,
  putAccessToken,
  getAccessToken,
  addSchedule,
  getAllSchedule,
  getSchedule,
  deleteSchedule,
  finishedSchedule,
  updateSchedule,
};

export default api;
