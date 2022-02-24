class Validator {
  cellPhone(val: string | number) {
    const reg = /^\d{11}$/;
    return reg.test(val.toString())
  }
}

export const validator = new Validator();
