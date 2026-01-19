# Phân Tích Cơ Sở Dữ Liệu JobShare 2.0

## Tổng Quan
Database sử dụng **MariaDB/MySQL** với engine **InnoDB**, charset **utf8mb4**. Hệ thống quản lý tuyển dụng việc làm tại Nhật Bản với các đối tượng chính: Cộng tác viên (Collaborators), Công ty (Companies), Việc làm (Jobs), Ứng viên (CVs), và Đơn ứng tuyển (Job Applications).

**Tổng số bảng: 48 bảng**

---

## Danh Sách Tất Cả Các Bảng

1. `action_logs` - Log các hành động trong hệ thống
2. `admins` - Quản trị viên
3. `admin_email_configs` - Cấu hình email của admin
4. `cache` - Cache hệ thống
5. `cache_locks` - Lock cho cache
6. `campaigns` - Chiến dịch tuyển dụng
7. `campaign_applications` - Đơn ứng tuyển trong chiến dịch
8. `categories` - Danh mục (có thể dùng chung)
9. `collaborators` - Cộng tác viên (CTV)
10. `collaborator_api_logs` - Log API của CTV
11. `collaborator_notifications` - Thông báo cho CTV
12. `companies` - Công ty tuyển dụng
13. `contacts` - Liên hệ
14. `ctv_cv_storages` - Lưu trữ CV của CTV
15. `cvs` - Hồ sơ ứng viên
16. `cv_storages` - Lưu trữ file CV
17. `cv_updates` - Cập nhật CV
18. `email_companies` - Email công ty
19. `email_newsletters` - Email newsletter
20. `email_templates` - Template email
21. `failed_jobs` - Job queue thất bại
22. `faqs` - Câu hỏi thường gặp
23. `groups` - Nhóm quyền/quản lý
24. `home_setting_jobs` - Cài đặt việc làm trang chủ
25. `home_setting_partners` - Cài đặt đối tác trang chủ
26. `jobs` - Việc làm
27. `job_applications` - Đơn ứng tuyển
28. `job_application_logs` - Log đơn ứng tuyển
29. `job_categories` - Danh mục việc làm
30. `job_pickups` - Việc làm được chọn (pickup)
31. `job_settings` - Cài đặt việc làm
32. `job_setting_profits` - Cài đặt lợi nhuận việc làm
33. `mail_settings` - Cài đặt mail
34. `migrations` - Bảng migration Laravel
35. `oauth_access_tokens` - OAuth access tokens
36. `oauth_auth_codes` - OAuth auth codes
37. `oauth_clients` - OAuth clients
38. `oauth_personal_access_clients` - OAuth personal access clients
39. `oauth_refresh_tokens` - OAuth refresh tokens
40. `password_resets` - Reset mật khẩu
41. `payment_requests` - Yêu cầu thanh toán
42. `personal_access_tokens` - Personal access tokens
43. `point_histories` - Lịch sử điểm
44. `posts` - Bài viết/Tin tức
45. `q_jobs` - Queue jobs
46. `rank_levels` - Cấp bậc CTV
47. `sessions` - Session
48. `user_notifications` - Thông báo người dùng

---

## Mô Tả Chi Tiết Dữ Liệu Của Từng Bảng

### 📋 **NHÓM QUẢN LÝ CỘNG TÁC VIÊN & ỨNG VIÊN**

#### 1. `collaborators` - **Cộng tác viên (CTV)**
**Dữ liệu**: Thông tin tài khoản và hồ sơ của cộng tác viên - những người giới thiệu ứng viên cho các công việc
- Thông tin cá nhân: tên, email, SĐT, địa chỉ, ngày sinh, giới tính
- Thông tin tổ chức: loại tổ chức (cá nhân/công ty), tên công ty, mã số thuế, giấy phép kinh doanh
- Thông tin ngân hàng: tên ngân hàng, số tài khoản, tên chủ tài khoản, chi nhánh
- Hệ thống: mã CTV, điểm tích lũy, cấp bậc, trạng thái hoạt động, ngày duyệt
- Liên kết mạng xã hội: Facebook, Zalo

#### 2. `cvs` - **Hồ sơ ứng viên**
**Dữ liệu**: Hồ sơ CV của các ứng viên được CTV quản lý
- Thông tin cơ bản: mã CV, tiêu đề, tên đầy đủ, email, SĐT, địa chỉ
- Ngày nhận hồ sơ, trạng thái CV
- Liên kết với CTV tạo hồ sơ

#### 3. `cv_storages` - **Lưu trữ file CV**
**Dữ liệu**: Các file CV được upload và lưu trữ
- Đường dẫn file, tên file gốc
- Loại file, kích thước
- Liên kết với CV

#### 4. `ctv_cv_storages` - **Lưu trữ CV của CTV**
**Dữ liệu**: File CV được CTV quản lý riêng
- Tương tự `cv_storages` nhưng dành riêng cho CTV

#### 5. `cv_updates` - **Cập nhật CV**
**Dữ liệu**: Lịch sử cập nhật thông tin CV trong đơn ứng tuyển
- Dữ liệu CV trước và sau khi cập nhật
- Liên kết với đơn ứng tuyển

---

### 💼 **NHÓM QUẢN LÝ VIỆC LÀM**

#### 6. `jobs` - **Việc làm**
**Dữ liệu**: Thông tin chi tiết các công việc tuyển dụng
- Thông tin cơ bản: mã việc làm, tiêu đề, mô tả, yêu cầu, hướng dẫn
- Địa điểm: nơi làm việc, địa điểm phỏng vấn
- Lương và phúc lợi: lương ước tính, phụ cấp, thưởng, đánh giá lương
- Thời gian: giờ làm việc, thời gian nghỉ, làm thêm giờ
- Công ty: thông tin công ty, website, trụ sở, văn phòng khác
- Tài chính: số tiền giới thiệu, phí tham khảo
- Trạng thái: Draft, Published, Closed, Expired
- Đặc biệt: việc làm hot, ghim lên đầu
- File: JD file (tiếng Việt và tiếng Nhật), form CV bắt buộc

#### 7. `job_categories` - **Danh mục việc làm**
**Dữ liệu**: Phân loại việc làm theo danh mục (có cấu trúc cây)
- Tên danh mục, slug, mô tả
- Danh mục cha (parent_id) - cho phép cấu trúc cây
- Thứ tự hiển thị, trạng thái

