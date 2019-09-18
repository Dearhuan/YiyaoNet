/* SVN.committedRevision=653628 */

  /**
   * 切换登录选择tab页
   */
  function switchLoginTab(type) {
    if (type == 1) {
      //普通登录
      $("#commonLogin").show();
      $("#quickLogin").hide();
      $("#commonLoginTab").addClass("cur");
      $("#quickLoginTab").removeClass("cur");
    } else if (type == 2) {
      //快捷登录
      $("#commonLogin").hide();
      $("#quickLogin").show();
      $("#commonLoginTab").removeClass("cur");
      $("#quickLoginTab").addClass("cur");
    }
  }


 
