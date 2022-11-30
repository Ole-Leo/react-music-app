const URL = 'http://51.250.72.80:8090/';

const validEmail = new RegExp(/^[\w]{1}[\w-.]*@[\w-]+\.\w{2,3}$/i);
const validPassword = new RegExp(/^\d?(?:.*[a-zа-яА-Я])/gi);
const validPasswordLength = 8;
const errorText = {
  signUpError: 'Пользователь уже существует',
  passwordError: 'Пароль слишком лёгкий',
  loginError: 'Некорректный email и/или пароль',
};

export { URL, validEmail, validPassword, validPasswordLength, errorText };
//`https://painassasin.online/`
//'http://51.250.72.80:8090/'