#### 8. `job_applications` - **Đơn ứng tuyển**
**Dữ liệu**: Đơn ứng tuyển của ứng viên cho các việc làm - **BẢNG TRUNG TÂM**
- Thông tin ứng viên: tên, email, SĐT, địa chỉ, ngày sinh, tuổi, giới tính
- Thông tin visa: tình trạng cư trú, loại visa, ngày hết hạn visa
- Trình độ: tiếng Nhật (JLPT), tiếng Anh (TOEIC, IELTS), bằng lái xe
- Kinh nghiệm: số năm kinh nghiệm, chuyên ngành, công cụ đã học/có kinh nghiệm
- Học vấn và lịch sử làm việc: lưu dạng JSON
- Tài liệu: CV, tài liệu khác
- Tự giới thiệu và lý do ứng tuyển
- **17 trạng thái**: từ đang xử lý đến đã thanh toán
- Thông tin lương: lương hiện tại, lương mong muốn, lương hàng năm/tháng
- Lịch trình: ngày phỏng vấn, ngày nhập công ty, ngày dự kiến thanh toán
- Phí giới thiệu, phần trăm lợi nhuận
- Ghi chú, lý do từ chối

#### 9. `job_application_logs` - **Log đơn ứng tuyển**
**Dữ liệu**: Lịch sử thay đổi trạng thái và thông tin đơn ứng tuyển
- Trạng thái trước và sau khi thay đổi
- Admin thực hiện thay đổi
- Ngày tạo log

#### 10. `job_pickups` - **Việc làm được chọn**
**Dữ liệu**: Danh sách các việc làm được chọn để hiển thị đặc biệt
- Tên danh sách, danh sách ID việc làm (JSON)

#### 11. `job_settings` - **Cài đặt việc làm**
**Dữ liệu**: Các cài đặt cấu hình cho việc làm

#### 12. `job_setting_profits` - **Cài đặt lợi nhuận việc làm**
**Dữ liệu**: Cấu hình phần trăm lợi nhuận cho từng việc làm
- Loại cài đặt, ID việc làm, các giá trị cài đặt

---

### 🏢 **NHÓM QUẢN LÝ CÔNG TY**

#### 13. `companies` - **Công ty tuyển dụng**
**Dữ liệu**: Thông tin các công ty đối tác tuyển dụng
- Tên công ty, logo, mã công ty
- Loại công ty, địa chỉ, SĐT, email, website
- Mô tả, trạng thái
- Danh sách email CC/BCC (JSON)

---

### 💰 **NHÓM QUẢN LÝ THANH TOÁN**

#### 14. `payment_requests` - **Yêu cầu thanh toán**
**Dữ liệu**: Yêu cầu thanh toán phí giới thiệu cho CTV
- CTV yêu cầu, đơn ứng tuyển liên quan
- Số tiền yêu cầu
- **4 trạng thái**: Chờ duyệt, Đã duyệt, Từ chối, Đã thanh toán
- Thời gian duyệt/từ chối, lý do từ chối
- File đính kèm (nếu có)

#### 15. `point_histories` - **Lịch sử điểm**
**Dữ liệu**: Lịch sử thay đổi điểm tích lũy của CTV
- CTV, số điểm thay đổi, loại thay đổi
- Mô tả, ngày thay đổi

#### 16. `rank_levels` - **Cấp bậc CTV**
**Dữ liệu**: Các cấp bậc của CTV dựa trên điểm tích lũy
- Tên cấp bậc, mô tả
- Điểm yêu cầu, phần trăm lợi nhuận
- Trạng thái hoạt động

---

### 👥 **NHÓM QUẢN TRỊ HỆ THỐNG**

#### 17. `admins` - **Quản trị viên**
**Dữ liệu**: Tài khoản quản trị viên hệ thống
- Thông tin: tên, email, SĐT, avatar
- **3 vai trò**: Super Admin, Admin Backoffice, Admin CA Team
- Trạng thái hoạt động, nhóm quyền

#### 18. `groups` - **Nhóm quyền**
**Dữ liệu**: Nhóm quyền/quản lý cho admin và CTV
- Tên nhóm, mô tả, quyền hạn

#### 19. `action_logs` - **Log hành động**
**Dữ liệu**: Lịch sử tất cả các hành động trong hệ thống
- Admin thực hiện, đối tượng được thao tác (Job, JobApplication, etc.)
- Hành động: login, logout, create, edit, delete, import
- Dữ liệu trước và sau khi thay đổi (JSON)
- IP address, mô tả

#### 20. `admin_email_configs` - **Cấu hình email admin**
**Dữ liệu**: Cấu hình email gửi của từng admin
- Tên cấu hình, địa chỉ email, app password
- Cấu hình mặc định, trạng thái

---

### 📧 **NHÓM QUẢN LÝ EMAIL**

#### 21. `email_templates` - **Template email**
**Dữ liệu**: Các mẫu email được sử dụng trong hệ thống
- Tên template, tiêu đề, nội dung
- Loại template, trạng thái hoạt động
- Admin tạo template

#### 22. `email_companies` - **Email gửi công ty**
**Dữ liệu**: Email được gửi đến các công ty
- Tiêu đề, nội dung, chủ đề
- Danh sách người nhận (JSON), loại người nhận
- File đính kèm, trạng thái (draft/sent)
- Thời gian gửi, số lượng người nhận

#### 23. `email_newsletters` - **Email newsletter**
**Dữ liệu**: Email marketing/newsletter gửi cho CTV
- Chủ đề, nội dung
- Danh sách người nhận (JSON), nhóm người nhận
- Lịch gửi, thời gian gửi
- File đính kèm, ghi chú

#### 24. `mail_settings` - **Cài đặt mail**
**Dữ liệu**: Cấu hình hệ thống gửi mail

---

### 🎯 **NHÓM CHIẾN DỊCH**

#### 25. `campaigns` - **Chiến dịch tuyển dụng**
**Dữ liệu**: Các chiến dịch tuyển dụng đặc biệt
- Tên, mô tả chiến dịch
- Thời gian: ngày bắt đầu, ngày kết thúc
- Giới hạn số CV, phần trăm thưởng
- Danh sách ID việc làm (JSON)
- Trạng thái: inactive, active, ended

#### 26. `campaign_applications` - **Đơn ứng tuyển trong chiến dịch**
**Dữ liệu**: Đơn ứng tuyển thuộc các chiến dịch
- Liên kết chiến dịch và đơn ứng tuyển

---

### 📰 **NHÓM NỘI DUNG**

