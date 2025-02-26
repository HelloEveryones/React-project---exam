export const registerFormValidator = (data) => {
  if (!data || typeof data !== "object") {
    return "Invalid input data!";
  }

  const { email, password, repeatPassword } = data;

  if (!email || !password || !repeatPassword) {
    return "All fields are required!";
  }

  if (password !== repeatPassword) {
    return "Passwords must match!";
  }

  if (password.length < 3 || password.length > 10) {
    return "Password must be between 3 and 10 characters long!";
  }

  if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return "Invalid email format!";
  }

  return data;
};

export const createFormValidator = (data) => {
  if (!data || typeof data !== "object") {
    return "Invalid input data!";
  }

  const { title, director, year, genre, img, description } = data;

  if (!title || !director || !year || !genre || !img || !description) {
    return "All fields are required!";
  }

  if (isNaN(year) || year < 1888 || year > new Date().getFullYear()) {
    return "Invalid year!";
  }

  return data;
};

export const editFormValidator = (data) => {
  if (!data || typeof data !== "object") {
    return "Invalid input data!";
  }

  const { title, director, year, genre, img, description } = data;

  if (!title || !director || !year || !genre || !img || !description) {
    return "All fields are required!";
  }

  if (isNaN(year) || year < 1888 || year > new Date().getFullYear()) {
    return "Invalid year!";
  }

  return data;
};
