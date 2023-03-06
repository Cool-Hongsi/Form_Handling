export default {
  name: RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|\s]*$/),
  phone: RegExp(/[0-9]/),
  fullPhone: RegExp(/^([0-9]{3})-([0-9]{4})-([0-9]{4})$/),
  supplyDetail: RegExp(/^[0-9]*$/),
};