#### 27. `posts` - **Bài viết/Tin tức**
**Dữ liệu**: Bài viết, tin tức, thông báo trên hệ thống
- Tiêu đề, nội dung, slug
- Ảnh đại diện, mô tả
- Tác giả (admin), trạng thái
- Ngày xuất bản

#### 28. `faqs` - **Câu hỏi thường gặp**
**Dữ liệu**: Câu hỏi và câu trả lời thường gặp
- Câu hỏi, câu trả lời
- Thứ tự hiển thị, trạng thái

#### 29. `categories` - **Danh mục**
**Dữ liệu**: Danh mục chung (có thể dùng cho posts, faqs, etc.)
- Tên, slug, mô tả
- Danh mục cha, thứ tự

#### 30. `contacts` - **Liên hệ**
**Dữ liệu**: Thông tin liên hệ từ người dùng
- Tên, email, SĐT, nội dung
- Trạng thái xử lý

---

### 🔔 **NHÓM THÔNG BÁO**

#### 31. `collaborator_notifications` - **Thông báo CTV**
**Dữ liệu**: Thông báo gửi cho cộng tác viên
- CTV nhận, nội dung, loại thông báo
- Việc làm liên quan (nếu có)
- Đã đọc/chưa đọc, thời gian

#### 32. `user_notifications` - **Thông báo người dùng**
**Dữ liệu**: Thông báo chung cho người dùng hệ thống

---

### 🔐 **NHÓM XÁC THỰC & BẢO MẬT**

#### 33. `oauth_access_tokens` - **OAuth Access Tokens**
**Dữ liệu**: Token truy cập OAuth cho API
- User ID, Client ID, tên token
- Quyền (scopes), trạng thái thu hồi
- Thời gian hết hạn

#### 34. `oauth_auth_codes` - **OAuth Auth Codes**
**Dữ liệu**: Mã xác thực OAuth tạm thời

#### 35. `oauth_clients` - **OAuth Clients**
**Dữ liệu**: Ứng dụng client OAuth
- Tên client, secret, provider
- Redirect URI, loại client
- Trạng thái thu hồi

#### 36. `oauth_personal_access_clients` - **OAuth Personal Access Clients**
**Dữ liệu**: Client cho personal access tokens

#### 37. `oauth_refresh_tokens` - **OAuth Refresh Tokens**
**Dữ liệu**: Token làm mới OAuth
- Liên kết với access token
- Thời gian hết hạn

#### 38. `personal_access_tokens` - **Personal Access Tokens**
**Dữ liệu**: Token truy cập cá nhân (Laravel Sanctum)
- Loại đối tượng (tokenable_type), ID đối tượng
- Tên token, token hash
- Quyền, thời gian sử dụng cuối, thời gian hết hạn

#### 39. `password_resets` - **Reset mật khẩu**
**Dữ liệu**: Token reset mật khẩu
- Email, token, thời gian tạo

#### 40. `sessions` - **Session**
**Dữ liệu**: Session của người dùng
- User ID, IP address, user agent
- Payload, thời gian hoạt động cuối

---

### ⚙️ **NHÓM HỆ THỐNG & CẤU HÌNH**

#### 41. `cache` - **Cache**
**Dữ liệu**: Dữ liệu cache của hệ thống
- Key, value, thời gian hết hạn

#### 42. `cache_locks` - **Cache Locks**
**Dữ liệu**: Lock cho cache để tránh race condition
- Key, owner, thời gian hết hạn

#### 43. `failed_jobs` - **Job Queue thất bại**
**Dữ liệu**: Các job trong queue bị lỗi
- Tên job, connection, queue
- Payload, exception, thời gian thất bại

#### 44. `q_jobs` - **Queue Jobs**
**Dữ liệu**: Các job đang chờ xử lý trong queue
- Tên job, connection, queue
- Payload, số lần thử, thời gian chạy

#### 45. `migrations` - **Migrations**
**Dữ liệu**: Lịch sử migration database (Laravel)
- Tên migration, batch number

#### 46. `home_setting_jobs` - **Cài đặt việc làm trang chủ**
**Dữ liệu**: Cấu hình việc làm hiển thị trên trang chủ
- Danh sách ID việc làm, thứ tự

#### 47. `home_setting_partners` - **Cài đặt đối tác trang chủ**
**Dữ liệu**: Cấu hình đối tác hiển thị trên trang chủ
- Danh sách đối tác, logo, link

#### 48. `collaborator_api_logs` - **Log API CTV**
**Dữ liệu**: Lịch sử gọi API của CTV
- CTV, endpoint, method
- Request, response, status code
- Thời gian, IP address

---

## Chi Tiết: Các Bảng Sử Dụng Dữ Liệu Job

Một **job (việc làm)** trong hệ thống được sử dụng và tham chiếu bởi **7 bảng chính** và **2 bảng gián tiếp**:

### 🔗 **CÁC BẢNG CÓ FOREIGN KEY TRỰC TIẾP**

#### 1. **`job_applications`** - Đơn ứng tuyển
**Mối quan hệ**: N-1 (Nhiều đơn ứng tuyển → 1 job)
- **Trường**: `job_id` (int, NOT NULL, FK → `jobs.id`)
- **Mục đích**: Lưu các đơn ứng tuyển của ứng viên cho job này
- **Dữ liệu**: Mỗi đơn ứng tuyển gắn với một job cụ thể
- **Ràng buộc**: Foreign key bắt buộc, không thể null
- **Ví dụ**: Job ID 117 có thể có nhiều đơn ứng tuyển từ các CTV khác nhau

#### 2. **`collaborator_notifications`** - Thông báo CTV
**Mối quan hệ**: N-1 (Nhiều thông báo → 1 job, nullable)
- **Trường**: `job_id` (bigint UNSIGNED, nullable, FK → `jobs.id`)
- **Mục đích**: Thông báo cho CTV về job mới hoặc cập nhật job
- **Dữ liệu**: Thông báo có thể liên quan đến một job cụ thể (hoặc không)
- **Ràng buộc**: Foreign key, ON DELETE SET NULL (khi xóa job, job_id = NULL)
- **Ví dụ**: "Job mới: Kỹ sư IT tại Tokyo" → job_id = 156

