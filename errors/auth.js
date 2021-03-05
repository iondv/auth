const { IonError } = require('@iondv/core');
const { w: t } = require('@iondv/i18n');

const PREFIX = 'auth';

const codes = module.exports = {
  NO_DS: `${PREFIX}.nods`,
  FORBID: `${PREFIX}.forbid`,
  TMP_BLOCK: `${PREFIX}.tmpb`,
  FAIL: `${PREFIX}.fail`,
  LACK_PWD: `${PREFIX}.lackpwd`,
  UNAVAILABLE: `${PREFIX}.unavail`,
  NO_PWD: `${PREFIX}.nopwd`,
  INTERNAL_ERR: `${PREFIX}.500`,
  BAD_PWD_REPEAT: `${PREFIX}.bpwdr`,
  MIN_PWD_LENGTH: `${PREFIX}.mpwdl`,
  PRIOR_PWD: `${PREFIX}.priorpwd`,
  WEAK_PWD: `${PREFIX}.weakpwd`,
  UPPER_LOWER: `${PREFIX}.uplower`,
  NUMBERS: `${PREFIX}.numbers`,
  SPECIAL: `${PREFIX}.special`,
  AND: `${PREFIX}.and`,
  REG_BAN: `${PREFIX}.regban`,
  REG_FAIL: `${PREFIX}.regfail`,
  EDIT_USER_FAIL: `${PREFIX}.euf`,
  PWD_BAN_NOT_FINISHED: `${PREFIX}.pbnf`,
  NOT_AUTHENTICATED: `${PREFIX}.notauthent`,
  USER_BAN: `${PREFIX}.usrban`,
  BAD_USER_ID: `${PREFIX}.badid`,
  EXT_AUTH_FAIL: `${PREFIX}.extauthfail`,
  NO_STRATEGY: `${PREFIX}.nostrategy`
};

IonError.registerMessages({
  [codes.NO_DS]: t(`Authentication datasource is not set up.`),
  [codes.FORBID]: t(`You dont have enough permissions to login.`),
  [codes.TMP_BLOCK]: t(`Account is blocked till %d`),
  [codes.FAIL]: t(`Failed to sign in.`),
  [codes.LACK_PWD]: t(`Account is not secured with password.`),
  [codes.UNAVAILABLE]: t(`Sign in is temporary unavailable due to technical reasons.`),
  [codes.NO_PWD]: t(`User password not specified`),
  [codes.INTERNAL_ERR]: t(`Internal server error`),
  [codes.BAD_PWD_REPEAT]: t(`Wrong password repeat!`),
  [codes.MIN_PWD_LENGTH]: t(`Minimal password length is %p symbols`),
  [codes.PRIOR_PWD]: t(`Using one of %p previous passwords is prohibited.`),
  [codes.WEAK_PWD]: t(`Password too weak. Password should contain `),
  [codes.UPPER_LOWER]: t(`letters in lower and upper case`),
  [codes.NUMBERS]: t(`numbers`),
  [codes.SPECIAL]: t(`special symbols (@, $, & etc.)`),
  [codes.AND]: t(`and`),
  [codes.REG_BAN]: t(`Public sign up is prohibited!`),
  [codes.REG_FAIL]: t(`User sign up failed!`),
  [codes.EDIT_USER_FAIL]: t(`Failed to edit user profile!`),
  [codes.PWD_BAN_NOT_FINISHED]: t(`Password change prohibition period was not ended.`),
  [codes.NOT_AUTHENTICATED]: t(`User was not authenicated.`),
  [codes.USER_BAN]: t(`User is blocked.`),
  [codes.BAD_USER_ID]: t(`Failed to determine user id.`),
  [codes.EXT_AUTH_FAIL]: t(`Failed to sign up user from external system.`),
  [codes.NO_STRATEGY]: t(`No strategy specified for passport %nm`)
});
