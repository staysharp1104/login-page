<script type="text/javascript">
			function huMing() {
				if(document.getElementById("yongHuMing").value == "") {
					document.getElementById("hongDian").innerHTML = "用户名不能为空";
				} else if(document.getElementById("miMa").value == "") {
					document.getElementById("diEr").innerHTML = "密码不能为空";
				} else if(document.getElementById("miMa").value != document.getElementById("queRen").value) {
					document.getElementById("diSan").innerHTML = "密码不一致";
				} else {
					document.getElementById("hongDian").innerHTML = "√";
					document.getElementById("diEr").innerHTML = "√";
					document.getElementById("diSan").innerHTML = "√";
					document.forms[0].action = "success.html";
					document.forms[0].submit();
				}
			}

			function getProvince() {
				var nian = document.getElementById("mynian");
				for(var i = 1900; i < 2018; i++) {
					var option = new Option;
					option.text = i;
					option.value = i;
					nian.add(option);
				}
			}

			function mynian() {
				var nian = document.getElementById("mynian");
				var yue = document.getElementById("myyue");
				var yueIndex = nian.selectedIndex;
				if(yue.options.length != 0) {
					yue.options.length = 0
				}
				for(var b = 1; b <= 12; b++) {
					var option = new Option;
					option.text = b;
					option.value = b;
					yue.add(option);
				}
			}

			function aa() {
				var nian = document.getElementById("mynian");
				var yue = document.getElementById("myyue");
				var ri = document.getElementById("qw");
				var yueIndex = nian.selectedIndex;
				var riIndex = yue.selectedIndex;
				if(ri.options.length != 0) {
					ri.options.length = 0
				}
				var s;
				if(yue.value == "2" && nian.value % 400 == 0 || nian.value % 4 == 0 && nian.value % 100 != 0) {
					s = 29;
				} else if(yue.value == "2") {
					s = 28;
				}
				if(yue.value == "1" || yue.value == "3" || yue.value == "5" || yue.value == "7" || yue.value == "8" || yue.value == "10" || yue.value == "12") {
					s = 31;
				} else if(yue.value == "4" || yue.value == "6" || yue.value == "9" || yue.value == "11") {
					s = 30;
				}
				for(var b = 1; b <= s; b++) {
					var option = new Option;
					option.text = b;
					option.value = b;
					ri.add(option);

				}
			}

			function getShenfen() {
				var pro = document.getElementById("shenfen");
				var proArray = ["河北", "河南"];
				for(var i = 0; i < proArray.length; i++) {
					var getoption = new Option();
					getoption.text = proArray[i];
					getoption.value = i;
					pro.add(getoption);

				}
			}

			function addCity() {
				var proinceNumber = document.getElementById("shenfen").selectedIndex;
				var cityobj = document.getElementById("city");
				document.getElementById("city").length = 0;
				var cityArray = [

					["石家庄", "邯郸", "唐山"],
					["郑州", "洛阳"]
				];
				if(city.options.length != 0) {
					city.options.length = 0;
				}
				for(var i = 0; i < cityArray[proinceNumber].length; i++) {
					var newCity = new Option();
					newCity.text = cityArray[proinceNumber][i];
					cityobj.options.add(newCity);
				}

			}

			function addqu() {
				var proinceNumber = document.getElementById("shenfen").selectedIndex;
				var cityNumber = document.getElementById("city").selectedIndex;
				var quobj = document.getElementById("qu");
				document.getElementById("qu").length = 0;
				var quArray = [

					[
						["裕华区", "新华区"],
						["邯郸1", "handan"],
						["老城区", "xinchenqu"]
					],
					[
						["郑州1", "郑州2"],
						["luoyang", "洛阳2"]
					]
				];
				for(var i = 0; i < quArray[proinceNumber][cityNumber].length; i++) {
					var newqu = new Option();
					newqu.text = quArray[proinceNumber][cityNumber][i];
					quobj.options.add(newqu);
				}
			}

			function test() {
				var getyundong = document.getElementsByName("yundong");
				for(i = 0; i < getyundong.length; i++) {
					getyundong[i].checked = true;
				}
			}

			function test1() {
				var getyungong = document.getElementsByName("yundong");
				for(i = 0; i < getyungong.length; i++) {
					if(getyungong[i].checked) {
						getyundong[i].checked != getyundong[i].checked;
					}
				}
			}

			function test2() {
				var getyundong = document.getElementsByName("yundong");
				for(i = 0; i < getyundong.length; i++) {
					getyundong[i].checked = false;
				}
			}

			function changchesbox(radioObj) {
				var taObj = document.myForm.userDescribe;
				var sexInfo = ""
				if(radioObj.checked) {
					sexInfo = radioObj.value;
				}
				if(sexInfo == "man") {
					taObj.innerHTML = "你是大帅哥。"
				} else if(sexInfo == "nv") {
					taObj.innerHTML = "不是大美女。"
				}
			}

			function tijiao() {
				var gettijiao = document.getElementById("tijiao");
				document.forms[0].action = "success.html";
			}
		</script>