#### 3. **`job_settings`** - Cài đặt job
**Mối quan hệ**: 1-1 (1 job → 1 setting, unique)
- **Trường**: `job_id` (bigint UNSIGNED, NOT NULL, FK → `jobs.id`, UNIQUE)
- **Mục đích**: Cấu hình yêu cầu và điều kiện cho job
- **Dữ liệu**: 
  - Trình độ tiếng Nhật (JLPT N1-N5)
  - Số năm kinh nghiệm (1年, 2年, 3年以上, 未経験)
  - Chuyên ngành (機械設計, 電気電子, IT, 建築・建設, 文系)
  - Bằng cấp/chứng chỉ
  - Các yêu cầu bắt buộc/tùy chọn
- **Ràng buộc**: UNIQUE constraint - mỗi job chỉ có 1 setting
- **Ví dụ**: Job 221 yêu cầu JLPT N2, 3年以上 kinh nghiệm, chuyên ngành IT

#### 4. **`job_setting_profits`** - Cấu hình lợi nhuận job
**Mối quan hệ**: 1-N (1 job → N profit settings)
- **Trường**: `job_id` (bigint, NOT NULL, FK → `jobs.id`)
- **Mục đích**: Cấu hình phần trăm/phí lợi nhuận cho job
- **Dữ liệu**:
  - Loại cài đặt (type): 1 = số tiền cố định, 2 = phần trăm
  - Các giá trị cài đặt (settings): mảng JSON
  - Loại setting (setting_type): 1, 2, 3
- **Ràng buộc**: Foreign key, một job có thể có nhiều profit settings
- **Ví dụ**: Job 214 có profit setting: type=1, settings=[240000] (240,000 yên)

---

### 📋 **CÁC BẢNG LƯU JOB_ID DẠNG JSON ARRAY**

#### 5. **`campaigns`** - Chiến dịch tuyển dụng
**Mối quan hệ**: N-N (Nhiều campaigns → Nhiều jobs)
- **Trường**: `job_ids` (longtext JSON, nullable)
- **Mục đích**: Lưu danh sách các job thuộc chiến dịch
- **Dữ liệu**: Mảng JSON chứa các ID job, ví dụ: `[164, 163, 78]`
- **Ràng buộc**: JSON validation (json_valid)
- **Ví dụ**: Campaign "Tăng phí 30%" chứa job_ids: [164, 163, 78]
- **Lưu ý**: Không có foreign key constraint, chỉ lưu ID dạng JSON

#### 6. **`job_pickups`** - Việc làm được chọn
**Mối quan hệ**: N-N (Nhiều pickups → Nhiều jobs)
- **Trường**: `job_ids` (longtext JSON, NOT NULL)
- **Mục đích**: Danh sách các job được chọn để hiển thị đặc biệt
- **Dữ liệu**: Mảng JSON chứa các ID job, bắt buộc phải có
- **Ràng buộc**: JSON validation (json_valid), NOT NULL
- **Ví dụ**: Pickup "Hot Jobs tháng 10" chứa job_ids: [156, 157, 158]

---

### 🔄 **CÁC BẢNG LIÊN QUAN GIÁN TIẾP**

#### 7. **`job_application_logs`** - Log đơn ứng tuyển
**Mối quan hệ**: Gián tiếp qua `job_applications`
- **Trường**: Không có `job_id` trực tiếp
- **Mối quan hệ**: `job_application_logs` → `job_applications` → `jobs`
- **Mục đích**: Log thay đổi trạng thái đơn ứng tuyển (mà đơn đó thuộc về một job)
- **Cách truy vấn**: JOIN qua `job_applications.job_id`

#### 8. **`payment_requests`** - Yêu cầu thanh toán
**Mối quan hệ**: Gián tiếp qua `job_applications`
- **Trường**: Không có `job_id` trực tiếp
- **Mối quan hệ**: `payment_requests` → `job_applications` → `jobs`
- **Mục đích**: Yêu cầu thanh toán phí giới thiệu cho đơn ứng tuyển (mà đơn đó thuộc về một job)
- **Cách truy vấn**: JOIN qua `job_applications.job_id`

#### 9. **`action_logs`** - Log hành động
**Mối quan hệ**: Gián tiếp (lưu trong JSON)
- **Trường**: Không có `job_id` trực tiếp
- **Dữ liệu**: Có thể lưu `job_id` trong trường `before` hoặc `after` (JSON)
- **Mục đích**: Log các thao tác create/edit/delete job
- **Ví dụ**: `{"object": "Job", "action": "edit", "after": {"id": 156, "title": "..."}}`

---

### 📊 **TÓM TẮT SỬ DỤNG JOB TRONG CÁC BẢNG**

| Bảng | Trường | Kiểu | Ràng buộc | Mối quan hệ | Mục đích |
|------|--------|------|-----------|-------------|----------|
| `job_applications` | `job_id` | int, FK | NOT NULL | N-1 | Đơn ứng tuyển cho job |
| `collaborator_notifications` | `job_id` | bigint, FK | nullable | N-1 | Thông báo về job |
| `job_settings` | `job_id` | bigint, FK | NOT NULL, UNIQUE | 1-1 | Cài đặt yêu cầu job |
| `job_setting_profits` | `job_id` | bigint, FK | NOT NULL | 1-N | Cấu hình lợi nhuận |
| `campaigns` | `job_ids` | JSON array | nullable | N-N | Job trong chiến dịch |
| `job_pickups` | `job_ids` | JSON array | NOT NULL | N-N | Job được chọn |
| `job_application_logs` | - | - | - | Gián tiếp | Log đơn ứng tuyển |
| `payment_requests` | - | - | - | Gián tiếp | Thanh toán phí giới thiệu |
| `action_logs` | - | - | - | Gián tiếp | Log thao tác job |

---

### 🔍 **CÁCH TRUY VẤN JOB VÀ DỮ LIỆU LIÊN QUAN**

#### 1. Lấy tất cả đơn ứng tuyển của một job:
```sql
SELECT * FROM job_applications WHERE job_id = 156;
```

#### 2. Lấy cài đặt và lợi nhuận của job:
```sql
SELECT j.*, js.*, jsp.* 
FROM jobs j
LEFT JOIN job_settings js ON j.id = js.job_id
LEFT JOIN job_setting_profits jsp ON j.id = jsp.job_id
WHERE j.id = 156;
```

#### 3. Lấy các chiến dịch chứa job:
```sql
SELECT * FROM campaigns 
WHERE JSON_CONTAINS(job_ids, '156');
```

#### 4. Lấy thông báo về job:
```sql
SELECT * FROM collaborator_notifications 
WHERE job_id = 156;
```

