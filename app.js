let currentBookingCode = ""
let isBookingValid = false
let totalRevenue = 0
let totalBooings = 0

let choice = ""

do {
    choice = prompt(`
${'='.repeat(35)}
    HỆ THỐNG BÁN VÉ RẠP MOONLIGHT CINEMA
${'='.repeat(35)}
1. Nhập và kiểm chuẩn mã đặt vé
2. Tính tiền vé xem phim
3. Thẩm định số seri vé may mắn
0. Thoát chương trình
${'='.repeat(35)}
Vui lòng nhập lựa chọn của bạn (0 - 3):
    `)

    if (choice.trim() === null) {
        console.log("Không được bỏ trống!");
        continue
    }

    switch (choice) {
        case "1":
            currentBookingCode = ""
            isBookingValid = false

            while (true) {
                currentBookingCode = prompt("Nhập vào mã đặt vé: ").trim().toUpperCase()
                if (currentBookingCode === null || currentBookingCode === "") {
                    alert("Chưa nhập mã đặt vé!")
                    console.log("Chưa nhập mã đặt vé!");
                    continue
                }
                if (currentBookingCode.length < 6) {
                    alert("Mã vé đặt không hợp lệ - Độ dài tối thiểu là 6 ký tự!")
                    console.log("Mã vé đặt không hợp lệ! - Độ dài tối thiểu là 6 ký tự!")
                    isBookingValid = false
                    continue
                }
    
                if (!currentBookingCode.startsWith("CIN-")) {
                    alert("Mã vé đặt không hợp lệ - Mã phải bắt đầu bằng 'CIN-'")
                    console.log("Mã vé đặt không hợp lệ! - Mã phải bắt đầu bằng 'CIN-'")
                    isBookingValid = false
                    continue
                }
    
                for (const element of currentBookingCode) {
                    if (element === " ") {
                        alert("Mã vé đặt không hợp lệ - Mã không được có khoảng trắng!")
                        console.log("Mã vé đặt không hợp lệ - Mã không được có khoảng trắng!")
                        isBookingValid = false
                        break
                    }
                }
                isBookingValid = true
                break
            }

            alert("Mã đặt vé hợp lệ!")
            console.log("Mã đặt vé hợp lệ!");
            
            break;
        
        case "2":
            if (isBookingValid === true) {
                let ticketCount = 0
                let pricePerTicket = 0
                let baseCost = 0
                let discount = 0

                ticketCount = Number(prompt("Nhập vào số vé: "))
                if (ticketCount === NaN || ticketCount === "" || ticketCount === null || ticketCount <= 0) {
                    alert("Số vé không hợp lệ!")
                    console.log("Số vé không hợp lệ!");
                    break
                }

                pricePerTicket = Number(prompt("Nhập vào giá vé"))
                if (pricePerTicket === NaN || pricePerTicket === "" || pricePerTicket === null || pricePerTicket <= 0) {
                    alert("Số vé không hợp lệ!")
                    console.log("Số vé không hợp lệ!");
                    break
                }
                
                baseCost = ticketCount * pricePerTicket
                
                if (ticketCount >= 4) {
                    discount = baseCost * 0.1;
                } 

                let serviceFee = (baseCost - discount) * 0.08
                let totalPay =  (baseCost - discount) + serviceFee

                serviceFee = Math.round(serviceFee)
                totalPay = Math.round(totalPay)

                totalRevenue += totalPay
                totalBooings += 1

                alert(`
- Mã đặt vé: ${currentBookingCode}
- Số vé: ${ticketCount}
- Giá mỗi vé: ${pricePerTicket}
- Chi phí cơ sở: ${baseCost}
- Tiền giảm giá: ${discount}
- Phí dịch vụ: ${serviceFee}
=> Tổng thanh toán: ${totalPay}
                `);

                console.log(`
- Mã đặt vé: ${currentBookingCode}
- Số vé: ${ticketCount}
- Giá mỗi vé: ${pricePerTicket}
- Chi phí cơ sở: ${baseCost}
- Tiền giảm giá: ${discount}
- Phí dịch vụ: ${serviceFee}
=> Tổng thanh toán: ${totalPay}
                `);
                
                currentBookingCode = ""
                isBookingValid = false
            } else {
                alert("Quay lại chức năng 1!")
                console.log("Chưa có mã đặt vé - Quay lại chức năng 1!");
            }
            break;

        // case "3":
            
        //     break;

        case "0":
            alert("Cảm ơn vì đã sử dụng!")
            console.log("Thoát chương trình!")
            break;

        default:
            alert("Lựa chọn không hợp lệ!")
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== "0");