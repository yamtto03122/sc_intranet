// JavaScript Document

	$(function(){
		
		//MOBILE
	//시간변경신청_출근
		$(".mhr_chg_btn_box").click(function(){ 
			$(".dh_chg_gwork_popup").css("display", "block"); 
			$(".dh_chg_gwork_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_gwork_popup").css("display", "none"); 
			$(".dh_chg_gwork_pop_mask").css("display", "none"); 
		});
	//시간변경신청_퇴근
		$(".mhr_chg_btn_box02").click(function(){ 
			$(".dh_chg_fwork_popup").css("display", "block"); 
			$(".dh_chg_fwork_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_fwork_popup").css("display", "none"); 
			$(".dh_chg_fwork_pop_mask").css("display", "none"); 
		});
		//PC
	//시간변경신청_출근
		$("").click(function(){ 
			$(".dh_chg_gwork_popup").css("display", "block"); 
			$(".dh_chg_gwork_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_gwork_popup").css("display", "none"); 
			$(".dh_chg_gwork_pop_mask").css("display", "none"); 
		});
	//시간변경신청_퇴근
		$("").click(function(){ 
			$(".dh_chg_fwork_popup").css("display", "block"); 
			$(".dh_chg_fwork_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_fwork_popup").css("display", "none"); 
			$(".dh_chg_fwork_pop_mask").css("display", "none"); 
		});
	//시간변경신청_연장근무 시작
		$("").click(function(){ 
			$(".dh_chg_sovertime_popup").css("display", "block"); 
			$(".dh_chg_sovertime_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_sovertime_popup").css("display", "none"); 
			$(".dh_chg_sovertime_pop_mask").css("display", "none"); 
		});
	//시간변경신청_연장근무 종료
		$("").click(function(){ 
			$(".dh_chg_fovertime_popup").css("display", "block"); 
			$(".dh_chg_fovertime_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_chg_fovertime_popup").css("display", "none"); 
			$(".dh_chg_fovertime_pop_mask").css("display", "none"); 
		});
	//연차 등록
		$("").click(function(){ 
			$(".dh_al_popup").css("display", "block"); 
			$(".dh_al_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_al_popup").css("display", "none"); 
			$(".dh_al_pop_mask").css("display", "none"); 
		});
	//공식일정 등록
		$(".cal_btn").click(function(){ 
			$(".dh_cal_popup").css("display", "block"); 
			$(".dh_cal_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".dh_cal_popup").css("display", "none"); 
			$(".dh_cal_pop_mask").css("display", "none"); 
		});
	//관리자 연차등록
		$(".admin_btn").click(function(){ 
			$(".adm_modify_popup").css("display", "block"); 
			$(".adm_modify_pop_mask").css("display", "block"); 
			}); 
			$(".pop_btn02").click(function(){ 
			$(".adm_modify_popup").css("display", "none"); 
			$(".adm_modify_pop_mask").css("display", "none"); 
		});
  });
	$(function(){
	//날짜선택_연차 등록
		$('#dh_al').datepicker({
			lang:'ko',
			dateFormat: 'yy-mm-dd',
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 텍스트
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 Tooltip
					dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 텍스트
					dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
		});
	//날짜선택_공식일정 등록
		$('#dh_cal').datepicker({
			lang:'ko',
			dateFormat: 'yy-mm-dd',
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 텍스트
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 Tooltip
					dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 텍스트
					dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
		});
	})