#### 5. Lấy log và thanh toán liên quan (qua job_applications):
```sql
-- Log đơn ứng tuyển
SELECT jal.* FROM job_application_logs jal
JOIN job_applications ja ON jal.job_application_id = ja.id
WHERE ja.job_id = 156;

-- Yêu cầu thanh toán
SELECT pr.* FROM payment_requests pr
JOIN job_applications ja ON pr.job_application_id = ja.id
WHERE ja.job_id = 156;
```

---

### ⚠️ **LƯU Ý QUAN TRỌNG**

1. **Foreign Key Constraints**:
   - `job_applications.job_id`: Bắt buộc, không thể null
   - `collaborator_notifications.job_id`: Có thể null (ON DELETE SET NULL)
   - `job_settings.job_id`: UNIQUE - mỗi job chỉ có 1 setting
   - `job_setting_profits.job_id`: Một job có thể có nhiều profit settings

2. **JSON Arrays**:
   - `campaigns.job_ids` và `job_pickups.job_ids` không có foreign key constraint
   - Cần validate JSON khi insert/update
   - Sử dụng `JSON_CONTAINS()` để query

3. **Soft Delete**:
   - Bảng `jobs` có `deleted_at` (soft delete)
   - Khi xóa job, các bảng có FK sẽ:
     - `job_applications`: Vẫn giữ job_id (không có ON DELETE)
     - `collaborator_notifications`: job_id = NULL (ON DELETE SET NULL)
     - `job_settings`: Vẫn giữ job_id (không có ON DELETE)

4. **Performance**:
   - Nên có index trên `job_applications.job_id` (thường xuyên query)
   - Index trên `collaborator_notifications.job_id`
   - Index trên `job_settings.job_id` (đã là UNIQUE nên tự động có index)

---

## Chi Tiết: Lấy Thông Tin Đầy Đủ Của 1 Job

Để lấy **đầy đủ thông tin chi tiết** của một job, cần join/lấy dữ liệu từ **6-8 bảng** tùy theo nhu cầu:

### 📋 **BẢNG BẮT BUỘC (JOIN)**

#### 1. **`jobs`** - Bảng chính
**Thông tin cơ bản của job** (lưu trực tiếp trong bảng):
- ✅ Thông tin job: `id`, `job_code`, `title`, `slug`, `description`, `instruction`, `requirements`
- ✅ Địa điểm: `work_location`, `interview_location`
- ✅ Lương & phúc lợi: `estimated_salary`, `referral_amount`, `bonus`, `salary_review`, `benefits`, `holidays`, `social_insurance`, `transportation`
- ✅ Thời gian: `working_hours`, `break_time`, `overtime`, `overtime_allowance`, `deadline`
- ✅ Loại tuyển dụng: `recruitment_type`, `contract_period`, `smoking_policy`
- ✅ Thông tin công ty (lưu trực tiếp): `company_name`, `company_website`, `head_office`, `other_offices`, `business_field`, `affiliated_companies`, `stock_listing`, `major_shareholders`
- ✅ File: `jd_file`, `jd_file_jp`, `required_cv_form`
- ✅ Trạng thái: `status`, `is_pinned`, `is_hot`, `views_count`
- ✅ Timestamps: `created_at`, `updated_at`, `deleted_at`

#### 2. **`job_categories`** - Danh mục việc làm
**Thông tin danh mục** (JOIN qua `job_category_id`):
- ✅ `id`, `name`, `slug`, `description`
- ✅ `parent_id` (danh mục cha - có thể join thêm để lấy cấu trúc cây)
- ✅ `order`, `status`

**SQL JOIN:**
```sql
LEFT JOIN job_categories jc ON jobs.job_category_id = jc.id
```

#### 3. **`companies`** - Công ty (Optional)
**Thông tin công ty đầy đủ** (JOIN qua `company_id`, nullable):
- ✅ `id`, `name`, `logo`, `company_code`
- ✅ `type`, `address`, `phone`, `email`, `website`, `description`
- ✅ `email_cc`, `email_bcc` (JSON arrays)
- ⚠️ **Lưu ý**: Bảng `jobs` đã lưu `company_name` trực tiếp, nhưng `companies` có thông tin đầy đủ hơn

**SQL JOIN:**
```sql
LEFT JOIN companies c ON jobs.company_id = c.id
```

---

### ⚙️ **BẢNG CẤU HÌNH (JOIN)**

#### 4. **`job_settings`** - Cài đặt yêu cầu
**Yêu cầu và điều kiện của job** (JOIN qua `job_id`, 1-1):
- ✅ Trình độ tiếng Nhật: `japanese_level` (1.N1, 2.N2, 3.N3, 4.N4, 5.N5, 6.なくてもいい)
- ✅ Số năm kinh nghiệm: `experience_years` (1.1年, 2.2年, 3.3年以上, 4.未経験)
- ✅ Chuyên ngành: `specialization` (1.機械設計, 2.電気電子, 3.IT, 4.建築・建設, 5.文系)
- ✅ Bằng cấp: `qualification` (1.Bằng lái xe, 2.Kỹ sư kiến trúc cấp 1, 3.Kỹ sư kiến trúc cấp 2, 4.chứng chỉ IT)
- ✅ Yêu cầu bắt buộc: `japanese_level_required`, `experience_years_required`, `specialization_required`, `qualification_required`
- ✅ Trạng thái: `status`

**SQL JOIN:**
```sql
LEFT JOIN job_settings js ON jobs.id = js.job_id
```

#### 5. **`job_setting_profits`** - Cấu hình lợi nhuận
**Cấu hình phần trăm/phí lợi nhuận** (JOIN qua `job_id`, 1-N):
- ✅ Loại: `type` (1 = số tiền cố định, 2 = phần trăm)
- ✅ Cài đặt: `settings` (JSON array)
- ✅ Loại setting: `setting_type`
- ✅ Người tạo: `created_by`

**SQL JOIN:**
```sql
LEFT JOIN job_setting_profits jsp ON jobs.id = jsp.job_id
```

---

### 📊 **BẢNG THỐNG KÊ (OPTIONAL - Tùy nhu cầu)**

#### 6. **`job_applications`** - Đơn ứng tuyển
**Thống kê đơn ứng tuyển** (COUNT, GROUP BY):
- ✅ Số lượng đơn ứng tuyển: `COUNT(*)`
- ✅ Số đơn theo trạng thái: `COUNT(*) WHERE status = X`
- ✅ Số đơn đã nyusha: `COUNT(*) WHERE status = 8`
- ✅ Số đơn đã thanh toán: `COUNT(*) WHERE status = 11`

