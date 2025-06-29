// เรียกใช้ได้จากไฟล์อื่นแบบนี้ createError(400, "Email or Password is Invalid!!");
const createError = (code, msg) => {
  const error = new Error(msg);
  error.code = code;
  throw error;
};

export default createError;