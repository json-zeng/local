<script type="text/javascript">
var browser = {
	versions:function(){ 
	var u = navigator.userAgent, app = navigator.appVersion; 
	return {//�ƶ��ն�������汾��Ϣ 
		trident: u.indexOf("Trident") > -1, //IE�ں�
		presto: u.indexOf("Presto") > -1, //opera�ں�
		webKit: u.indexOf("AppleWebKit") > -1, //ƻ�����ȸ��ں�
		gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //����ں�
		mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
		android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android�ն˻���uc�����
		iPhone: u.indexOf("iPhone") > -1 , //�Ƿ�ΪiPhone����QQHD�����
		iPad: u.indexOf("iPad") > -1, //�Ƿ�iPad
		webApp: u.indexOf("Safari") == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
} 
document.writeln("���԰汾: "+browser.language);
document.writeln(" �Ƿ�Ϊ�ƶ��ն�: "+browser.versions.mobile);
document.writeln(" ios�ն�: "+browser.versions.ios);
document.writeln(" android�ն�: "+browser.versions.android);
document.writeln(" �Ƿ�ΪiPhone: "+browser.versions.iPhone);
document.writeln(" �Ƿ�iPad: "+browser.versions.iPad);
document.writeln(navigator.userAgent);
</script>
<script language="javascript">
var explorer =navigator.userAgent,browse;
if (explorer.indexOf("MSIE") >= 0){
	//ie 
	browse = "ie";
}else if (explorer.indexOf("Firefox") >= 0) {
	// firefox ���
	browse = "Firefox";
}else if(explorer.indexOf("Chrome") >= 0){
	//Chrome �ȸ�
	browse = "Chrome";
}else if(explorer.indexOf("Opera") >= 0){
	//Opera ŷ��
	browse = "Opera";
}else if(explorer.indexOf("Safari") >= 0){
	//Safari ƻ�������
	browse = "Safari";
}else if(explorer.indexOf("Netscape")>= 0) { 
	//Netscape
	browse = "Netscape"; 
}
</script>