**SQL:**
```sql
LEFT JOIN (
    SELECT job_id, 
           COUNT(*) as total_applications,
           SUM(CASE WHEN status = 8 THEN 1 ELSE 0 END) as nyusha_count,
           SUM(CASE WHEN status = 11 THEN 1 ELSE 0 END) as paid_count
    FROM job_applications
    GROUP BY job_id
) ja_stats ON jobs.id = ja_stats.job_id
```

---

### 🎯 **BẢNG LIÊN QUAN KHÁC (OPTIONAL)**

#### 7. **`campaigns`** - Chiến dịch
**Kiểm tra job có trong chiến dịch nào** (JSON search):
- ✅ Danh sách chiến dịch chứa job này
- ✅ Thông tin chiến dịch: `name`, `description`, `percent`, `start_date`, `end_date`, `status`

**SQL:**
```sql
-- Tìm campaigns chứa job_id
SELECT * FROM campaigns 
WHERE JSON_CONTAINS(job_ids, CAST(jobs.id AS JSON))
```

#### 8. **`job_pickups`** - Việc làm được chọn
**Kiểm tra job có được chọn không** (JSON search):
- ✅ Danh sách pickups chứa job này
- ✅ Tên pickup: `name`

**SQL:**
```sql
-- Tìm pickups chứa job_id
SELECT * FROM job_pickups 
WHERE JSON_CONTAINS(job_ids, CAST(jobs.id AS JSON))
```

---

### 📝 **VÍ DỤ SQL HOÀN CHỈNH**

#### Query cơ bản (bắt buộc):
```sql
SELECT 
    j.*,
    jc.name as category_name,
    jc.slug as category_slug,
    jc.parent_id as category_parent_id,
    c.name as company_full_name,
    c.logo as company_logo,
    c.email as company_email,
    js.japanese_level,
    js.experience_years,
    js.specialization,
    js.qualification,
    js.japanese_level_required,
    js.experience_years_required,
    js.specialization_required,
    js.qualification_required
FROM jobs j
LEFT JOIN job_categories jc ON j.job_category_id = jc.id
LEFT JOIN companies c ON j.company_id = c.id
LEFT JOIN job_settings js ON j.id = js.job_id
WHERE j.id = 156
  AND j.deleted_at IS NULL;
```

#### Query đầy đủ (bao gồm thống kê):
```sql
SELECT 
    j.*,
    -- Danh mục
    jc.name as category_name,
    jc.slug as category_slug,
    -- Công ty
    c.name as company_full_name,
    c.logo as company_logo,
    c.email as company_email,
    c.email_cc as company_email_cc,
    c.email_bcc as company_email_bcc,
    -- Cài đặt yêu cầu
    js.japanese_level,
    js.experience_years,
    js.specialization,
    js.qualification,
    js.japanese_level_required,
    js.experience_years_required,
    js.specialization_required,
    js.qualification_required,
    -- Cấu hình lợi nhuận
    jsp.type as profit_type,
    jsp.settings as profit_settings,
    jsp.setting_type as profit_setting_type,
    -- Thống kê đơn ứng tuyển
    COALESCE(ja_stats.total_applications, 0) as total_applications,
    COALESCE(ja_stats.nyusha_count, 0) as nyusha_count,
    COALESCE(ja_stats.paid_count, 0) as paid_count
FROM jobs j
LEFT JOIN job_categories jc ON j.job_category_id = jc.id
LEFT JOIN companies c ON j.company_id = c.id
LEFT JOIN job_settings js ON j.id = js.job_id
LEFT JOIN job_setting_profits jsp ON j.id = jsp.job_id
LEFT JOIN (
    SELECT 
        job_id,
        COUNT(*) as total_applications,
        SUM(CASE WHEN status = 8 THEN 1 ELSE 0 END) as nyusha_count,
        SUM(CASE WHEN status = 11 THEN 1 ELSE 0 END) as paid_count
    FROM job_applications
    WHERE deleted_at IS NULL
    GROUP BY job_id
) ja_stats ON j.id = ja_stats.job_id
WHERE j.id = 156
  AND j.deleted_at IS NULL;
```

#### Query với danh mục cha (cấu trúc cây):
```sql
SELECT 
    j.*,
    jc.name as category_name,
    jc_parent.name as parent_category_name
FROM jobs j
LEFT JOIN job_categories jc ON j.job_category_id = jc.id
LEFT JOIN job_categories jc_parent ON jc.parent_id = jc_parent.id
WHERE j.id = 156;
```

---

### 📋 **TÓM TẮT CÁC BẢNG CẦN JOIN**

| Bảng | Mối quan hệ | Loại | Thông tin lấy được |
|------|-------------|------|-------------------|
| `jobs` | Bảng chính | ✅ Bắt buộc | Tất cả thông tin cơ bản của job |
| `job_categories` | N-1 | ✅ Bắt buộc | Tên danh mục, slug, cấu trúc cây |
| `companies` | N-1 (nullable) | ⚠️ Nên có | Thông tin công ty đầy đủ (logo, email, etc.) |
| `job_settings` | 1-1 | ✅ Bắt buộc | Yêu cầu: JLPT, kinh nghiệm, chuyên ngành |
| `job_setting_profits` | 1-N | ⚠️ Tùy nhu cầu | Cấu hình lợi nhuận/phí |
| `job_applications` | 1-N | ⚠️ Thống kê | Số lượng đơn ứng tuyển, thống kê |
| `campaigns` | N-N (JSON) | ⚠️ Tùy nhu cầu | Chiến dịch chứa job |
| `job_pickups` | N-N (JSON) | ⚠️ Tùy nhu cầu | Pickup chứa job |

---

### ⚠️ **LƯU Ý QUAN TRỌNG**

1. **Bảng `jobs` đã lưu nhiều thông tin**:
   - `company_name` đã có sẵn trong `jobs`, nhưng `companies` có thêm logo, email, etc.
   - Nhiều thông tin công ty được lưu trực tiếp trong `jobs` (denormalized)

2. **Soft Delete**:
   - Luôn kiểm tra `jobs.deleted_at IS NULL`
   - Kiểm tra `job_applications.deleted_at IS NULL` khi thống kê

3. **JSON Fields**:
   - `campaigns.job_ids` và `job_pickups.job_ids` là JSON arrays
   - Sử dụng `JSON_CONTAINS()` để query
   - `job_setting_profits.settings` cũng là JSON array

