const SuccessAlert = () => {

  // Row 1
  const usernameValue = username.value.trim();
  const sanitizedUsername = usernameValue.length !== 0 ? usernameValue : "Chưa nhập";

  // Row 2
  const addressValue = address.value.trim();
  const sanitizedAddress = addressValue.length !== 0 ? addressValue : "Chưa nhập";

  // Row 3
  const phoneValue = phone.value.trim();
  const sanitizedPhone = phoneValue.length !== 0 ? phoneValue : "Chưa nhập";

  // Row 4
  const isVietnameseTourist = document.getElementById("is_Vietnamese_tourist").checked ? "Việt Nam" : "Nước ngoài";

  // Row 5
  const selectedTour = tours.options[tours.selectedIndex].text;

  // Row 6
  const selectedTransportation = transportation_plane.checked ? "Máy bay" : transportation_bus ? "Xe du lịch" : "Tự túc";

  // Row 7
  const adultsCountValue = adults_count.value.trim();
  const childrenCountValue = children_count.value.trim();

  // Row 8
  const additionalNotes = document.getElementById("additional_notes").value.trim();
  const sanitizedAdditionalNotes = additionalNotes.length !== 0 ? additionalNotes : "";
  
  alert(
    "Bạn đã đăng ký thành công. Thông tin đăng ký của bạn là:\n" + 
    "Họ tên: " + sanitizedUsername + "\n" +
    "Địa chỉ: " + sanitizedAddress + "\n" +
    "Điện thoại: " + sanitizedPhone + "\n" +
    "Loại khách: " + isVietnameseTourist + "\n" +
    "Loại tour: " + selectedTour + "\n" +
    "Phương tiện: " + selectedTransportation + "\n" +
    "Số lượng đoàn khách: " +
    adultsCountValue + " người lớn, " +
    childrenCountValue + " trẻ em\n" +
    "Ghi chú thêm: \n" + sanitizedAdditionalNotes + "\n" 
    );
  }