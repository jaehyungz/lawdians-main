import axios from "axios";
import { BACKEND_URL } from "../config";

function postQuestion({ name, phonenumber, select, hospital, message }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${BACKEND_URL}/api/question/partner-ship`,
      data: {
        name: `${name}`,
        phone: `${phonenumber}`,
        contents: `"제휴문의" : "${select}" "병원(회사)명" : "${hospital}" "문의내용" : "${message}" `,
      },
    })
      .then((response) => {
        resolve(response);
      })

      .catch((error) => {
        reject(
          error.response.data.message ||
            "제휴신청을 실패하였습니다.\n잠시 후 다시 시도해주시기 바랍니다."
        );
      });
  });
}

export { postQuestion };
