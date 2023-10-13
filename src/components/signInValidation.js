function Validation(values){
  let error={}
  const email_pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const password_pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

  if(values.email===""){
    error.email="Email should not be empty"
  }
  else if(!email_pattern.test(values.email)){
    error.email="Email did not match"
  }
  else{
    error.email=""
  }

  if(values.password===""){
    error.password="Password should not be empty"
  }
  else if(!password_pattern.test(values.email)){
    error.password="Password did not match"
  }
  else{
    error.password=""
  }
  return error;
}
export default Validation;