4. **Performance**:
   - Nên có index trên `jobs.job_category_id`
   - Nên có index trên `jobs.company_id`
   - Nên có index trên `job_settings.job_id` (đã có UNIQUE)
   - Cache kết quả query nếu có thể

5. **Danh mục cây**:
   - `job_categories` có `parent_id` → có thể join nhiều lần để lấy toàn bộ cây danh mục

---

## Các Bảng Chính và Mối Quan Hệ

### 1. **COLLABORATORS** (Cộng tác viên)
**Mục đích**: Quản lý thông tin cộng tác viên (CTV) - người giới thiệu ứng viên

**Các trường quan trọng**:
- `id`: Primary key
- `code`: Mã CTV (ví dụ: CN202506112226452)
- `name`, `email`, `phone`: Thông tin liên hệ
- `organization_type`: Loại tổ chức (individual/company)
- `points`: Điểm tích lũy
- `rank_level_id`: Cấp bậc (FK → `rank_levels`)
- `status`: Trạng thái (1: active, 0: inactive)
- `group_id`: Nhóm CTV (FK → `groups`)

**Mối quan hệ**:
- 1-N với `job_applications` (một CTV có nhiều đơn ứng tuyển)
- 1-N với `payment_requests` (một CTV có nhiều yêu cầu thanh toán)
- 1-N với `collaborator_notifications` (một CTV có nhiều thông báo)
- 1-N với `collaborator_api_logs` (log API của CTV)
- 1-N với `cvs` (một CTV có nhiều CV)
- N-1 với `rank_levels` (nhiều CTV thuộc một cấp bậc)
- N-1 với `groups` (nhiều CTV thuộc một nhóm)

---

### 2. **JOBS** (Việc làm)
**Mục đích**: Quản lý thông tin các công việc tuyển dụng

**Các trường quan trọng**:
- `id`: Primary key
- `job_code`: Mã việc làm
- `job_category_id`: Danh mục việc làm (FK → `job_categories`)
- `title`, `slug`, `description`: Thông tin việc làm
- `company_id`: ID công ty (FK → `companies`, nullable)
- `company_name`: Tên công ty (lưu trực tiếp)
- `referral_amount`: Số tiền giới thiệu
- `status`: Trạng thái (0: Draft, 1: Published, 2: Closed, 3: Expired)
- `is_hot`: Việc làm hot (0: Không, 1: Có)
- `is_pinned`: Ghim lên đầu
- `deadline`: Hạn nộp hồ sơ

**Mối quan hệ**:
- 1-N với `job_applications` (một việc làm có nhiều đơn ứng tuyển)
- 1-N với `collaborator_notifications` (thông báo về việc làm)
- N-1 với `job_categories` (nhiều việc làm thuộc một danh mục)
- N-1 với `companies` (nhiều việc làm thuộc một công ty, nullable)

---

### 3. **JOB_CATEGORIES** (Danh mục việc làm)
**Mục đích**: Phân loại việc làm theo danh mục (có thể có cấu trúc cây)

**Các trường quan trọng**:
- `id`: Primary key
- `name`, `slug`: Tên và slug
- `parent_id`: ID danh mục cha (self-referencing, nullable)
- `order`: Thứ tự hiển thị
- `status`: Trạng thái (0: inactive, 1: active)

**Mối quan hệ**:
- 1-N với `jobs` (một danh mục có nhiều việc làm)
- Self-referencing: `parent_id` → `id` (cấu trúc cây)

---

### 4. **JOB_APPLICATIONS** (Đơn ứng tuyển)
**Mục đích**: Quản lý đơn ứng tuyển của ứng viên cho các việc làm

**Các trường quan trọng**:
- `id`: Primary key
- `job_id`: ID việc làm (FK → `jobs`)
- `collaborator_id`: ID CTV (FK → `collaborators`, nullable)
- `cv_id`: ID CV (FK → `cvs`, nullable)
- `name`, `email`, `phone`: Thông tin ứng viên
- `status`: Trạng thái (1-17: từ đang xử lý đến đã thanh toán)
- `referral_fee`: Phí giới thiệu
- `annual_salary`, `monthly_salary`: Lương
- `applied_at`: Ngày ứng tuyển
- `interview_date`: Ngày phỏng vấn
- `nyusha_date`: Ngày nhập công ty
- `expected_payment_date`: Ngày dự kiến thanh toán

**Mối quan hệ**:
- N-1 với `jobs` (nhiều đơn ứng tuyển cho một việc làm)
- N-1 với `collaborators` (nhiều đơn ứng tuyển từ một CTV)
- N-1 với `cvs` (nhiều đơn ứng tuyển từ một CV)
- 1-N với `job_application_logs` (một đơn có nhiều log)
- 1-N với `cv_updates` (một đơn có nhiều cập nhật CV)
- 1-N với `payment_requests` (một đơn có nhiều yêu cầu thanh toán)

---

### 5. **CVS** (Hồ sơ ứng viên)
**Mục đích**: Quản lý hồ sơ CV của ứng viên

**Các trường quan trọng**:
- `id`: Primary key
- `collaborator_id`: ID CTV (FK → `collaborators`)
- `code`: Mã CV
- `title`: Tiêu đề CV
- `full_name`, `email`, `phone`: Thông tin ứng viên
- `receive_date`: Ngày nhận hồ sơ
- `status`: Trạng thái CV

**Mối quan hệ**:
- N-1 với `collaborators` (nhiều CV từ một CTV)
- 1-N với `job_applications` (một CV có nhiều đơn ứng tuyển)
- 1-N với `cv_storages` (lưu trữ file CV)
- 1-N với `ctv_cv_storages` (lưu trữ CV của CTV)

---

### 6. **COMPANIES** (Công ty)
**Mục đích**: Quản lý thông tin các công ty tuyển dụng

**Các trường quan trọng**:
- `id`: Primary key
- `name`: Tên công ty
- `company_code`: Mã công ty (ví dụ: VC, AT, WO)
- `type`: Loại công ty
- `email_cc`, `email_bcc`: Danh sách email CC/BCC (JSON)

**Mối quan hệ**:
- 1-N với `jobs` (một công ty có nhiều việc làm, nullable)

---

### 7. **PAYMENT_REQUESTS** (Yêu cầu thanh toán)
**Mục đích**: Quản lý yêu cầu thanh toán phí giới thiệu cho CTV

