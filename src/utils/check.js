const CheckUtils={
    /** 验证不能包含字母
 * @param { string } value
 * @returns {boolean}
 */
isNoWord:(value) => /^[^A-Za-z]*$/g.test(value),
/** 验证邮政编码
 * @param { string } value
 * @returns {boolean}
 */
isPostcode :(value) =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value),
/** 验证微信号
 * @param { string } value
 * @returns {boolean}
 */
isWeChatNum :(value) => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value),
/** 验证16进制颜色
 * @param { string } value
 * @returns {boolean}
 */
isColor16 :(value) => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value),
/** 验证网址
 *  @param { string } value
 * @returns {boolean}
 */
isRightWebsite : (value) =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value),
/** 验证文件夹路径（window）
 *  @param { string } value
 * @returns {boolean}
 */
}