$(document).ready(function () {
    $(".message").click(function () {
        $(".message").addClass("hidden");
    });

    $(".message2").click(function () {
        $(".message2").addClass("hidden");
    });
});

// Google Maps 초기화 함수 추가
function initMap() {
    // 지도 초기화: 서울 중심으로 설정
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5665, lng: 126.9780 },  // 서울 좌표
        zoom: 12  // 확대 수준 설정
    });
}