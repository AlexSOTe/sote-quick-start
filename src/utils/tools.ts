
/**
 * json对象 转换成 ?a=1&b=2&c=3 的样子
 * @param {any} json json对象
 */
export function JsonToQuery(json: any) {
  let query = '?'
  for (var key in json) {
    query += `${key}=${json[key]}&`
  }
  return query.slice(0, -1);
}

/**
 * 把'?brandId=1&modelId=19427'的字符串转换为json对象
 * @param url 带转换字符串
 * @param seperator1 用来替换与号（&）的分隔符，默认是与号（&）
 * @param seperator2 用来替换等号（=）的分隔符，默认是等号（=）
 */
export function QueryToJson(url: any, seperator1: string = '&', seperator2: string = '=') {
  let obj: any = {};
  const q = url.split('?')[1] || '';
  q.split(seperator1).forEach((v: string) => {
    const valArr = v.split(seperator2);
    let key = valArr[0];
    let val = valArr[1];
    obj[key] = val;
  })
  return obj;
}

/**
 * 生成上门收件时间列表（比当前时间晚两个小时）
 * @param isToday 是否是今天
 */
export function GetReceivingTimeRange(isToday = true) {
  let arr: any[] = [];
  let date = new Date();
  //当前小时
  const currHour: number = date.getHours();
  //取件小时（比当前小时推后两个小时）
  let timeRange = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  if (isToday) {
    timeRange = timeRange.filter(v => v >= currHour + 2)
  }
  timeRange.forEach(hour => {
    const GetHourStr = (hour: number) => hour.toString().padStart(2, '0');
    const hourStart = GetHourStr(hour);
    const hourEnd = GetHourStr(hour + 1);
    arr.push({
      text: `${hourStart}:00 ~ ${hourEnd}:00`,
      values: `${hourStart}:00 ~ ${hourEnd}:00`
    });
  })
  return arr;
}

/**
 * 获取当前时间的年月日：2021-01-01
 * @param {any} timeStamp 目标时间戳
 */
export function GetCurrentDate(timeStamp: number) {
  let date = timeStamp ? new Date(timeStamp) : new Date();
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  month = month.toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 获取项目入口url上面的参数
 */
export const entryUrlQuery = (() => QueryToJson(location.href))();

/**
 * 检查是否有token
 */
export function CheckHasToken(): string | null {
  let token = entryUrlQuery.token;
  if (
    token === 'null' ||
    token === 'undefined' ||
    token === null ||
    token === undefined ||
    token === ''
  ) {
    token = null;
  }
  return token;
}
