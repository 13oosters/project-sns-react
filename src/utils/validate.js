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
  } catch (e) {
    throw new Error(e);
  }
  return response;
};

export default validate;

/* axios
.post("https://mandarin.api.weniv.co.kr/user", {
  user: { ...userData },
})
.then((res) => {
  console.log(res.data);
});
 */
