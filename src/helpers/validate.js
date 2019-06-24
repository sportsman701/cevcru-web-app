export const isEmail = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

export const phoneNumber2pure = pn => pn.replace(/ |\+|-|\(|\)/g, '')