**Các trường quan trọng**:
- `id`: Primary key
- `collaborator_id`: ID CTV (FK → `collaborators`)
- `job_application_id`: ID đơn ứng tuyển (FK → `job_applications`)
- `amount`: Số tiền
- `status`: Trạng thái (0: Chờ duyệt, 1: Đã duyệt, 2: Từ chối, 3: Đã thanh toán)
- `approved_at`, `rejected_at`: Thời gian duyệt/từ chối

**Mối quan hệ**:
- N-1 với `collaborators` (nhiều yêu cầu từ một CTV)
- N-1 với `job_applications` (nhiều yêu cầu cho một đơn ứng tuyển)

---

### 8. **JOB_APPLICATION_LOGS** (Log đơn ứng tuyển)
**Mục đích**: Ghi lại lịch sử thay đổi trạng thái đơn ứng tuyển

**Các trường quan trọng**:
- `id`: Primary key
- `job_application_id`: ID đơn ứng tuyển (FK → `job_applications`)
- `created_by`: ID admin tạo log (FK → `admins`)
- `status_before`, `status_after`: Trạng thái trước và sau
- `created_date`: Ngày tạo log

**Mối quan hệ**:
- N-1 với `job_applications` (nhiều log cho một đơn)
- N-1 với `admins` (nhiều log từ một admin)

---

## Sơ Đồ Mối Quan Hệ Chính

```
COLLABORATORS (CTV)
    │
    ├─── 1:N ───> JOB_APPLICATIONS (Đơn ứng tuyển)
    │                 │
    │                 ├─── N:1 ───> JOBS (Việc làm)
    │                 │                 │
    │                 │                 └─── N:1 ───> JOB_CATEGORIES (Danh mục)
    │                 │                 │
    │                 │                 └─── N:1 ───> COMPANIES (Công ty)
    │                 │
    │                 ├─── N:1 ───> CVS (Hồ sơ)
    │                 │                 │
    │                 │                 └─── N:1 ───> COLLABORATORS
    │                 │
    │                 └─── 1:N ───> PAYMENT_REQUESTS (Yêu cầu thanh toán)
    │                                    │
    │                                    └─── N:1 ───> COLLABORATORS
    │
    ├─── 1:N ───> CVS
    │
    ├─── 1:N ───> PAYMENT_REQUESTS
    │
    ├─── 1:N ───> COLLABORATOR_NOTIFICATIONS
    │
    └─── N:1 ───> RANK_LEVELS (Cấp bậc)
```

---

## Các Bảng Hỗ Trợ Khác

### **ADMINS** (Quản trị viên)
- Quản lý hệ thống
- Có quan hệ với `groups` (nhóm quyền)
- Tạo các log và quản lý nội dung

### **CAMPAIGNS** & **CAMPAIGN_APPLICATIONS**
- Quản lý chiến dịch tuyển dụng
- Liên kết với đơn ứng tuyển

### **POSTS** (Bài viết/Tin tức)
- Quản lý nội dung tin tức, thông báo
- Có `author_id` → `admins`

### **EMAIL_TEMPLATES**, **EMAIL_COMPANIES**, **EMAIL_NEWSLETTERS**
- Quản lý email marketing và thông báo

### **FAQS** (Câu hỏi thường gặp)
- Quản lý FAQ

### **POINT_HISTORIES** (Lịch sử điểm)
- Theo dõi thay đổi điểm của CTV

### **RANK_LEVELS** (Cấp bậc)
- Phân cấp CTV theo điểm tích lũy

---

## Luồng Dữ Liệu Chính

### 1. **Luồng Ứng Tuyển Việc Làm**
```
COLLABORATORS → CVS → JOB_APPLICATIONS → JOBS
                                      ↓
                              JOB_APPLICATION_LOGS
                                      ↓
                              PAYMENT_REQUESTS
```

### 2. **Luồng Thanh Toán**
```
JOB_APPLICATIONS (status = 8: Đã nyusha)
    ↓
PAYMENT_REQUESTS (CTV tạo yêu cầu)
    ↓
Admin duyệt → Status: 1 (Đã duyệt) → 3 (Đã thanh toán)
```

### 3. **Luồng Quản Lý Việc Làm**
```
COMPANIES → JOBS → JOB_CATEGORIES
    ↓
JOB_APPLICATIONS
```

---

## Các Trạng Thái Quan Trọng

### **JOB_APPLICATIONS.status** (17 trạng thái)
1. Admin đang xử lý hồ sơ
2. Đang tiến cử
3. Đang xếp lịch phỏng vấn
4. Đang phỏng vấn
5. Đang đợi naitei
6. Đang thương lượng naitei
7. Đang đợi nyusha
8. **Đã nyusha** (quan trọng - bắt đầu tính phí)
9. Đang chờ thanh toán với công ty
10. Gửi yêu cầu thanh toán
11. **Đã thanh toán** (hoàn thành)
12. Hồ sơ không hợp lệ
13. Hồ sơ bị trùng
14. Hồ sơ không đạt
15. Kết quả trượt
16. Hủy giữa chừng
17. Không shodaku

### **PAYMENT_REQUESTS.status**
- 0: Chờ duyệt
- 1: Đã duyệt
- 2: Từ chối
- 3: Đã thanh toán

### **JOBS.status**
- 0: Draft
- 1: Published
- 2: Closed
- 3: Expired

---

## Ghi Chú Quan Trọng

1. **Soft Delete**: Nhiều bảng sử dụng `deleted_at` (soft delete)
2. **JSON Fields**: Một số trường lưu dữ liệu JSON (ví dụ: `learned_tools`, `education_details`)
3. **Timestamps**: Hầu hết bảng có `created_at`, `updated_at`
4. **Foreign Keys**: Có ràng buộc foreign key với ON DELETE CASCADE/SET NULL
5. **Dual Language**: Hệ thống hỗ trợ tiếng Việt và tiếng Nhật

---

## Đề Xuất Cải Thiện

1. **Indexing**: Nên thêm index cho các trường thường xuyên query:
   - `job_applications.status`
   - `job_applications.collaborator_id`
   - `jobs.status`, `jobs.is_hot`
   - `payment_requests.status`

2. **Normalization**: Một số trường có thể normalize thêm:
   - `jobs.company_name` nên chỉ dùng `company_id`
   - `job_applications` có nhiều trường duplicate từ `cvs`

3. **Data Integrity**: 
   - Kiểm tra ràng buộc cho JSON fields
   - Validate status transitions trong `job_application_logs`

