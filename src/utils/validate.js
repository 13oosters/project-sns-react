import API from "./api";

const validate = async (state, type, url) => {
  let response = null;

  try {
    if (type === "email") {
      const res = await API.post(url, {
        user: { email: state[type] },
      });
      const { message } = await res.data;

      response = message;
    }
    if (type === "accountname") {
      const res = await API.post(url, {
        user: { accountname: state[type] },
      });
      const { message } = await res.data;

      response = message;
    }
    if (type === "signup") {
      const res = await API.post(url, {
        user: { ...state },
      });
      const { message } = await res.data;

      response = message;
    }
    if (type === "signin") {
      const res = await API.post(url, {
        user: { email: state.email, password: state.password },
      });
      const { user } = await res.data;
      const { message } = await res.data;

      response = user || message;
    }
  } catch (err) {
    const mute = err;
  }
  return response;
};

export default validate;
