const DateUtils={
    /** 验证一个日期是不是今天
 * @param  {string} val 需要验证的日期
 * @return {boolean} 返回布尔值
 */
    isToday(val) {
    return new Date().toLocaleDateString() === new Date(val).toLocaleDateString();
  },
  /** 返回两个时间戳之间的时间
   *  @param {*} startTime 开始时间的时间戳
   *  @param {*} endTime 结束时间的时间戳
   *  @return {string} str 返回时间字符串
   */
    getTimeInterval(startTime, endTime) {
    let runTime = parseInt((endTime - startTime) / 1000);
    const year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    const month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    const day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    const hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    const minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    const second = runTime;
    let str = '';
    if (year > 0) {
      str = year + '年';
    }
    if (year <= 0 && month > 0) {
      str = month + '月';
    }
    if (year <= 0 && month <= 0 && day > 0) {
      str = day + '天';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
      str = hour + '小时';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
      str = minute + '分钟';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
      str += second + '秒';
    }
    str += '前';
    return str;
  }
}