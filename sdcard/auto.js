auto.waitFor(); // Chờ quyền truy cập trợ năng

app.launchApp("TikTok");
sleep(4000); // Chờ app mở

// Tìm nút Follow (có thể bạn cần chỉnh lại từ khóa nếu TikTok thay đổi)
var followBtn = textMatches(
  /Follow|Theo dõi|Follow lại|Đang theo dõi/i
).findOne(5000);
if (followBtn) {
  followBtn.click();
  toast("Đã click nút Follow");
} else {
  toast("Không tìm thấy nút Follow");
}
